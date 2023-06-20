import styled, { css } from "styled-components";
import { COLORS, FONTS, FONT_SIZE } from "./themes";
import { School } from "@styled-icons/ionicons-sharp/School";
import { Email } from "@styled-icons/material/Email";

import { SwiperSlide } from "swiper/react";

export const LayoutContent = styled.div`
   display: flex;
   flex-direction: row;
   padding: 2rem 1rem 1rem 5rem;
   @media (max-width: 1400px) {
      flex-direction: column;
      padding: 2rem;
   }
   @media (max-width: 620px) {
      padding: 3rem;
   }
   @media (max-width: 425px) {
      padding: 1rem;
   }
`;

export const LayoutBlueContent = styled(LayoutContent)`
   justify-content: center;
   background-color: ${COLORS.SECONDARY};
   border-radius: 15px 15px 0 0;
   @media (max-width: 1400px) {
      height: 50rem;
   }

   @media (max-width: 720px) {
      height: 45rem;
   }
`;

export const Info = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   @media (max-width: 620px) {
      align-items: center;
   }
`;

export const Header = styled.h1`
   ${FONTS.PRIMARY}
   color: ${COLORS.PRIMARY};
   font-size: ${FONT_SIZE.XL};
   font-weight: bold;
   @media (max-width: 620px) {
      align-self: center;
   }
`;

export const Name = styled.h2`
   ${FONTS.PRIMARY}
   color: ${COLORS.SECONDARY};
   font-size: ${FONT_SIZE.LG};
   font-weight: bold;
   @media (max-width: 620px) {
      text-align: -webkit-center;
   }
`;

export const Body = styled.p`
   ${FONTS.SECONDARY}
   color: ${COLORS.BODY};
   font-size: ${FONT_SIZE.SM};
   @media (max-width: 620px) {
      text-align: -webkit-center;
   }
`;

export const SubBody = styled.p`
   ${FONTS.SECONDARY}
   color: ${COLORS.BODY};
   font-size: ${FONT_SIZE.XS};
   margin: 0;
`;

export const InsideInfo = styled.div`
   display: grid;
   grid-template-columns: auto auto;
   align-items: center;
   gap: 1rem;
   margin-bottom: 10px;
   @media (max-width: 620px) {
      display: grid;
   }
`;

export const SchoolIcon = styled(School)`
   color: ${COLORS.ORANGE};
`;
export const EmailIcon = styled(Email)`
   color: ${COLORS.ORANGE};
`;

export const FlexButton = styled.div`
   display: flex;
   flex-direction: row;
   @media (max-width: 620px) {
      flex-direction: column;
   }
`;

export const ButtonGit = styled.a`
   display: flex;
   align-items: center;
   background-color: ${COLORS.SECONDARY};
   color: ${COLORS.WHITE};
   justify-content: center;
   border-radius: 5px;
   padding: 10px;
   border: none;
   box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
   font-size: ${FONT_SIZE.MD};
   font-weight: bold;
   margin-left: 10vw;
   text-decoration: none;
   height: 5rem;
   &:hover {
      transform: scale(1.1);
      transition: 0.4s;
      background-color: ${COLORS.PRIMARY};
   }
   @media (max-width: 620px) {
      height: 100%;
      text-align: center;
      margin: 0px;
      font-size: ${FONT_SIZE.SM};
   }
`;

// ImageBox
export const GalleryContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ImageBox = styled.div`
   position: relative;
   width: 100px;
   height: 50vh;
   margin: 10px;
   border-radius: 30px;
   background-size: cover;
   background-position: center;
   transition: width 0.3s;
   @media (max-width: 1400px) {
      border-radius: 20px;
      height: 30vh;
      width: 200px;
   }
   @media (max-width: 620px) {
      border-radius: 10px;
      height: 15vh;
   }
`;

export const ImageCaption = styled.h3`
   color: ${COLORS.WHITE};
   position: absolute;
   bottom: 0;
   left: 30px;
   opacity: 0;
   transition: bottom 0.5s, opacity 0.5s;
   ${ImageBox}:hover & {
      opacity: 1;
      bottom: 25px;
   }
   @media (max-width: 425px) {
      font-size: ${FONT_SIZE.SM};
      bottom: 50px;
   }
`;

// project slider

export const ImageContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1rem;
   background-color: ${COLORS.WHITE};
   width: 40%;
   border-radius: 1rem;
   @media (max-width: 1400px) {
      align-self: center;
      width: 60%;
   }
   @media (max-width: 1000px) {
      width: 80%;
   }

   @media (max-width: 620px) {
      width: 100%;
   }
   @media (max-width: 360px) {
      background-color: transparent;
   }
`;

export const ImageSlider = styled.img`
   width: fit-content;
   height: 30vh;
   border-radius: 15px;
   @media (max-width: 620px) {
      height: 20vh;
   }
`;

export const SwiperStyle = styled.div`
   background-color: ${COLORS.ORANGE};
   width: fit-content;
   padding: 2rem;
   border-radius: clamp(0px, ((100vw - 4px) - 100%) * 9999, 8px);
   @media (max-width: 425px) {
      background-color: transparent;
   }
`;

export const Slider = styled(SwiperSlide)`
   display: flex;
   justify-content: center;
   align-items: center;
`;

// text area
export const ProjectTools = styled(Body)`
   color: ${COLORS.WHITE};
   font-weight: bold;
`;

export const ProjectTitle = styled(Name)`
   color: ${COLORS.WHITE};
   font-weight: bold;
`;

export const ProjectDescription = styled(SubBody)`
   color: ${COLORS.WHITE};
`;

export const ProjectTag = styled.span`
   ${FONTS.PRIMARY}
   color: ${COLORS.WHITE};
   font-size: ${FONT_SIZE.SM};
`;

export const HomeStyle = css`
   .internship-project {
      background-color: ${COLORS.IOSG};
      padding: 0 1rem 0 1rem;
      border-radius: 15px;
   }
   .fullstack {
      background-color: ${COLORS.IOSR};
      padding: 0 1rem 0 1rem;
      border-radius: 15px;
   }
   .senior-project {
      background-color: ${COLORS.PRIMARY};
      padding: 0 1rem 0 1rem;
      border-radius: 15px;
   }
   .study-project {
      background-color: ${COLORS.BLACKRES};
      padding: 0 1rem 0 1rem;
      border-radius: 15px;
   }

   .government-project {
      background-color: ${COLORS.IOSY};
      padding: 0 1rem 0 1rem;
      border-radius: 15px;
   }

   .difficulty {
      ${FONTS.PRIMARY};
      width: fit-content;
      color: ${COLORS.WHITE};
      background-color: ${COLORS.ORANGE};
      padding: 5px 1rem 5px 1rem;
      border-radius: 15px;
   }

   .swiper-button-next {
      color: ${COLORS.PRIMARY};
   }

   .swiper-button-prev {
      color: ${COLORS.PRIMARY};
   }
   .p-left {
      padding-right: 10vw;
   }

   @media (max-width: 620px) {
      .p-left {
         padding-right: 0vh;
      }
   }
`;
