import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
  Cloud,
  Sparkles,
} from "lucide-react";
import profile from "./assets/Profile.jpeg";
import aic from "./assets/aic.png";
import saraPortfolio from "./assets/SaraPortfolio.png";
import chefPost from "./assets/ChefPost.png";
import DryJect from "./assets/DryJect.png";

// Import new components
import Navigation from "./components/Navigation";
import ParticleBackground from "./components/ParticleBackground";
import TypeWriter from "./components/TypeWriter";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import SkillsDetail from "./components/SkillsDetail";
import ScrollToTop from "./components/ScrollToTop";
import { Github, Linkedin, Mail } from "lucide-react";

function HomePage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
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

  const projects = [
    {
      title: "Real-Time Aircraft Market Insights & Price Comparison Platform",
      description:
        "AIC Lynx is a data-driven platform for aircraft purchasing, offering real-time sales data, price comparisons, and market insights.",
      image: aic,
      tech: ["React", "Python", "PostgreSQL"],
      demo: "https://aiclynx.com/",
      github: "https://github.com",
    },
    {
      title: "Sara Galadari - Author Website",
      description:
        "A modern and elegant website showcasing the works of Emirati best-selling author Sara Galadari. The site features her books, author biography, and a platform for readers to connect.",
      image: saraPortfolio,
      tech: ["React", "CSS", "Animate CSS"],
      demo: "https://www.saragaladari.com/",
      github: "https://github.com",
    },
    {
      title: "Chefpost - Personalized Chef Services",
      description:
        "A seamless platform connecting users with vetted personal chefs for in-home meal prep, special occasions, and customized dining experiences.",
      image: chefPost,
      tech: ["Next.js", "MongoDB", "AWS"],
      demo: "https://chefpost.com/",
      github: "https://github.com",
    },
    {
      title: "DryJect – Turf Aeration and Amendment System",
      description:
        "DryJect utilizes a high-speed, water-based injection system to simultaneously aerate and amend fine turf, enhancing soil structure and playability. ",
      image: DryJect,
      tech: ["Next.js", "Nest.js", "MongoDB"],
      demo: "https://www.dryject.com/",
      github: "https://github.com",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] relative overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <motion.header
        id="home"
        ref={heroRef}
        style={{ y }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--neon-blue)]/10 to-[var(--neon-purple)]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[var(--neon-purple)]/10 to-[var(--neon-blue)]/10 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="container mx-auto text-center relative z-10 max-w-4xl"
        >
          {/* Profile Image with Enhanced Animation */}
          <div className="relative mb-8 md:mb-12">
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <motion.img
                src={profile}
                alt="Profile"
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-[var(--neon-blue)] floating relative z-10"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] blur-xl opacity-30 animate-pulse" />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 text-[var(--neon-blue)]"
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <motion.div
              animate={{
                y: [10, -10, 10],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-4 text-[var(--neon-purple)]"
            >
              <Code2 className="w-6 h-6" />
            </motion.div>
          </div>
          
          {/* Name with Enhanced Typography */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 gradient-text leading-tight hero-title relative"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Muhammad Mudassar
            <motion.div
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--neon-blue)] bg-[length:200%_100%] opacity-20 blur-sm"
            />
          </motion.h1>
          
          {/* Enhanced TypeWriter Section */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 text-gray-300 px-4 hero-subtitle relative"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeWriter
              sequences={[
                "Building Digital Solutions That Matter",
                2000,
                "Full-Stack Developer",
                2000,
                "MERN Stack Expert",
                2000,
                "Problem Solver",
                2000,
              ]}
              className="gradient-text typing-text"
            />
          </motion.div>
          


          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[var(--neon-blue)]"
          >
          </motion.div>
        </motion.div>
      </motion.header>

      {/* About Section with Enhanced Design */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-5xl font-bold mb-6 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with 5+ years of experience
                  in building scalable web applications. My expertise spans across
                  modern web technologies, cloud architecture, and DevOps practices.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I love turning complex problems into simple, beautiful, and
                  intuitive solutions that make a real impact on users' lives.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 rounded-full text-[var(--neon-blue)] text-sm font-medium"
                  >
                    5+ Years Experience
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[var(--neon-purple)]/10 border border-[var(--neon-purple)]/30 rounded-full text-[var(--neon-purple)] text-sm font-medium"
                  >
                    MERN Stack Expert
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 rounded-full text-[var(--neon-blue)] text-sm font-medium"
                  >
                    Problem Solver
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Projects Completed", value: "50+" },
                    { label: "Years Experience", value: "5+" },
                    { label: "Technologies", value: "20+" },
                    { label: "Happy Clients", value: "30+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="p-6 card-gradient rounded-xl text-center border border-[var(--neon-blue)]/20"
                    >
                      <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with Enhanced Layout */}
      <section id="skills" ref={skillsRef} className="py-24 bg-[var(--card-bg)] relative z-10">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Technical Skills
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                level={skill.level}
                skills={skill.skills}
                icon={skill.icon}
                index={index}
                isInView={skillsInView}
                skillId={skill.skillId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Enhanced Grid */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full"
            />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                demo={project.demo}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Social Links Only */}
      <section id="contact" className="py-24 bg-[var(--card-bg)] relative z-10">
        <div className="container mx-auto px-6">
          <motion.div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full"
            />
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/mudassar080"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, color: "var(--neon-blue)" }}
              className="text-white transition-all duration-300 p-4 rounded-full hover:bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/20"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-mudassar-33248119b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, color: "var(--neon-blue)" }}
              className="text-white transition-all duration-300 p-4 rounded-full hover:bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/20"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:nawabishok310@gmail.com"
              whileHover={{ scale: 1.2, y: -5, color: "var(--neon-blue)" }}
              className="text-white transition-all duration-300 p-4 rounded-full hover:bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/20"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://www.upwork.com/freelancers/~01fda2fe9fa2cae798"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5, color: "var(--neon-blue)" }}
              className="text-white transition-all duration-300 p-4 rounded-full hover:bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/20"
            >
              <span className="text-2xl font-bold">up</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400 relative z-10 border-t border-[var(--neon-blue)]/20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg"
        >
          © 2025 Mudassar Developer. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills/:skillId" element={<SkillsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
