import styled, { css } from "styled-components";
import { ButtonGit, Name } from "./homeStyles";
import { COLORS, FONTS, FONT_SIZE } from "./themes";
import { GraduationCap } from "@styled-icons/fa-solid/GraduationCap";
import { Book } from "@styled-icons/boxicons-regular/Book";
import { WorkOutline } from "@styled-icons/material/WorkOutline";
import { CheckCircleFill } from "@styled-icons/bootstrap/CheckCircleFill";

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
//! progress bar

export const ProgressStepsWrapper = styled.div`
   display: flex;
   flex-direction: column;
`;

export const Step = styled.div`
   width: 100%;
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 6vw;
`;

export const StepLabelContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const StepLabel = styled.span`
   ${FONTS.PRIMARY}
   margin-top: 8px;
   color: ${COLORS.BLACK};
   font-size: ${FONT_SIZE.XS};
   text-align: center;
`;

export const VerticleLine = styled.div`
   margin-left: 15px;
   margin-bottom: 1-px;
   width: 3px;
   height: 15px;
   background-color: ${COLORS.SECONDARY};
`;

export const IconTheme = css`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${COLORS.BLACK};
`;

export const LayOut = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   justify-content: center;
   height: 5rem;
`;
export const GraduateIcon = styled(GraduationCap)`
   ${IconTheme};
   color: ${COLORS.PRIMARY};
`;
export const BookIcon = styled(Book)`
   ${IconTheme};
   color: ${COLORS.ORANGE};
`;
export const WorkIcon = styled(WorkOutline)`
   ${IconTheme};
   color: ${COLORS.BODY};
`;
export const CheckIcon = styled(CheckCircleFill)`
   ${IconTheme};
   color: ${COLORS.GREEN};
   background-color: ${COLORS.WHITE};
`;

export const StepLabelYear = styled(StepLabel)`
   color: ${COLORS.PRIMARY};
`;
