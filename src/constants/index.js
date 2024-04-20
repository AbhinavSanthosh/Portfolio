import {
  backend,
  web,
  javascript,
  java,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  docker,
  accolade,
  bh,
  potato,
  af,
  hype,
  asteriax,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "System Administrator",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Minecraft Plugin Developer",
    icon: backend,
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "php",
    icon: php,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Owner",
    company_name: "Fried Potato",
    icon: potato,
    iconBg: "#fff6c5",
    date: "March 2019 - December 2019",
    points: [],
  },
  {
    title: "Co-Owner",
    company_name: "HypeMc",
    icon: hype,
    iconBg: "#0e082e",
    date: "Jan 2020 - March 2022",
    points: ["Formerly known as DarkStar Network."],
  },
  {
    title: "Developer",
    company_name: "Alonefield",
    icon: af,
    iconBg: "#deffea",
    date: "June 2022 - December 2022",
    points: ["Later rebranded as Grid."],
  },
  {
    title: "Head Developer",
    company_name: "AccoladeMc",
    icon: accolade,
    iconBg: "#212740",
    date: "Jan 2023 - Feb 2024",
    points: [],
  },
  {
    title: "Developer",
    company_name: "BlazedHeart",
    icon: bh,
    iconBg: "#000c18",
    date: "Feb 2024 - April 2024",
    points: ["Later rebranded as RadiantMc Network."],
  },
  {
    title: "Manager",
    company_name: "AsteriaX Network",
    icon: asteriax,
    iconBg: "#261345",
    date: "Feb 2024 - Present",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhi is an exceptional developer. Their expertise, creativity, and professionalism shine through in every project. Highly recommended!",
    name: "Notrix",
    designation: "Owner",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  }, 
]; 

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
]; 

export { services, technologies, experiences, testimonials, projects };
