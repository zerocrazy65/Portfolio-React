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
            <ProgressLayout>
               <p>asd</p>
               <CertificateSlider />
            </ProgressLayout>
            <br />
            <HobbyLayout>
               <div className="d-flex flex-column">
                  <InfoName>Hobby</InfoName>
                  <ul>
                     <li>Badminton</li>
                     <li>Boardgame</li>
                     <li>Learn something new</li>
                     <li>Write code</li>
                  </ul>
               </div>
               <div className="d-flex flex-column">
                  <InfoName>Other Skill</InfoName>
                  <ul>
                     <li>UX/UI</li>
                     <li>Creative</li>
                     <li>Image Virtualization</li>
                     <li>Arduino</li>
                  </ul>
               </div>
            </HobbyLayout>
         </Container>
      </IslandBG>
   );
};

export default PersonalInfo;
