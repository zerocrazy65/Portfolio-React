import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../styles/themes";
import { SubBody } from "../styles/homeStyles";
import CancelIcon from "../assets/animation/CancelIcon.json";
import { AnimationIcon } from "../styles/navigateStyles";

export const NavText = styled(SubBody)`
   position: relative;
   font-weight: bold;
   color: ${COLORS.PRIMARY};
   &:hover {
      color: ${COLORS.BLACK};
   }
   &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 1rem;
      background-color: ${COLORS.BLACK};
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
   }

   &:hover::before {
      transform-origin: left;
      transform: scaleX(1);
   }
`;

export const StyledNavMenu = styled.div`
   position: fixed;
   top: 6vh;
   bottom: 48vh;
   width: 15rem;
   border-radius: 1rem;
   border: 15px;
   filter: drop-shadow(-6px 10px 27px rgba(0, 0, 0, 0.15));

   background-color: ${COLORS.WHITE};
   overflow-y: auto;
`;

const NavMenu = ({ isShowMenu, setIsShowMenu }) => {
   return (
      <>
         <StyledNavMenu
            style={{
               right: isShowMenu ? "4vw" : "-250px",
               transition: "right 0.3s ease-in-out",
            }}
         >
            <div
               onClick={() => {
                  return setIsShowMenu(!isShowMenu);
               }}
            >
               <AnimationIcon
                  loop
                  autoplay
                  src={CancelIcon}
                  style={{ width: 60 }}
                  className="position-absolute d-flex "
               />
            </div>
            <div className="h-100 d-flex flex-column justify-content-evenly align-items-center">
               <Link to="/">
                  <NavText>Home</NavText>
               </Link>
               <Link to="/my-work">
                  <NavText>My Work</NavText>
               </Link>
               <Link to="/personal-info">
                  <NavText>Personal Info</NavText>
               </Link>
               <Link to="/contact">
                  <NavText>Contact</NavText>
               </Link>
            </div>
         </StyledNavMenu>
      </>
   );
};

export default NavMenu;
