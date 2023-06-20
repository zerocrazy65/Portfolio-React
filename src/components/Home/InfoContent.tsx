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
         <Header>Hello</Header>
         <Name>I'm Katapat Supameteegullawat</Name>
         <Body>
            I am a passionate developer who loves well-structured work,
            beautiful scenery, and user-friendly design. I am committed to
            improving my coding skills.
         </Body>
         <FlexButton>
            <InsideInfo>
               <SchoolIcon size={30} />
               <SubBody>
                  Bachelor of Science Program in Media Technology at King
                  Mongkut's University of Technology Thonburi (Bangkuntien)
               </SubBody>
               <EmailIcon size={30} />
               <SubBody>katapat43@gmail.com</SubBody>
            </InsideInfo>
            <ButtonGit href={"https://github.com/zerocrazy65"}>
               GitHub
            </ButtonGit>
         </FlexButton>
      </Info>
   );
};

export default InfoContent;
