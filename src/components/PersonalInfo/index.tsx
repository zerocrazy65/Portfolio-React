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

const PersonalInfo = () => {
   return (
      <IslandBG>
         <Container>
            <InfoLayout>
               <InfoImg src={Mypic} alt="Hiro" />
               <InfoContent>
                  <InfoName>Katapat Supameteegullawat</InfoName>
                  <div className="d-flex flex-row w-100 gap-3">
                     <LinkBtn href={"https://github.com/zerocrazy65"}>
                        <GitHubIcon />
                        <span>GitHub</span>
                     </LinkBtn>
                     <LinkBtn href={"https://github.com/zerocrazy65"}>
                        <ResumeIcon />
                        <span>Resume</span>
                     </LinkBtn>
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
                  <InfoName>Hobby</InfoName>
                  <ul className="d-flex flex-column w-50 align-items-start">
                     <li>Badminton</li>
                     <li>Boardgame</li>
                     <li>Learn something new</li>
                     <li>Write code</li>
                  </ul>
               </div>
               <div className="d-flex flex-column w-100 align-items-center">
                  <InfoName>Soft Skill</InfoName>
                  <ul className="d-flex flex-column w-50 align-items-start">
                     <li>Adaptability and Flexibility</li>
                     <li>Creativity</li>
                     <li>Time Management</li>
                  </ul>
               </div>
            </HobbyLayout>
         </Container>
      </IslandBG>
   );
};

export default PersonalInfo;
