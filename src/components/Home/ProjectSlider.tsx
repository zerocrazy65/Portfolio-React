import project1 from "../../assets/imgs/certificate-IoT.jpg";
import project2 from "../../assets/imgs/certificate-MERN-stack.jpg";
import project3 from "../../assets/imgs/certificate-chatGPT.png";
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import {
   ImageContainer,
   ImageSlider,
   SwiperStyle,
   Slider,
} from "../../styles/homeStyles";

SwiperCore.use([Navigation, EffectCoverflow]);

const CertificateSlider = ({ onSlideChange }: any) => {
   const handleSlideChange = (swiper) => {
      const index = swiper.realIndex;
      onSlideChange(index);
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
         >
            <Slider>
               <SwiperStyle>
                  <ImageSlider src={project1} alt="123" />
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <ImageSlider src={project2} alt="123" />
               </SwiperStyle>
            </Slider>
            <Slider>
               <SwiperStyle>
                  <ImageSlider src={project3} alt="123" />
               </SwiperStyle>
            </Slider>
         </Swiper>
      </ImageContainer>
   );
};

export default CertificateSlider;
