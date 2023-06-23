import { useRef } from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import {
   ImageContainer,
   SwiperStyle,
   Slider,
   ImageSlider,
} from "../../styles/homeStyles";
import opdcWork from "../../assets/myProjects/opdc-work.png";
import seniorWork from "../../assets/myProjects/senior-work.png";
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
                  <LazyLoadYoutube videoId="ObuazO0krEs"></LazyLoadYoutube>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <LazyLoadYoutube videoId="2o48N3CODHU"></LazyLoadYoutube>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <ImageSlider src={opdcWork}></ImageSlider>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <LazyLoadYoutube videoId="WX0GE4F0pqg"></LazyLoadYoutube>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <LazyLoadYoutube videoId="89yHOR6zAtQ"></LazyLoadYoutube>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <ImageSlider src={seniorWork}></ImageSlider>
               </SwiperStyle>
            </Slider>
         </Swiper>
      </ImageContainer>
   );
};

export default CertificateSlider;
