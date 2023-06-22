import { useRef } from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import {
   ImageContainer,
   SwiperStyle,
   Slider,
   VDOSlider,
   ImageSlider,
} from "../../styles/homeStyles";
import myvideo from "../../assets/projectVDO/myvideo.mp4";
import opdcWork from "../../assets/imgs/opdc-work.png";
import LazyLoadYoutube from "../LazyLoading";

SwiperCore.use([Navigation, EffectCoverflow]);

const CertificateSlider = ({ onSlideChange }) => {
   const swiperRef = useRef<any>(null);

   const handleSlideChange = (swiper) => {
      const index = swiper.realIndex;
      onSlideChange(index);

      const videos = document.querySelectorAll("iframe");
      videos.forEach((video) => {
         if (video.contentWindow) {
            video.contentWindow.postMessage(
               '{"event":"command","func":"pauseVideo","args":""}',
               "*"
            );
         }
      });

      const activeSlide = swiperRef.current?.swiper.slides[index];
      const video = activeSlide?.querySelector("iframe");
      if (video) {
         video.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
         );
      }
   };

   return (
      <ImageContainer>
         <Swiper
            effect={"coverflow"}
            grabCursor
            navigation={true}
            centeredSlides
            modules={EffectCoverflow}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
         >
            <Slider>
               <SwiperStyle>
                  <LazyLoadYoutube videoId="Q8EpCEYNxCs"></LazyLoadYoutube>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <LazyLoadYoutube videoId="Q8EpCEYNxCs"></LazyLoadYoutube>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <ImageSlider src={opdcWork}></ImageSlider>
               </SwiperStyle>
            </Slider>
         </Swiper>
      </ImageContainer>
   );
};

export default CertificateSlider;
