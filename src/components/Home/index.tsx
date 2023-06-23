import { useState } from "react";
import { projects, project } from "../../data/project";
import IslandBG from "../../layout/IslandBG";
import {
   Header,
   LayoutBlueContent,
   LayoutContent,
   ProjectDescription,
   ProjectTag,
   ProjectTitle,
   ProjectTools,
   SubBody,
} from "../../styles/homeStyles";
import GalleryHover from "./GalleryHover";
import InfoContent from "./InfoContent";
import ProjectSlider from "./ProjectSlider";
import { HorizonReveal, VerticalReveal } from "../ScrollReveal";
const imgBoxes = document.querySelectorAll(".img-box");

imgBoxes.forEach((box) => {
   box.addEventListener("mouseover", () => {
      imgBoxes.forEach((otherBox) => {
         otherBox.classList.remove("hovered");
      });
      box.classList.add("hovered");
   });
});

const HomePage = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const handleSlideChange = (index) => {
      setCurrentIndex(index);
   };
   const currentProject: project = projects[currentIndex];

   return (
      <IslandBG>
         <div className="container-fluid">
            <LayoutContent>
               <InfoContent />
               <GalleryHover />
            </LayoutContent>
            <LayoutContent>
               <VerticalReveal transition={25}>
                  <Header>Work</Header>
               </VerticalReveal>
            </LayoutContent>
            <LayoutBlueContent>
               <div className="d-flex flex-column  justify-content-center ">
                  <VerticalReveal transition={25}>
                     <div className="d-flex flex-row gap-1">
                        {currentProject.tag?.map((tag) => (
                           <ProjectTag
                              className={tag.toLowerCase().replace(/\s+/g, "-")}
                              key={tag}
                           >
                              {tag}
                           </ProjectTag>
                        ))}
                     </div>
                  </VerticalReveal>
                  <HorizonReveal transition={30}>
                     <ProjectTitle>{currentProject.title}</ProjectTitle>
                  </HorizonReveal>
                  <HorizonReveal transition={40}>
                     <ProjectTools className="d-flex flex-row align-items-center">
                        <strong>Stack :</strong>&nbsp;
                        {currentProject.tools.join(", ")}
                     </ProjectTools>
                  </HorizonReveal>
                  <HorizonReveal transition={50}>
                     <ProjectDescription>
                        {currentProject.description}
                     </ProjectDescription>
                  </HorizonReveal>
                  <VerticalReveal transition={60}>
                     <SubBody className="difficulty mt-2">
                        <strong>Difficulty : </strong>&nbsp;
                        {currentProject.difficulty}
                     </SubBody>
                  </VerticalReveal>
               </div>
               <br />
               <ProjectSlider onSlideChange={handleSlideChange} />
            </LayoutBlueContent>
         </div>
      </IslandBG>
   );
};

export default HomePage;
