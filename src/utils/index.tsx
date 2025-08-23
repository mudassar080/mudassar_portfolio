import { Globe, Server, Database, Cpu, Cloud, Code2 } from "lucide-react";
import aic from "../assets/aic.png";
import saraPortfolio from "../assets/saraPortfolio.png";
import chefPost from "../assets/chefPost.png";
import DryJect from "../assets/DryJect.png";

export const skills = [
  {
    skillId: "frontend",
    name: "Frontend Development",
    level: 95,
    skills: [
      "React & Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Webflow",
      "WordPress",
      "Plasmic",
      "Framer Motion",
      "Material-UI",
      "Responsive Design",
      "Firebase Auth",
    ],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    skillId: "backend",
    name: "Backend & API Development",
    level: 90,
    skills: [
      "Node.js & Express",
      "Python & Django",
      "RESTful APIs",
      "GraphQL",
      "JWT Authentication",
      "API Integration",
      "Microservices",
    ],
    icon: <Server className="w-6 h-6" />,
  },
  {
    skillId: "database",
    name: "Database & Data Management",
    level: 85,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase",
      "Firestore",
      "Redis",
      "Data Modeling",
      "Database Optimization",
      "Data Migration",
    ],
    icon: <Database className="w-6 h-6" />,
  },
  {
    skillId: "ai",
    name: "AI & Automation Services",
    level: 88,
    skills: [
      "OpenAI Integration",
      "ChatGPT APIs",
      "AI-Powered Features",
      "Automation Scripts",
      "Machine Learning",
      "Data Analysis",
      "Smart Chatbots",
    ],
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    skillId: "cloud",
    name: "Cloud & DevOps",
    level: 85,
    skills: [
      "AWS Services",
      "Firebase",
      "Google Cloud",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Serverless Architecture",
      "Cloud Deployment",
      "Performance Optimization",
      "Security Best Practices",
    ],
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    skillId: "ecommerce",
    name: "E-commerce & CMS",
    level: 90,
    skills: [
      "Shopify Development",
      "WooCommerce",
      "Custom CMS",
      "Payment Integration",
      "Inventory Management",
      "Multi-vendor Platforms",
      "Analytics & Reporting",
    ],
    icon: <Code2 className="w-6 h-6" />,
  },
];

export const projects = [
  {
    title: "Real-Time Aircraft Market Insights & Price Comparison Platform",
    description:
      "AIC Lynx is a data-driven platform for aircraft purchasing, offering real-time sales data, price comparisons, and market insights.",
    image: aic,
    tech: ["React", "Python", "PostgreSQL"],
    demo: "https://aiclynx.com/",
    github: "https://github.com/mudassar080/aic-lynx",
  },
  {
    title: "Sara Galadari - Author Website",
    description:
      "A modern and elegant website showcasing the works of Emirati best-selling author Sara Galadari. The site features her books, author biography, and a platform for readers to connect.",
    image: saraPortfolio,
    tech: ["React", "CSS", "Animate CSS"],
    demo: "https://www.saragaladari.com/",
    github: "https://github.com/mudassar080/sara-galadari-website",
  },
  {
    title: "Chefpost - Personalized Chef Services",
    description:
      "A seamless platform connecting users with vetted personal chefs for in-home meal prep, special occasions, and customized dining experiences.",
    image: chefPost,
    tech: ["Next.js", "MongoDB", "AWS"],
    demo: "https://chefpost.com/",
    github: "https://github.com/mudassar080/chefpost-platform",
  },
  {
    title: "DryJect - Turf Aeration and Amendment System",
    description:
      "DryJect utilizes a high-speed, water-based injection system to simultaneously aerate and amend fine turf, enhancing soil structure and playability. ",
    image: DryJect,
    tech: ["Next.js", "Nest.js", "MongoDB"],
    demo: "https://www.dryject.com/",
    github: "https://github.com/mudassar080/dryject-system",
  },
];

export const stats = [
  { label: "Projects Completed", value: "50+" },
  { label: "Years Experience", value: "5+" },
  { label: "Technologies", value: "20+" },
  { label: "Happy Clients", value: "30+" },
];

export const stats2 = [
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
  { label: "Years Experience", value: "5+" },
  { label: "Technologies", value: "20+" },
];
