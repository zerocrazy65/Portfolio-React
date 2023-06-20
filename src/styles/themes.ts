import { css } from "styled-components";

export const COLORS = {
   PRIMARY: "#FFB3BA",
   SECONDARY: "#BAE1FF",
   GREEN: "#BAFFC9",
   ORANGE: "#FFDFBA",
   WHITE: "#FFFFFF",
   BLACK: "#908C86",
   BLACKRES: "#898686",
   BODY: "#B7B6B2",
   GREY: "#EEEEEE",
   IOSR: "#F85050",
   IOSY: "#FFC95F",
   IOSG: "#34BC6E",
};

export const FONTS = {
   PRIMARY: css`
      font-family: Prompt, sans-serif;
   `,
   SECONDARY: css`
      font-family: Poppins;
   `,
};

export const FONT_SIZE = {
   XS: "clamp(0.8rem, 2vw, 1.2rem)",
   SM: "clamp(0.9rem, 2vw, 1.6rem)",
   MD: "clamp(0.3rem, 25vw, 3rem)",
   LG: "clamp(1rem, 7vw, 4rem)",
   XL: "clamp(3rem, 10vw, 7rem)",
};
