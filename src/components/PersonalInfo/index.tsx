import IslandBG from "../../layout/IslandBG";
import {
   Container,
   HobbyLayout,
   InfoContent,
   InfoImg,
   InfoLayout,
   InfoName,
   LinkBtn,
   ProgressLayout,
} from "../../styles/personalInfoStyles";
import styled from "styled-components";

import Mypic from "../../assets/mylogo.png";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { DocumentPerson } from "@styled-icons/fluentui-system-filled/DocumentPerson";
import CertificateSlider from "./CertificateSlider";
import ProgressSteps from "./ProgressSteps";
import { HorizonReveal, VerticalReveal } from "../../layout/ScrollReveal";
import { Body, SubBody } from "../../styles/homeStyles";

const GitHubIcon = styled(Github)`
   width: 2rem;
   @media (max-width: 760px) {
      width: 1rem;
   }
`;
const ResumeIcon = styled(DocumentPerson)`
   width: 2rem;
   @media (max-width: 760px) {
      width: 1rem;
   }
`;

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

const PersonalInfo = () => {
   return (
      <IslandBG>
         <Container>
            <InfoLayout>
               <VerticalReveal transition={30}>
                  <InfoImg src={Mypic} alt="Hiro" />
               </VerticalReveal>
               <InfoContent>
                  <HorizonReveal transition={30}>
                     <InfoName>Katapat Supameteegullawat</InfoName>
                  </HorizonReveal>
                  <div className="d-flex flex-row w-100 gap-3">
                     <HorizonReveal transition={50}>
                        <LinkBtn href={"https://github.com/zerocrazy65"}>
                           <GitHubIcon />
                           <span>GitHub</span>
                        </LinkBtn>
                     </HorizonReveal>
                     <HorizonReveal transition={50}>
                        <LinkBtn href={"https://github.com/zerocrazy65"}>
                           <ResumeIcon />
                           <span>Resume</span>
                        </LinkBtn>
                     </HorizonReveal>
                  </div>
               </InfoContent>
            </InfoLayout>
            <br />
            <br />
            <ProgressLayout>
               <div className="d-flex justify-content-center w-100">
                  <ProgressSteps />
               </div>
               <CertificateSlider />
            </ProgressLayout>
            <br />
            <br />
            <HobbyLayout>
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
            </HobbyLayout>
         </Container>
      </IslandBG>
   );
};

export default PersonalInfo;
