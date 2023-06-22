import { HorizonReveal, VerticalReveal } from "../ScrollReveal";
import {
   Body,
   ButtonGit,
   EmailIcon,
   FlexButton,
   Header,
   Info,
   InsideInfo,
   Name,
   SchoolIcon,
   SubBody,
} from "../../styles/homeStyles";

const InfoContent = () => {
   return (
      <Info>
         <VerticalReveal transition={25}>
            <Header>Hello</Header>
         </VerticalReveal>
         <HorizonReveal transition={10}>
            <Name>I'm Katapat Supameteegullawat</Name>
         </HorizonReveal>
         <HorizonReveal transition={30}>
            <Body>
               I am a passionate developer who loves well-structured work,
               beautiful scenery, and user-friendly design. I am committed to
               improving my coding skills.
            </Body>
         </HorizonReveal>
         <FlexButton>
            <InsideInfo>
               <HorizonReveal transition={15}>
                  <SchoolIcon size={30} />
               </HorizonReveal>
               <VerticalReveal transition={25}>
                  <SubBody>
                     Bachelor of Science Program in Media Technology at King
                     Mongkut's University of Technology Thonburi (Bangkuntien)
                  </SubBody>
               </VerticalReveal>
               <HorizonReveal transition={15}>
                  <EmailIcon size={30} />
               </HorizonReveal>
               <VerticalReveal transition={25}>
                  <SubBody>katapat43@gmail.com</SubBody>
               </VerticalReveal>
            </InsideInfo>
            <ButtonGit href={"https://github.com/zerocrazy65"}>
               GitHub
            </ButtonGit>
         </FlexButton>
      </Info>
   );
};

export default InfoContent;
