import work1 from "../../assets/work1.jpg";
import work2 from "../../assets/work2.jpg";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";

// src/data/work.js
const workData = [
  {
    id: "card1",
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio website showcasing my work, skills, and contact information. Built using React and CSS.",
    color: "#2D1A66", // Sienna
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://www.example.com/portfolio",
    image: work1,
  },
  {
    id: "card2",
    title: "E-commerce Website",
    description:
      "An e-commerce platform with features like product search, user authentication, and a shopping cart. Developed with MERN stack.",
    color: "#0F1922", // SlateBlue
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://www.example.com/ecommerce",
    image: work2,
  },
  {
    id: "card3",
    title: "Blog Platform",
    description:
      "A fully functional blog platform with user authentication, CRUD operations, and responsive design.",
    color: "#105E2B", // DarkSeaGreen
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    link: "https://www.example.com/blog",
    image: work3,
  },
  {
    id: "card4",
    title: "Weather App",
    description:
      "A weather forecasting app that displays real-time weather data based on user location. Built with OpenWeatherMap API.",
    color: "#7D522C", // GoldenRod
    technologies: ["React", "API Integration", "SASS"],
    link: "https://www.example.com/weatherapp",
    image: work4,
  },
];

export default workData;
