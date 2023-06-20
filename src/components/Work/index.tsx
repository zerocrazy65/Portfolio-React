import IslandBG from "../../layout/IslandBG";
import {
   ContentLayout,
   IconText,
   InsideIsland,
   IslandContent,
   IslandText,
   IslandTextArea,
   IslandTools,
} from "../../styles/workStyles";
import styled from "styled-components";
import { useState } from "react";
import { projects, project } from "../../data/projectAll";

const ImageSize = styled.div`
   width: clamp(8rem, 10vw, 10rem);
   height: auto;
`;

const IconSize = styled.div`
   width: clamp(3rem, 10vw, 4rem);
   &:hover {
      cursor: pointer;
      transform: scale(1.2);
      margin-top: -1rem;
      transition: 0.4s;
   }
`;

const IconStyle = styled.img`
   width: 90%;
   object-fit: cover;
   border-radius: 1rem;
`;

const MyWork = () => {
   const [storeData, setstoreData] = useState<project[]>([projects[0]]);

   const handleSlideChange = (name: string) => {
      const result = projects.filter((project) => project.stack == name);
      setstoreData(result);
      console.log(storeData);
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
                  {storeData.map((item, index) => (
                     <ContentLayout key={index}>
                        <ImageSize>
                           <IconStyle src={item.image} alt="" />
                        </ImageSize>
                        <IslandTextArea>
                           <IslandText>
                              <span>{item.description}</span>
                           </IslandText>
                        </IslandTextArea>
                     </ContentLayout>
                  ))}
               </div>
            </IslandContent>
            <IslandTools>
               {uniqueStacksArray.map((stack, idx) => (
                  <div
                     className="d-flex flex-column align-items-center w-50"
                     onClick={() => handleSlideChange(stack)}
                     key={idx}
                  >
                     <IconSize>
                        <IconStyle src={uniqueIconStacksArray[0]} alt="img" />
                     </IconSize>
                     <IconText>
                        <span>{stack}</span>
                     </IconText>
                  </div>
               ))}
            </IslandTools>
         </InsideIsland>
      </IslandBG>
   );
};

export default MyWork;
