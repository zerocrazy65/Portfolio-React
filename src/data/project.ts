export type project = {
   tag?: string[];
   title: string;
   tools: string[];
   description: string;
   difficulty: string;
};

export const projects: project[] = [
   {
      tag: ["Internship Project", "Fullstack"],
      title: "Groword",
      tools: ["Vue.js", " Firebase", "Scss", "Bootstrap"],
      description:
         "This is a web application game created using web development languages. It is a basic English practice game designed for kids aged 5 to 13. This game helps children learn spelling and remember vocabulary from various categories.",
      difficulty: "Moderate",
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Plantplay",
      tools: ["Flutter", "MySQL"],
      description:
         "This is an E-Commerce application created using Flutter. Which allows trading merchandise related to indoor plants ",
      difficulty: "Moderate",
   },
   {
      tag: ["Government Project", "Fullstack"],
      title: "OPDC Data Retriever",
      tools: ["jQuery", "Flask", "PostgreSQL"],
      description:
         "(Inside content not allowed to be published) This project is a website design to handle data, monitoring information and generate download links for data files stored in the database.  ",
      difficulty: "Moderate",
   },
   {
      tag: ["Internship Project", "Fullstack"],
      title: "Groword Mini Game",
      tools: ["Vue.js", " Firebase", "Scss", "Bootstrap"],
      description:
         "This is a web application game created using web development languages. It is a basic English practice game designed for kids aged 5 to 13. This game helps children learn spelling and remember vocabulary from various categories.",
      difficulty: "Basic",
   },
   {
      tag: ["Study Project", "Fullstack"],
      title: "Magcha",
      tools: ["React", "MySQL", "Bootstrap", "Flask"],
      description:
         "This is an E-Commerce web which allows trading merchandise related to mechanical keyboard",
      difficulty: "Basic",
   },
   {
      tag: ["Senior Project", "Fullstack"],
      title: "Shooting Practice Kit IoT",
      tools: ["Flutter", "Firebase", "Arduino", "Node.js"],
      description:
         "This project is an IoT-based shooting practice kit that prioritizes safety by using laser bullets instead of real bullets. It integrates with IoT technology to send real-time data to a mobile application, allowing users to view live score and analyze their performance.",
      difficulty: "Advanced",
   },
];
