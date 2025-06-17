import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
//import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Hello, I am Banti Kumar Das, a 2024 graduate from NIT Jamshedpur. I'm a passionate Software Engineer with 1+ year of experience in building robust, scalable web applications. My strong problem-solving skills and expertise in data structures and algorithms help me tackle complex challenges and create innovative solutions to drive business growth and enhance user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Software Engineer with a passion for creating efficient and user-friendly web applications.
  I have a strong foundation in problem-solving, evidenced by my 3-star rating on Codechef and a 1762+ rating on LeetCode, where I have solved over 1200+ problems. 
  My technical expertise includes full-stack development, I have worked with a variety of technologies, including React.js,Springboot, Redis, Node.js, Express.js, MySQL, MongoDB, System Design, REST API's, AWS. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
export const EXPERIENCES = [
  {
    year: "2024 (September) – Present",
    role: "Software Engineer",
    company: "Zycus",
    description: `Developed and maintained CI/CD pipelines, transforming a monolithic architecture to microservices for improved scalability.
  Optimized Jenkins pipelines for seamless microservices activation and enhanced deployment efficiency.
  Developed an AI-powered co-pilot for a payroll application using OpenAI’s LLM, enhancing UX/UI through intelligent assistance.
  Designed and developed microservices and exposed functionalities as RESTful APIs. Collaborated with front-end web and mobile engineers for API integration.
  Produced quality backend deliverables using Node.js, Express.js, MongoDB, REST APIs, and AWS.`,
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "Spring boot",
      "SQL",
      "AWS",
      "CI/CD",
      "Jenkins",
      "OpenAI API",
      "System Design",
    ],
  },
  {
    year: "2023 (May) – 2023 (July)",
    role: "Software Engineer Intern",
    company: "TechPyro",
    description: `Collaborated with the Frontend team to build responsive user interfaces using JavaScript, React, and Redux.
  Engineered solutions for fetching prescriptions and triggering redirection modals while managing high request volumes efficiently.`,
    technologies: ["Java", "JavaScript", "TypeScript", "React.js", "Redux"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://ecommerce-swtv.onrender.com/login",
    github: "https://github.com/bantikumardas/Ecommerce-backend",
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
    title: "ShareDocs Web App",
    link: "https://bantikumardas.github.io/shareDocs/",
    github: "https://github.com/bantikumardas/fileShare",
    image: project2,
    description:
      " Implemented a secure file-sharing feature that generates time-limited links.Each link remains active for 24 hours, ensuring data privacy and controlled access. Enabled recipients to easily download shared files within the specified timeframe",
    technologies: [
      "HTML",
      "CSS",
      "Node.js",
      "MongoDB",
      "Javascript",
      "Express.js",
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
