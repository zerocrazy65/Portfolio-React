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
import challenge5 from "../assets/myProjects/challenge5.jpg";
import p5work1 from "../assets/myProjects/p5work1.png";
import p5work2 from "../assets/myProjects/p5work2.png";
import processing from "../assets/myProjects/processing.png";

export type project = {
   title: string;
   stack: string;
   description: string;
   difficulty: string;
   link?: string;
   icon: string;
   image: string;
};

export const projects: project[] = [
   {
      title: "Groword",
      stack: "Vue.js",
      description:
         "Web basic English practice game designed for kids aged 5 to 13. Help children learn spelling and remember vocabulary from various categories.",
      difficulty: "Moderate",
      icon: vueIcon,
      image: growordImg,
   },
   {
      title: "Magcha",
      stack: "React",
      description:
         "E-Commerce web about trading merchandise related to mechanical keyboard",
      difficulty: "Basic",
      icon: reactIcon,
      image: megchaImg,
   },
   {
      title: "Plantplay",
      stack: "Flutter",
      description:
         "E-Commerce application created using Flutter. Which allows trading merchandise related to indoor plants ",
      difficulty: "Moderate",
      icon: flutterIcon,
      image: plantplayImg,
   },
   {
      title: "Shooting Practice Kit IoT",
      stack: "Flutter",
      description:
         "My senior project IoT-based shooting practice kit, show real-time scores to mobile application and analyzed their performance",
      difficulty: "Advanced",
      icon: flutterIcon,
      image: seniorImg,
   },
   {
      title: "OPDC Data Retriever",
      stack: "Flask",
      description:
         "This project is a monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
      icon: flaskIcon,
      image: opdcImg,
   },
   {
      title: "Country Art",
      stack: "P5.js",
      description:
         "Generate art project is the project can generate art by country you selected",
      difficulty: "Moderate",
      link: "https://editor.p5js.org/katapat.43/sketches/ZVHkHw7H4",
      icon: p5Icon,
      image: p5work1,
   },
   {
      title: "Sunflower Clock",
      stack: "P5.js",
      description:
         "A clock that count time using flowers and leaves to count the time",
      difficulty: "Basic",
      link: "https://editor.p5js.org/katapat.43/sketches/t3UPyzS-S",
      icon: p5Icon,
      image: p5work2,
   },
   {
      title: "Music Visualization",
      stack: "P5.js",
      description:
         "Music Visualization by Processing using amplitude of sound buffer to make visualizations",
      difficulty: "Moderate",
      link: "https://www.youtube.com/watch?v=97rOzGpVGLY",
      icon: p5Icon,
      image: processing,
   },
   {
      title: "Frontend Mentor",
      stack: "CloneUI",
      description:
         "This is a challenge to create a web UI design similar to the one provided by Frontend Mentor",
      difficulty: "Basic",
      link: "https://zerocrazy-challenge-1.netlify.app",
      icon: frontendIcon,
      image: challenge1,
   },
   {
      title: "Frontend Mentor",
      stack: "CloneUI",
      description:
         "This is a challenge to create a web UI design similar to the one provided by Frontend Mentor",
      difficulty: "Basic",
      link: "https://zerocrazy-challenge-2.netlify.app",
      icon: frontendIcon,
      image: challenge2,
   },
   {
      title: "Frontend Mentor",
      stack: "CloneUI",
      description:
         "This is a challenge to create a web UI design similar to the one provided by Frontend Mentor",
      difficulty: "Basic",
      link: "https://zerocrazy-challenge-3.netlify.app",
      icon: frontendIcon,
      image: challenge3,
   },
   {
      title: "Frontend Mentor",
      stack: "CloneUI",
      description:
         "This is a challenge to create a web UI design similar to the one provided by Frontend Mentor",
      difficulty: "Basic",
      link: "https://zerocrazy-challenge-4.netlify.app",
      icon: frontendIcon,
      image: challenge4,
   },
   {
      title: "Frontend Mentor",
      stack: "CloneUI",
      description:
         "This is a challenge to create a web UI design similar to the one provided by Frontend Mentor",
      difficulty: "Basic",
      link: "https://zerocrazy-challenge-5.netlify.app",
      icon: frontendIcon,
      image: challenge5,
   },
];
