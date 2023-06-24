import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { YouSlider } from "../styles/homeStyles";

interface LazyLoadYoutubeProps {
   videoId: string;
}

const LazyLoadYoutube: React.FC<LazyLoadYoutubeProps> = ({ videoId }) => {
   const [ref, inView] = useInView();
   const iframeRef = useRef<HTMLIFrameElement>(null);

   useEffect(() => {
      const iframe = iframeRef.current;

      if (inView && iframe) {
         const src = `https://www.youtube.com/embed/${videoId}`;
         iframe.src = src;
      } else if (!inView && iframe && iframe.contentWindow) {
         const contentWindow = iframe.contentWindow;

         if (contentWindow) {
            contentWindow.postMessage(
               '{"event":"command","func":"pauseVideo","args":""}',
               "*"
            );
         }
      }
   }, [inView, videoId]);

   return (
      <div ref={ref} className="lazy-iframe">
         <YouSlider ref={iframeRef} title="YouTube Video" allowFullScreen />
      </div>
   );
};

export default LazyLoadYoutube;
