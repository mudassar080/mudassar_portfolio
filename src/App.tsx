import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Mail,
  // Download,
  Code2,
  Database,
  Globe,
  Server,
  Cpu,
  Cloud,
} from "lucide-react";
import profile from "./assets/Profile.jpeg";
import aic from "./assets/aic.png";
import saraPortfolio from "./assets/SaraPortfolio.png";
import chefPost from "./assets/ChefPost.png";
import DryJect from "./assets/DryJect.png";

function App() {
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
      name: "Frontend Development",
      level: 90,
      skils: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind",
        "MUI",
        "SCSS",
      ],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      name: "Backend Development",
      level: 85,
      skils: ["Node.js", "Express", "Django", "Nest"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      name: "Database Design",
      level: 80,
      skils: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      name: "System Architecture",
      level: 85,
      skils: ["Microservices", "Monolithic", "Serverless"],
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      name: "Cloud Services",
      level: 85,
      skils: ["AWS", "Azure", "Google Cloud"],
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      name: "API Development",
      level: 90,
      skils: ["REST", "GraphQL", "gRPC"],
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
    <div className="min-h-screen bg-[var(--dark-bg)]">
      {/* Hero Section */}
      <motion.header
        ref={heroRef}
        style={{ y }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 text-center"
        >
          <div className="relative mb-8">
            <img
              src={profile}
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto object-cover border-4 border-[var(--neon-blue)] floating"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Muhammad Mudassar
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Building Digital Solutions That Matter
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full neon-border text-white font-semibold"
            >
              Get in Touch
            </motion.a>
            {/* <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white text-[var(--dark-bg)] font-semibold flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a> */}
          </div>
        </motion.div>
      </motion.header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 gradient-text">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience
              in building scalable web applications. My expertise spans across
              modern web technologies, cloud architecture, and DevOps practices.
              I love turning complex problems into simple, beautiful, and
              intuitive solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-[var(--card-bg)]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={skillsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-gradient p-6 rounded-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={skillsInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="skill-bar h-full rounded-full"
                  />
                </div>
                <div className="mt-5 text-sm text-gray-400">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill?.skils?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 skill-bar text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="project-card"
              >
                <div className="project-card-inner relative md:h-[400px] h-[450px]">
                  <div className="project-card-front absolute w-full h-full">
                    <div className="card-gradient h-full rounded-xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 truncate">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm bg-[var(--dark-bg)] text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="project-card-back absolute w-full h-full">
                    <div className="card-gradient h-full rounded-xl p-6 flex flex-col justify-center items-center">
                      <div className="space-y-6 text-center">
                        <h3 className="text-2xl font-bold gradient-text">
                          {project.title}
                        </h3>
                        <div className="flex justify-center gap-4">
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2 rounded-full neon-border text-white"
                            >
                              Live Demo
                            </a>
                          )}
                          {/* <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 rounded-full bg-white text-[var(--dark-bg)]"
                          >
                            Source Code
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[var(--card-bg)]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            {/* <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg input-gradient bg-transparent text-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg input-gradient bg-transparent text-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 rounded-lg input-gradient bg-transparent text-white resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 rounded-lg neon-border text-white font-semibold"
              >
                Send Message
              </motion.button>
            </motion.form> */}

            <div className="mt-16 flex justify-center gap-8">
              <motion.a
                href="https://github.com/mudassar080"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "var(--neon-blue)" }}
                className="text-white transition-colors"
              >
                <Github className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-mudassar-33248119b/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "var(--neon-blue)" }}
                className="text-white transition-colors"
              >
                <Linkedin className="w-8 h-8" />
              </motion.a>
              <motion.a
                href="mailto:mohammadmudassar9211@gmail.com"
                whileHover={{ scale: 1.2, color: "var(--neon-blue)" }}
                className="text-white transition-colors"
              >
                <Mail className="w-8 h-8" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2025 Mudassar Developer. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
