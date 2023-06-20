import styled, { css } from "styled-components";
import IslandBG from "../../layout/IslandBG";

import { Location } from "@styled-icons/fluentui-system-regular/Location";
import { Email } from "@styled-icons/evaicons-solid/Email";
import { Call } from "@styled-icons/fluentui-system-regular/Call";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { COLORS, FONTS, FONT_SIZE } from "../../styles/themes";

const ThemeIcon = css`
   color: ${COLORS.WHITE};
   width: clamp(2rem, 10vw, 2vw);
`;

const IconCircle = styled.div`
   background-color: ${COLORS.SECONDARY};
   border-radius: 50%;
   align-items: center;
   display: flex;
   justify-content: center;
   width: clamp(2rem, 10vw, 3rem);
   height: clamp(2rem, 10vw, 3rem);
`;

const ContactLayout = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   margin-top: 10rem;
   height: 60vh;
   @media (max-width: 620px) {
      padding: 2rem;
   }
`;

const InsideContact = styled.div`
   display: flex;
   flex-direction: row;
   gap: 3vw;
   @media (max-width: 1200px) {
      flex-direction: column;
      gap: 3rem;
   }
`;

const LinkTo = styled.a`
   color: ${COLORS.BLACK};
   &:hover {
      color: ${COLORS.PRIMARY};
   }
`;

const ContactFont = styled.span`
   display: flex;
   flex: wrap;
   ${FONTS.SECONDARY};
   color: ${COLORS.BLACK};
   font-size: ${FONT_SIZE.XS};
`;

const LocationIcon = styled(Location)`
   ${ThemeIcon};
`;
const EmailIcon = styled(Email)`
   ${ThemeIcon};
`;
const CallIcon = styled(Call)`
   ${ThemeIcon};
`;
const FacebookCircleIcon = styled(FacebookCircle)`
   ${ThemeIcon};
`;
const GithubIcon = styled(Github)`
   ${ThemeIcon};
`;

const Contact = () => {
   return (
      <IslandBG>
         <ContactLayout>
            <InsideContact>
               <div className="d-flex flex-column gap-5">
                  <div className="d-flex flex-row align-items-center gap-3">
                     <IconCircle>
                        <FacebookCircleIcon />
                     </IconCircle>
                     <ContactFont>
                        <LinkTo href="https://www.facebook.com/katapat.supamatheekulawat">
                           Katapat Supamatheekulawat
                        </LinkTo>
                     </ContactFont>
                  </div>
                  <div className="d-flex flex-row align-items-center gap-3">
                     <IconCircle>
                        <CallIcon />
                     </IconCircle>
                     <ContactFont>090-914-7644</ContactFont>
                  </div>
                  <div className="d-flex flex-row align-items-center gap-3">
                     <IconCircle>
                        <GithubIcon />
                     </IconCircle>
                     <ContactFont>
                        <LinkTo href="https://github.com/zerocrazy65">
                           Zerocrazy65
                        </LinkTo>
                     </ContactFont>
                  </div>
               </div>
               <div className="d-flex flex-column gap-5">
                  <div className="d-flex flex-row align-items-center gap-3">
                     <IconCircle>
                        <EmailIcon />
                     </IconCircle>
                     <ContactFont>
                        <LinkTo href="mailto:katapat@gmail.com">
                           katapat43@gmail.com
                        </LinkTo>
                     </ContactFont>
                  </div>
                  <div className="d-flex flex-row align-items-center gap-3">
                     <IconCircle>
                        <LocationIcon />
                     </IconCircle>
                     <ContactFont>
                        Bangkadi Samae Dam, Bang Khun Thian, Bangkok
                     </ContactFont>
                  </div>
               </div>
            </InsideContact>
         </ContactLayout>
      </IslandBG>
   );
};

export default Contact;
