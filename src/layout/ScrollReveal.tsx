import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const VerticalRevealContainer = styled.div<{ transition: number }>`
   opacity: 0;
   transform: translateY(${(props) => props.transition}px);
   transition: opacity 0.5s, transform 0.5s;

   &.reveal {
      opacity: 1;
      transform: translateY(0);
   }
`;

export const VerticalReveal = ({ children, transition }) => {
   const [ref, inView] = useInView({
      rootMargin: "-50px 0px",
   });

   return (
      <VerticalRevealContainer
         ref={ref}
         className={inView ? "reveal" : ""}
         transition={transition}
      >
         {children}
      </VerticalRevealContainer>
   );
};

const HorizonRevealContainer = styled.div<{ transition: number }>`
   opacity: 0;
   transform: translateX(${(props) => props.transition}px);
   transition: opacity 0.5s, transform 0.5s;

   &.reveal {
      opacity: 1;
      transform: translateX(0);
   }
`;

export const HorizonReveal = ({ children, transition }) => {
   const [ref, inView] = useInView({
      rootMargin: "-50px 0px",
   });

   return (
      <HorizonRevealContainer
         ref={ref}
         className={inView ? "reveal" : ""}
         transition={transition}
      >
         {children}
      </HorizonRevealContainer>
   );
};
