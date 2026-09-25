import { Globe, Server, Database, Cpu, Cloud, TestTube, CreditCard } from "lucide-react";

export const skills = [
  {
    skillId: "frontend",
    name: "Frontend Development",
    level: 95,
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Material UI",
      "Ant Design",
      "Axios",
      "Responsive UI",
      "Figma",
    ],
    icon: <Globe className="w-6 h-6" />,
  },
  {
    skillId: "backend",
    name: "Backend & API Development",
    level: 90,
    skills: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "API Integration",
    ],
    icon: <Server className="w-6 h-6" />,
  },
  {
    skillId: "payments",
    name: "Payments & Billing",
    level: 90,
    skills: [
      "Stripe Integration",
      "Stripe Connect",
      "Checkout Flows",
      "Subscription Billing",
      "Payment Webhooks",
      "Trials & Usage Limits",
      "Secure Payment Handling",
    ],
    icon: <CreditCard className="w-6 h-6" />,
  },
  {
    skillId: "database",
    name: "Database & Data Management",
    level: 85,
    skills: ["MongoDB", "SQL", "NoSQL", "PostgreSQL"],
    icon: <Database className="w-6 h-6" />,
  },
  {
    skillId: "ai",
    name: "AI & AI-Assisted Development",
    level: 88,
    skills: [
      "LLM Integration",
      "AI API Integration",
      "Cursor",
      "Claude",
    ],
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    skillId: "cloud",
    name: "DevOps & Version Control",
    level: 85,
    skills: [
      "Git",
      "GitHub",
      "CI/CD",
      "Deployment Automation",
      "Vercel",
      "AWS",
    ],
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    skillId: "ecommerce",
    name: "State & Testing",
    level: 90,
    skills: ["Redux", "Jest", "Jira", "Postman"],
    icon: <TestTube className="w-6 h-6" />,
  },
];

export const stats2 = [
  { label: "Years Experience", value: "5+" },
  { label: "Selected Projects", value: "10+" },
  { label: "Companies", value: "3" },
  { label: "Focus", value: "MERN + AI" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Ubiquify Digital",
    period: "Oct 2023 – Present",
    bullets: [
      "Build and maintain scalable MERN applications with architecture choices that support growth in users, data, and feature complexity.",
      "Improve application performance through query optimization, efficient API design, caching-minded data flows, and lean frontend rendering.",
      "Strengthen security with authenticated APIs, careful access control, secure data handling, and production-ready best practices.",
      "Partner with cross-functional teams to ship reliable features without sacrificing scalability, speed, or security.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "Techmatetech",
    period: "Oct 2022 – Sep 2023",
    bullets: [
      "Delivered full-stack web apps focused on stable performance under real usage and maintainable, scalable code structure.",
      "Integrated frontend and backend services with attention to secure API contracts, validation, and reliable data exchange.",
      "Improved application responsiveness and backend efficiency while collaborating with teams on quality-driven releases.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "CodeDevza",
    period: "Oct 2021 – Sep 2022",
    bullets: [
      "Implemented pharmacy app authentication and protected frontend flows with a strong focus on secure access and data integrity.",
      "Built responsive UI features and API integrations designed for reliable performance and clear, maintainable application logic.",
    ],
  },
];
