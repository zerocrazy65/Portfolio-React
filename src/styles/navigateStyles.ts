import styled from "styled-components";
import { COLORS, FONTS } from "./themes";
import { Eye } from "@styled-icons/entypo/Eye";
import { Player } from "@lottiefiles/react-lottie-player";
export const NavSection = styled.section`
   position: absolute;
   width: 95%;
   z-index: 111;
   height: 5rem;
   background-color: ${COLORS.WHITE};
   display: grid;
   border-radius: 1rem 1rem 0 0;
   grid-template-columns: 1fr 4fr 1fr;
   box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
   align-items: center;
   align-content: center;
   justify-items: center;
   padding: 10px 0 10px 0;
   @media (max-width: 620px) {
      justify-content: center;
   }
`;

export const NavBG = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 1rem;
   padding: 5px;
   width: 100%;
   background-color: ${COLORS.GREY};
   grid-column: 2 / span 1;
   border-radius: 1rem;
   @media (max-width: 620px) {
      background-color: ${COLORS.BLACKRES};
   }
`;

export const BreadCrumb = styled.span`
   ${FONTS.PRIMARY}
   white-space: nowrap;
   overflow: hidden;
   width: 50vw;
   text-overflow: ellipsis;
   color: ${COLORS.BLACK};
   @media (max-width: 620px) {
      color: ${COLORS.WHITE};
   }
`;
export const AreaIcon = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   gap: 10%;
   width: 100%;
   @media (max-width: 620px) {
      display: none;
   }
`;

export const MacIcon = styled.span`
   height: 15px;
   width: 15px;
   border-radius: 50%;
   display: inline-block;
`;

export const RedIcon = styled(MacIcon)`
   background-color: ${COLORS.IOSR};
`;

export const Yellow = styled(MacIcon)`
   background-color: ${COLORS.IOSY};
`;

export const GreenIcon = styled(MacIcon)`
   background-color: ${COLORS.IOSG};
`;

export const EyeIcon = styled(Eye)`
   color: ${COLORS.BLACK};
   margin-left: 1rem;
   @media (max-width: 620px) {
      color: ${COLORS.GREEN};
   }
`;

export const AnimationIcon = styled(Player)`
   &:hover {
      cursor: pointer;
   }
`;
