import { StackLayout, InfoName } from "../../styles/aboutMeStyles";
import { Body } from "../../styles/homeStyles";
import { HorizonReveal, VerticalReveal } from "../../layout/ScrollReveal";
import styled from "styled-components";

const StackContainer = styled.div`
   display: flex;
   flex-direction: row;
   gap: 5rem;
   @media (max-width: 620px) {
      gap: 1rem;
   }
   @media (max-width: 420px) {
      gap: 0rem;
   }
`;

const MyStack = () => {
   return (
      <StackLayout>
         <div className="d-flex flex-column w-100 align-items-center">
            <VerticalReveal transition={50}>
               <InfoName>Stack</InfoName>
            </VerticalReveal>
            <StackContainer>
               <div className="d-flex flex-column w-50 align-items-start">
                  <ul>
                     <HorizonReveal transition={60}>
                        <Body>Front-End</Body>
                     </HorizonReveal>
                     <VerticalReveal transition={70}>
                        <li>React</li>
                     </VerticalReveal>
                     <VerticalReveal transition={80}>
                        <li>Vue</li>
                     </VerticalReveal>
                     <VerticalReveal transition={90}>
                        <li>StyleComponent</li>
                     </VerticalReveal>
                     <VerticalReveal transition={100}>
                        <li>Bootstrap</li>
                     </VerticalReveal>
                     <VerticalReveal transition={110}>
                        <li>Sass</li>
                     </VerticalReveal>
                  </ul>
               </div>
               <div className="d-flex flex-column w-50 align-items-start">
                  <ul>
                     <HorizonReveal transition={100}>
                        <Body>Back-End</Body>
                     </HorizonReveal>
                     <VerticalReveal transition={60}>
                        <li>NodeJS</li>
                     </VerticalReveal>
                     <VerticalReveal transition={70}>
                        <li>Flask</li>
                     </VerticalReveal>
                     <VerticalReveal transition={70}>
                        <li>MySQL</li>
                     </VerticalReveal>
                     <VerticalReveal transition={80}>
                        <li>Firebase</li>
                     </VerticalReveal>
                  </ul>
               </div>
            </StackContainer>
         </div>
      </StackLayout>
   );
};

export default MyStack;
