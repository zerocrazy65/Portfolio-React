import styled from "styled-components";
import { COLORS, FONTS, FONT_SIZE } from "./themes";

export const InsideIsland = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3rem;
   padding: 3rem;
   @media (max-width: 720px) {
      padding: 2rem;
   }

   @media (max-width: 520px) {
      padding: 1rem;
   }
`;

//! project detail
export const IslandContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
   padding: 2rem;
   background-color: ${COLORS.WHITE};
   box-shadow: 4px 3px 52px rgba(0, 0, 0, 0.2);
   border-radius: 1rem;
   height: 55vh;
   overflow-y: scroll;
   overflow-x: hidden;
   scrollbar-width: thin;

   &::-webkit-scrollbar {
      width: 6px;
   }

   &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.SECONDARY};
      border-radius: 3px;
   }

   @media (max-width: 720px) {
      padding: 1rem;
   }

   @media (max-width: 520px) {
      box-shadow: none;
      padding: 0;
   }
`;

export const ContentLayout = styled.div`
   display: flex;
   flex-direction: row;
   gap: 1rem;
   align-items: center;
   justify-content: center;
   padding: 1rem;
   @media (max-width: 720px) {
      flex-direction: column;
   }
   @media (max-width: 720px) {
      padding: 0;
   }
`;

export const IslandTextArea = styled.div`
   padding: 1rem;
   width: 70vw;

   @media (max-width: 1200px) {
      width: 60vw;
   }

   @media (max-width: 820px) {
      width: 50vw;
   }

   @media (max-width: 720px) {
      width: 100%;
   }
`;

export const IslandText = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 10px;
   padding: 1rem;
   height: 12rem;
   background-color: ${COLORS.WHITE};
   box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
   border-radius: 1rem;
   span {
      font-size: ${FONT_SIZE.XS};
      ${FONTS.SECONDARY};
      color: ${COLORS.BLACK};
   }
   @media (max-width: 720px) {
      height: 100%;
      box-shadow: 9px 17px 32px -14px rgba(0, 0, 0, 0.25);
   }

   @media (max-width: 420px) {
      padding: 10px 1rem;
   }
`;

//! icon
export const IslandTools = styled.div`
   display: flex;
   gap: 5rem;
   justify-content: space-around;
   background-color: ${COLORS.WHITE};
   box-shadow: 2px 3px 42px rgba(0, 0, 0, 0.15);
   border-radius: 1rem;
   overflow-x: scroll;
   scrollbar-width: thin;
   padding: 0.5rem;
   &::-webkit-scrollbar {
      height: 6px;
   }

   &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.SECONDARY};
      border-radius: 3px;
   }

   @media (max-width: 520px) {
      gap: 3rem;
      border-radius: 1rem;
   }
   @media (max-width: 1000px) {
      justify-content: start;
   }
`;
