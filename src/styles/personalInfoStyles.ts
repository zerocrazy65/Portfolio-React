import styled from "styled-components";
import { ButtonGit, Name } from "./homeStyles";
import { COLORS, FONT_SIZE } from "./themes";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   padding: 3rem 5rem;
   @media (max-width: 720px) {
      flex-direction: column;
      padding: 2rem;
   }
`;

export const InfoLayout = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: start;
   align-items: center;
   gap: 2rem;
   width: 100%;
   @media (max-width: 1400px) {
      flex-direction: column;
   }
`;

export const ProgressLayout = styled(InfoLayout)`
   justify-content: space-between;
`;

export const HobbyLayout = styled(InfoLayout)`
   justify-content: space-around;
`;

export const InfoImg = styled.img`
   width: 10rem;
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width: 760px) {
      width: 7rem;
   }
`;

export const InfoContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: start;
   gap: 1rem;
`;

export const InfoName = styled(Name)`
   color: ${COLORS.PRIMARY};
`;

export const LinkBtn = styled(ButtonGit)`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin: 0px;
   gap: 10px;
   font-size: ${FONT_SIZE.XS};
   height: 3rem;
   @media (max-width: 760px) {
      height: clamp(2.5rem, 5vw, 10vw);
      gap: 5px;
      box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.05);
   }
`;
