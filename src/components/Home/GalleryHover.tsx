import { useState } from "react";
import {
   GalleryContainer,
   ImageBox,
   ImageCaption,
} from "../../styles/homeStyles";
import myPic1Path from "../../assets/imgs/mypic1.jpg";
import myPic2Path from "../../assets/imgs/mypic2.jpg";
import myPic3Path from "../../assets/imgs/my-pic3.png";
const GalleryHover = () => {
   const [hoveredIndex, setHoveredIndex] = useState(0);

   const handleImageHover = (index: number) => {
      setHoveredIndex(index);
   };
   return (
      <GalleryContainer>
         <ImageBox
            onMouseEnter={() => handleImageHover(0)}
            className={hoveredIndex === 0 ? "hovered" : ""}
            style={{ backgroundImage: `url(${myPic1Path})` }}
         >
            <ImageCaption>Katapat</ImageCaption>
         </ImageBox>
         <ImageBox
            onMouseEnter={() => handleImageHover(1)}
            className={hoveredIndex === 1 ? "hovered" : ""}
            style={{ backgroundImage: `url(${myPic2Path})` }}
         >
            <ImageCaption>Me</ImageCaption>
         </ImageBox>
         <ImageBox
            onMouseEnter={() => handleImageHover(2)}
            className={hoveredIndex === 2 ? "hovered" : ""}
            style={{ backgroundImage: `url(${myPic3Path})` }}
         >
            <ImageCaption>Me again</ImageCaption>
         </ImageBox>
      </GalleryContainer>
   );
};

export default GalleryHover;
