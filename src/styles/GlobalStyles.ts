import { createGlobalStyle } from "styled-components";
import { COLORS, FONTS, FONT_SIZE } from "./themes";
import { HomeStyle } from "./homeStyles";

export const GlobalStyle = createGlobalStyle`

    body {
        width: 100%;
        background: linear-gradient(to right, ${COLORS.ORANGE} 50%, ${COLORS.PRIMARY} 50%), linear-gradient(to right, ${COLORS.PRIMARY} 50%, ${COLORS.GREEN} 50%);
        background-size: 100% 50%;
        background-position: center top, center bottom;
        background-repeat: no-repeat;
    }

    a{
        text-decoration: none;
    }
    
    .bg-inside {
        width: 95%;
        height: 90vh;
        border-radius: 1rem;
        background-color: ${COLORS.WHITE};
        box-shadow: -15px 15px 2px rgba(0, 0, 0, 0.15);
        overflow-y: scroll;
        scrollbar-width: thin;
    }
    
    .bg-inside::-webkit-scrollbar {
        width: 6px;
    }
    
    .bg-inside::-webkit-scrollbar-thumb {
        background-color: ${COLORS.SECONDARY};
        border-radius: 3px;
    }

    .island {
        width: 100%;
        height: 100vh;
    }

    .hovered {
        width: 300px;
        cursor: pointer;
        @media (max-width: 425px) {
            width: 500px;
         }
    } 

    .content{
        margin-top: 5rem;
    }

    li {
        ${FONTS.SECONDARY}
        font-size:${FONT_SIZE.XS};
        letter-spacing:3px;
        margin-top: 2rem;
        color: ${COLORS.BLACK}
    }

    ${HomeStyle}
`;
