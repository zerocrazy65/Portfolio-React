import IslandBG from "../../layout/IslandBG";
import {
   ContentLayout,
   InsideIsland,
   IslandContent,
   IslandText,
   IslandTextArea,
   IslandTools,
} from "../../styles/workStyles";
import styled from "styled-components";
import { useState } from "react";
import { projects, project } from "../../data/projectAll";
import { COLORS, FONTS } from "../../styles/themes";
import { VerticalReveal, HorizonReveal } from "../ScrollReveal";

const ImageSize = styled.div`
   width: clamp(8rem, 10vw, 10rem);
   height: auto;
`;

const IconSize = styled.div`
   width: 4rem;
`;

const IconStyle = styled.img`
   width: 100%;
   border-radius: 0.5rem;
`;

const IconButton = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   flex-direction: column;
   align-items: center;
   &:hover {
      cursor: pointer;
   }
`;

export const IconText = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   span {
      display: absolute;

      ${FONTS.SECONDARY};
      color: ${COLORS.BLACK};
   }

   ${IconButton}:hover & {
      span {
         color: ${COLORS.PRIMARY};
      }
   }
`;

const MyWork = () => {
   const [storeData, setstoreData] = useState<project[]>([projects[0]]);

   const handleSlideChange = (name: string) => {
      const result = projects.filter((project) => project.stack == name);
      setstoreData(result);
   };

   const uniqueStacks = new Set<string>();
   const uniqueIconStacks = new Set<string>();

   projects.forEach((project) => {
      uniqueStacks.add(project.stack);
      if (project.icon) {
         uniqueIconStacks.add(project.icon);
      }
   });

   const uniqueStacksArray = Array.from(uniqueStacks);
   const uniqueIconStacksArray = Array.from(uniqueIconStacks);

   return (
      <IslandBG>
         <InsideIsland>
            <IslandContent>
               <div className="d-flex flex-column align-items-start">
                  {storeData.map((item, idx) => (
                     <VerticalReveal transition={30 * idx} key={idx}>
                        <ContentLayout>
                           <ImageSize>
                              <IconStyle src={item.image} alt="" />
                           </ImageSize>

                           <IslandTextArea>
                              <IslandText>
                                 <span>{item.description}</span>
                              </IslandText>
                           </IslandTextArea>
                        </ContentLayout>
                     </VerticalReveal>
                  ))}
               </div>
            </IslandContent>
            <IslandTools>
               {uniqueStacksArray.map((stack, idx) => (
                  <HorizonReveal transition={10 * idx} key={idx}>
                     <IconButton onClick={() => handleSlideChange(stack)}>
                        <IconSize>
                           <IconStyle
                              src={uniqueIconStacksArray[idx]}
                              alt="img"
                           />
                        </IconSize>
                        <IconText>
                           <span>{stack}</span>
                        </IconText>
                     </IconButton>
                  </HorizonReveal>
               ))}
            </IslandTools>
         </InsideIsland>
      </IslandBG>
   );
};

export default MyWork;
