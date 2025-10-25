// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
// import angularLogo from "./assets/tech_logo/angular.png";
// import nextjsLogo from "./assets/tech_logo/nextjs.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
// import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
// import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
// import pythonLogo from "./assets/tech_logo/python.png";
// import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
// import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import canavasLogo from "./assets/tech_logo/canava.png";

// Project Section Logo's

import gymLogo from "./assets/work_logo/gym.png";
import travelLogo from "./assets/work_logo/travel.png";
import lotteryLogo from "./assets/work_logo/lottery.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "canvas", logo: canavasLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    // img: webverseLogo,
    role: "WEB DEVELOPMENT",
    company: "Elewayte",
    date: "Role - Intern",
    desc: "I learned the fundamentals of web development by exploring HTML, CSS, and JavaScript, and applied them to create a responsive travel website. The project focused on designing an engaging interface and smooth functionality, allowing users to book trip plans easily while showcasing my ability to build user-friendly, interactive web applications.",

    skills: ["HTML", "CSS", "JavaScript", "MySql"],
    certificate:
      "https://drive.google.com/file/d/1pnpZVzogvlR7BWAD4v27CQ3Rmhb2xCOg/view?usp=drivesdk",
  },
  {
    id: 1,
    // img: agcLogo,
    role: "MERN FullStack Development",
    company: "Edunet",
    date: "Role - Intern",
    desc: "I gained practical experience in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js) by building dynamic, responsive web applications. One such project was a gym management system that allowed users to explore workout plans, manage memberships, and track progress, showcasing my ability to create secure, user-friendly solutions.”.",
    skills: ["ReactJS", "Express", "JavaScript", "HTML", "CSS"],
    certificate:
      "https://drive.google.com/file/d/14ENjHR5508ap4YTAAeC-XNBVmbnsW3eV/view?usp=sharing",
  },
  {
    id: 2,
    role: "Oracle-Certificate",
    desc: "I am proud to have achieved the Oracle AI Vector Search Certified Professional certification. This accomplishment enhances my knowledge in Artificial Intelligence and Database Systems, adding strong value to my academic and professional journey as a CSE student. It reflects my dedication to building advanced technical skills and staying aligned with industry trends, while also preparing me for future opportunities in AI-driven applications and intelligent database management.",
    certificate:
      "https://drive.google.com/file/d/1jB5YhWoLaPoEeia33BkCS0qNboHAB64-/view?usp=sharing",
  },
  {
    id: 3,
    role: "ISC2-Certificate",
    desc: "Achieved the ISC2 Certified in Cybersecurity (CC) certification, demonstrating proficiency in fundamental cybersecurity concepts including security principles, network security, access controls, incident response, and governance. This certification from (ISC)², the world’s leading cybersecurity professional body, highlights my readiness to pursue advanced roles in cybersecurity.",
    certificate:
      "https://drive.google.com/file/d/187N420na78-9PuRsUa3blnCoQxFhnfym/view?usp=drivesdk",
  },
  {
    id: 3,
    role: "MongoDB-Certificate",
    desc: "Successfully completed the MongoDB Basics for Students course and earned certification from MongoDB University. This course provided hands-on experience with key MongoDB concepts, including CRUD operations, data modeling, and aggregation. It strengthened my practical understanding of NoSQL databases and enhanced my ability to design and manage data efficiently. I look forward to applying these skills in real-world projects, contributing to scalable and modern database-driven applications.",
    certificate:
      "https://drive.google.com/file/d/1Df14VFvtGG98HVAFTwPfd7MOD6AG6iFw/view?usp=drivesdk",
  },
];

export const education = [
  {
    id: 1,
    school: "Teegala Krishna Reddy Engineering College, Hyderabad",
    date: "Nov 2022 - may 2026",
    grade: "8.5%",
    desc: "Pursuing a degree in Computer Science and Engineering, where I am building a strong foundation in programming, algorithms, and software development. My academic journey has enhanced my problem-solving abilities, logical thinking, and adaptability, while providing opportunities to apply theoretical knowledge through practical projects, teamwork, and continuous learning.",
    degree: "Bachelor of Technology- B.Tech (Computer Science)",
  },
  {
    id: 2,
    school: "Sri Gurukula Vidyalayam Junior College For Science, Srikakulam",
    date: "Jan 2020 - April 2022",
    grade: "86.4%",
    desc: "Completed Intermediate education in the Science stream with a strong focus on Mathematics, Physics, and Computer fundamentals. This phase helped me build analytical thinking, logical reasoning, and problem-solving abilities, laying a solid foundation for my journey in Computer Science and Engineering.",
    degree: "Board of Intermediate Education(XII) - MPC",
  },
  {
    id: 3,
    school: "Government of High School Palasa, Srikakulam",
    date: "Jun 2015 - May 2020",
    grade: "97%",
    desc: "Successfully completed 10th Class (SSC), building a strong foundation in academics and essential skills. This stage enhanced my discipline, curiosity, and determination, while preparing me for future challenges in higher education and shaping my interest in technology and problem-solving.",
    degree: "Secondary School Certificate,(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Gym Portal",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: gymLogo,
    tags: ["HTML", "CSS", "JavaScript", "MySql"],
    github: "https://github.com/Dokkari-Dileep/GYM-minor",
    webapp: "https://dpnvkrs-gym-portal.netlify.app/",
  },
  {
    id: 1,
    title: "Travel-explore",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: travelLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dokkari-Dileep/TRAVEL-webpage",
    webapp: "https://exploren-to-travel.netlify.app/",
  },
  {
    id: 2,
    title: "Lottery-hub game",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: lotteryLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://jockpot-hub.netlify.app/",
  },
];
