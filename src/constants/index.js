import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  php,
  git,
  figma,
  docker,
  meta,
  react,

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "PHP developer",
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
    name:"php",
    icon:php,
  },
  
  {
    name: "React JS",
    icon: reactjs,
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
    title: "React.js Developer",
    
    icon: react,
    iconBg: "#383E56",
  
    points: [
      "Passionate React developer crafting seamless, modern web experiences. Expert in component-based architecture and state management. Committed to innovation, I transform ideas into engaging interfaces. Let's collaborate to elevate your digital presence with the power of React."
      
    ]
  },
  {
    title: "PHP Developer",
    
    icon: meta,
    iconBg: "#E6DEDD",
    
    points: [
      " Passionate about web development and armed with a love for PHP, I am a dedicated enthusiast committed to crafting seamless, dynamic, and innovative digital experiences. With a keen eye for detail and a drive for excellence, I bring a wealth of expertise in PHP to the world of web development's collaborate to bring your digital vision to life – where innovation meets PHP expertise."
      ],
  },
  
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  
]

const projects = [

];

export { services, technologies, experiences, testimonials, projects };
