import frontendIcon from "../assets/icons/fontend.png";
import reactIcon from "../assets/icons/react.png";
import vueIcon from "../assets/icons/vue.png";
import flutterIcon from "../assets/icons/flutter.png";
import flaskIcon from "../assets/icons/flask.png";
import p5Icon from "../assets/icons/p5.js.png";

import plantplayImg from "../assets/myProjects/plantplay.png";
import growordImg from "../assets/myProjects/groword.png";
import megchaImg from "../assets/myProjects/megcha.png";
import seniorImg from "../assets/myProjects/senior-work.png";
import opdcImg from "../assets/myProjects/opdc-work.png";
import challenge1 from "../assets/myProjects/challenge1.jpg";
import challenge2 from "../assets/myProjects/challenge2.jpg";
import challenge3 from "../assets/myProjects/challenge3.jpg";
import challenge4 from "../assets/myProjects/challenge4.jpg";

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
         "This is a web applidevelopment languages. It is a basic English practice game designed for kids aged 5 to 13. This game helps children learn spelling and remember vocabulary from various categories.",
      difficulty: "Moderate",
      icon: vueIcon,
      image: growordImg,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Magcha",
      stack: "React",
      description:
         "This is an E-Commerce web whirelated to mechanical keyboard",
      difficulty: "Basic",
      icon: reactIcon,
      image: megchaImg,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Plantplay",
      stack: "Flutter",
      description:
         "This is an E-Commerce applicatallows trading merchandise related to indoor plants ",
      difficulty: "Moderate",
      icon: flutterIcon,
      image: plantplayImg,
   },
   {
      tag: ["Senior Project", "Fullstack"],
      title: "Shooting Practice Kit IoT",
      stack: "Flutter",
      description:
         "This project is an IoT-based sritizes safety by using laser bullets instead of real bullets. It integrates with IoT technology to send real-time data to a mobile application, allowing users to view live score and analyze their performance.",
      difficulty: "Advance",
      icon: flutterIcon,
      image: seniorImg,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "Flask",
      description:
         "This project is a monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: flaskIcon,
      image: opdcImg,
   },
   //
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "P5.js",
      description:
         "This project is a webring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: p5Icon,
      image: plantplayImg,
   },
   //
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "frontend",
      description:
         "This project is a website design to handle data, monition and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: frontendIcon,
      image: challenge1,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "frontend",
      description:
         "This project is a website design to handle data, monition and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: frontendIcon,
      image: challenge2,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "frontend",
      description:
         "This project is a website design to handle data, monition and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: frontendIcon,
      image: challenge3,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "frontend",
      description:
         "This project is a website design to handle data, monition and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: frontendIcon,
      image: challenge4,
   },
];
