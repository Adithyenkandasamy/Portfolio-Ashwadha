import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  calculator,
  connectfour,
  todolist,
  ecommerce,
  internpe,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Programming Intern",
    company_name: "InternPe",
    icon: internpe,
    iconBg: "#383E56",
    date: "June 2025 - July 2025",
    points: [
      "Developed Python-based applications.",
      "Solved real-world programming tasks to strengthen problem-solving and logical thinking skills.",
    ],
    certificate: "https://via.placeholder.com/800x600?text=Please+save+InternPe+Certificate+in+src/assets", // Replace with your actual certificate image import
  },
  {
    title: "PowerBI Intern",
    company_name: "MindfulAI",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "December 2025",
    points: [
      "Designed interactive dashboards and reports using Power BI.",
      "Developed insightful reports to support data-driven decision-making.",
    ],
    certificate: "https://via.placeholder.com/800x600?text=Please+save+MindfulAI+Certificate+in+src/assets", // Replace with your actual certificate image import
  },
  {
    title: "Web Development Intern",
    company_name: "InterPe",
    icon: internpe,
    iconBg: "#383E56",
    date: "June 2026",
    points: [
      "Developed responsive and user-friendly web applications using modern web technologies.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Calculator",
    description:
      "A sleek, modern web-based calculator application featuring a clean interface and intuitive design for quick everyday calculations.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://github.com/ashwadhac/Calculator.git",
  },
  {
    name: "Connect Four",
    description:
      "An interactive digital version of the classic Connect Four game. Play against a friend and enjoy a futuristic neon-themed board layout.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "logic",
        color: "green-text-gradient",
      },
      {
        name: "ui",
        color: "pink-text-gradient",
      },
    ],
    image: connectfour,
    source_code_link: "https://github.com/ashwadhac/connect-four-game.git",
  },
  {
    name: "To-do List",
    description:
      "A clean, minimalistic To-Do list web application designed to boost productivity by helping you organize daily tasks efficiently.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/ashwadhac/To-do-list.git",
  },
  {
    name: "E-commerce",
    description:
      "A professional, full-featured e-commerce homepage showcasing modern web design principles with a large hero section and product catalog.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/ashwadhac/E-commerce.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
