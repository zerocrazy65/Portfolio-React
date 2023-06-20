import TestIcon from "../assets/icons/icontest.png";
import TestImage from "../assets/imgs/mypic1.jpg";
import TestImag2 from "../assets/imgs/mypic2.jpg";
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
      icon: TestIcon,
      image: TestImage,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Magcha",
      stack: "React",
      description:
         "This is an E-Commerce web which allows trading merchandise related to mechanical keyboard",
      difficulty: "Basic",
      icon: TestIcon,
      image: TestImage,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Plantplay",
      stack: "Flutter",
      description:
         "This is an E-Commerce application created using Flutter. Which allows trading merchandise related to indoor plants ",
      difficulty: "Moderate",
      icon: TestIcon,
      image: TestImage,
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Plantplay",
      stack: "Flutter",
      description:
         "This is an E-Commerce application created using Flutter. Which allows trading merchandise related to indoor plants ",
      difficulty: "Moderate",
      icon: TestIcon,
      image: TestImag2,
   },
   {
      tag: ["Senior Project", "Fullstack"],
      title: "Shooting Practice Kit IoT",
      stack: "Flutter",
      description:
         "This project is an IoT-based shooting practice kit that prioritizes safety by using laser bullets instead of real bullets. It integrates with IoT technology to send real-time data to a mobile application, allowing users to view live score and analyze their performance.",
      difficulty: "Advance",
      icon: TestIcon,
      image: TestImag2,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "Flask",
      description:
         "This project is a website design to handle data, monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: TestIcon,
      image: TestImage,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "Challenge",
      description:
         "This project is a website design to handle data, monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: TestIcon,
      image: TestImage,
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data retriever",
      stack: "Processing",
      description:
         "This project is a website design to handle data, monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: TestIcon,
      image: TestImage,
   },
];
