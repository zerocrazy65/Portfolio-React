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

SwiperCore.use([Navigation, EffectCoverflow]);

const CertificateSlider = ({ onSlideChange }) => {
   const swiperRef = useRef<any>(null);

   const handleSlideChange = (swiper) => {
      const index = swiper.realIndex;
      onSlideChange(index);

      const videos = document.querySelectorAll("video");
      videos.forEach((video) => {
         video.pause();
         video.currentTime = 0;
      });

      const activeSlide = swiperRef.current?.swiper.slides[index];
      const video = activeSlide?.querySelector("video");
      if (video) {
         video.play();
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
                  <VDOSlider src={myvideo} autoPlay></VDOSlider>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <VDOSlider src={myvideo} autoPlay></VDOSlider>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <ImageSlider src={opdcWork}></ImageSlider>
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <VDOSlider src={myvideo} autoPlay></VDOSlider>
               </SwiperStyle>
            </Slider>
         </Swiper>
      </ImageContainer>
   );
};

export default CertificateSlider;
