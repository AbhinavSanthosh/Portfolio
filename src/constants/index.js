import {
  mc,
  webdev,
  javascript,
  java,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  sysadmin,
  pl,
  git,
  php,
  docker,
  accolade,
  bh,
  potato,
  af,
  hp,
  hype,
  asteriax,
  utilitico,
  er,
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
    title: "Minecraft Server Developer",
    icon: mc,
  },
  {
    title: "Minecraft Plugin Developer",
    icon: pl,
  },
  {
    title: "System Administrator",
    icon: sysadmin,
  },
  {
    title: "Web Developer",
    icon: webdev,
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
  {
    title: "Developer",
    company_name: "HeartPvP",
    icon: hp,
    iconBg: "#09647c",
    date: "Jun 2024 - Nov 2024",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhi is an exceptional developer. Highly recommended!",
    name: "Notrix",
    designation: "",
    company: "",
    image: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png",
  }, 
]; 

const projects = [
  {
    name: "Utilitico",
    description:
      "A versatile Discord bot equipped with moderation, chat, information, and various other features to enhance your server's functionality and engagement.\n \n                                                                                     \n‎  ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ",
    tags: [
      {
        name: "discord.js",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: utilitico,
    source_code_link: "https://github.com/",
  },
  {
    name: "Elemental Realms",
    description:
      "An epic elemental bending Minecraft server with unique features like dual currency systems, custom world map, boss arenas, and a reputation system rewarding fair PvP. Forge armor, unlock powerful scrolls, and climb the ranks in an active, dynamic experience.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Custom Plugins",
        color: "green-text-gradient",
      },
    ],
    image: er,
    source_code_link: "https://github.com/",
  },
]; 
export { services, technologies, experiences, testimonials, projects };
