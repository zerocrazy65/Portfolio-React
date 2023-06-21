import TestImage from "../assets/imgs/mypic1.jpg";
import TestImag2 from "../assets/imgs/mypic2.jpg";

import frontendIcon from "../assets/icons/fontend.png";
import reactIcon from "../assets/icons/react.png";
import vueIcon from "../assets/icons/vue.png";
import flutterIcon from "../assets/icons/flutter.png";
import flaskIcon from "../assets/icons/flask.png";
import p5Icon from "../assets/icons/p5.js.png";

export type project = {
   tag?: string[];
   title: string;
   stack: string;
   description: string;
   difficulty: string;
   icon?: string;
   image?: string;
};

export const projects: project[] = [
   {
      tag: ["Internship Project", "Fullstack"],
      title: "Groword",
      stack: "Vue.js",
      description:
         "This is a web application game created using web development languages. It is a basic English practice game designed for kids aged 5 to 13. This game helps children learn spelling and remember vocabulary from various categories.",
      difficulty: "Moderate",
      icon: vueIcon,
      image: TestImage,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Magcha",
      stack: "React",
      description:
         "This is an E-Commerce web which allows trading merchandise related to mechanical keyboard",
      difficulty: "Basic",
      icon: reactIcon,
      image: TestImage,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Plantplay",
      stack: "Flutter",
      description:
         "This is an E-Commerce application created using Flutter. Which allows trading merchandise related to indoor plants ",
      difficulty: "Moderate",
      icon: flutterIcon,
      image: TestImage,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Plantplay",
      stack: "Flutter",
      description:
         "This is an E-Commerce application created using Flutter. Which allows trading merchandise related to indoor plants ",
      difficulty: "Moderate",
      icon: flutterIcon,
      image: TestImag2,
   },
   {
      tag: ["Senior Project", "Fullstack"],
      title: "Shooting Practice Kit IoT",
      stack: "Flutter",
      description:
         "This project is an IoT-based shooting practice kit that prioritizes safety by using laser bullets instead of real bullets. It integrates with IoT technology to send real-time data to a mobile application, allowing users to view live score and analyze their performance.",
      difficulty: "Advance",
      icon: flutterIcon,
      image: TestImag2,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "Flask",
      description:
         "This project is a website design to handle data, monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: flaskIcon,
      image: TestImage,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "P5.js",
      description:
         "This project is a website design to handle data, monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: p5Icon,
      image: TestImage,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "frontend",
      description:
         "This project is a website design to handle data, monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: frontendIcon,
      image: TestImage,
   },
];
