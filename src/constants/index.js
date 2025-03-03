import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
//import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello, I am Aayush Kumar Gupta, a 2024 graduate from NIT Jamshedpur. I'm a passionate Software Engineer with 1+ year of experience in building robust, scalable web applications. My strong problem-solving skills and expertise in data structures and algorithms help me tackle complex challenges and create innovative solutions to drive business growth and enhance user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Engineer with a passion for creating efficient and user-friendly web applications.
  I have a strong foundation in problem-solving, evidenced by my 4-star rating on Codechef and a 1935+ rating on LeetCode, where I have solved over 2000 problems. 
  My technical expertise includes full-stack development using the MERN stack, I have worked with a variety of technologies, including React.js, Node.js, Express.js, MySQL, MongoDB, System Design, REST API's, AWS. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024(december) -  Present ",
    role: "Backend Engineer",
    company: "FandomX",
    description: `Designed and developed microservices and exposed functionalities as RESTful APIs.Worked with front-end web
and mobile engineers to integrate mobile apps with backend APIs.
 Produced quality deliverables and continuously improved backend engineering, architecture, and APIs using
Node.js, Fastify, REST API concepts, MySQL, MongoDB, AWS.`,
    technologies: [
      "Javascript",
      "MySQL",
      "Node.js",
      "mongoDB",
      "Express.js",
      "Git",
      "Fastify",
      "REST API",
      "AWS",
      "System Design",
      "Kafka",
    ],
  },
  {
    year: "2024 (February) - 2024 (September) ",
    role: "Full Stack Developer",
    company: "TechPyro",
    description: `Worked with the website team and collaborated with product managers to ship multiple new features.
    Created a web app tool for legal professionals, enabling them to create custom SQL queries and filter records for
 documents such as trademarks and intellectual properties. The tool served as a super admin application.`,
    technologies: [
      "Javascript",
      "React.js",
      "MySQL",
      "Node.js",
      "mongoDB",
      "Express.js",

      "Git",

      "Typescript",
    ],
  },
  {
    year: "2023 (May) - 2023 (July) ",
    role: " Full Stack Developer",
    company: "TechPyro",
    description: ` Worked with Frontend team to implement user interfaces, ensuring smooth and responsive user experiences using
 JavaScript, and React, Redux.`,
    technologies: [
      "Javascript",
      "React.js",
      "Node.js",
      "mongoDB",
      "Express.js",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://aayush-ecommerce.netlify.app/",
    github: "https://github.com/Aayushgupta24/ecommerce-shop",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Javascript",
      "Express.js",
    ],
  },
  {
    title: "Developers Hub Application",
    link: "https://devhub-dev.netlify.app/login",
    github: "https://github.com/Aayushgupta24/Developers-hub",
    image: project2,
    description:
      "A MERN stack application for developers with features implemented: user authentication, profile viewing, posting and chatting.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Javascript",
      "Express.js",
      "Socket.io",
    ],
  },
  {
    title: "Portfolio Website",
    //link: "https://devhub-dev.netlify.app/login",
    github: "https://github.com/Aayushgupta24/react-portfolio-Aayush",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Framer-Motion", "Javscript"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
