import IslandBG from "../../layout/IslandBG";
import {
   Container,
   InfoContent,
   InfoImg,
   InfoLayout,
   InfoName,
   LinkBtn,
   ProgressLayout,
} from "../../styles/aboutMeStyles";
import styled from "styled-components";

import Mypic from "../../assets/mylogo.png";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { DocumentPerson } from "@styled-icons/fluentui-system-filled/DocumentPerson";
import CertificateSlider from "./CertificateSlider";
import ProgressSteps from "./ProgressSteps";
import { HorizonReveal, VerticalReveal } from "../ScrollReveal";
import myresume from "../../assets/resume.pdf";
import MyStack from "./MyStack";

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

const AboutMe = () => {
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
                        <LinkBtn href={myresume}>
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
            <MyStack />
         </Container>
      </IslandBG>
   );
};

export default AboutMe;
