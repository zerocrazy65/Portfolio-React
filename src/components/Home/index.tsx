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
               <Header>Work</Header>
            </LayoutContent>
            <LayoutBlueContent>
               <div className="d-flex flex-column  justify-content-center ">
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
                  <ProjectTitle>{currentProject.title}</ProjectTitle>
                  <ProjectTools className="d-flex flex-row align-items-center">
                     <strong>Stack</strong>&nbsp;
                     {currentProject.tools.join(", ")}
                  </ProjectTools>
                  <ProjectDescription>
                     {currentProject.description}
                  </ProjectDescription>
                  <SubBody className="difficulty">
                     <strong>Difficulty : </strong>&nbsp;
                     {currentProject.difficulty}
                  </SubBody>
               </div>
               <br />
               <ProjectSlider
                  currentIndex={currentIndex}
                  onSlideChange={handleSlideChange}
               />
            </LayoutBlueContent>
         </div>
      </IslandBG>
   );
};

export default HomePage;
