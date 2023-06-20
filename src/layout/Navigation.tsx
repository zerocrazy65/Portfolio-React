import { useLocation } from "react-router-dom";
import {
   AreaIcon,
   BreadCrumb,
   GreenIcon,
   NavBG,
   NavSection,
   RedIcon,
   Yellow,
   EyeIcon,
   AnimationIcon,
} from "../styles/navigateStyles";
import { useState } from "react";
import NavMenu from "./NavMenu";

import BarIconAnimation from "../assets/animation/BarIcon.json";

const capitalize = (str: string) =>
   `${str.charAt(1).toUpperCase()}${str.slice(2)}`;

const Navigation = () => {
   const location = useLocation();
   const routeName = capitalize(location.pathname);

   const [isShowMenu, setIsShowMenu] = useState(false);

   return (
      <NavSection>
         <AreaIcon>
            <RedIcon />
            <Yellow />
            <GreenIcon />
         </AreaIcon>
         <NavBG>
            <EyeIcon size={20} />
            <BreadCrumb>
               Portfolio {routeName ? "/" : "/ Home"} {routeName}
            </BreadCrumb>
         </NavBG>
         <div
            className="d-flex justify-content-center align-items-center"
            onClick={() => {
               return setIsShowMenu(!isShowMenu);
            }}
         >
            <AnimationIcon loop hover src={BarIconAnimation} />
         </div>
         <NavMenu isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      </NavSection>
   );
};

export default Navigation;
