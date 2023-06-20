import React from "react";
import ReactDOM from "react-dom/client";
import MainRoute from "./route/MainRoute.tsx";
import { GlobalStyle } from "./styles/GlobalStyles.ts";
import "swiper/css";
import "swiper/css/navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <GlobalStyle />
      <MainRoute />
   </React.StrictMode>
);
