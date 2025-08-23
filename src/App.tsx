import { useInView } from "react-intersection-observer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Code2, Sparkles } from "lucide-react";
import profile from "./assets/Profile.jpeg";
// Import new components
import Navigation from "./components/Navigation";
import TypeWriter from "./components/TypeWriter";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import SkillsDetail from "./components/SkillsDetail";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";
import { skills, stats2 } from "./utils";
import aic from "./assets/aic.png";
import saraPortfolio from "./assets/saraPortfolio.png";
import chefPost from "./assets/chefPost.png";
import DryJect from "./assets/DryJect.png";

const projects = [
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

function HomePage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [skillsRef, skillsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] relative overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Optimized */}
      <header
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4"
      >
        {/* Simplified Background Elements - Reduced blur and size */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[var(--neon-blue)]/3 to-[var(--neon-purple)]/3 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-gradient-to-l from-[var(--neon-purple)]/3 to-[var(--neon-blue)]/3 rounded-full blur-xl" />
        </div>

        <div
          className={`container mx-auto text-center relative z-10 max-w-4xl transition-all duration-400 ${
            heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Profile Image - Simplified */}
          <div className="relative mb-8 md:mb-12">
            <div className="relative">
              <img
                src={profile}
                alt="Profile"
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-[var(--neon-blue)] relative z-10 transition-all duration-150 hover:scale-105"
              />
              {/* Simple Glow Effect - Reduced opacity */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] blur-md opacity-15" />
            </div>

            {/* Static Floating Elements - No animations */}
            <div className="absolute -top-4 -right-4 text-[var(--neon-blue)]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 text-[var(--neon-purple)]">
              <Code2 className="w-6 h-6" />
            </div>
          </div>

          {/* Name - Simplified */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 gradient-text leading-tight hero-title relative transition-all duration-400 ${
              heroInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            Muhammad Mudassar
          </h1>

          {/* TypeWriter Section - Simplified */}
          <div
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 text-gray-300 px-4 hero-subtitle relative transition-all duration-400 ${
              heroInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
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
          </div>
        </div>
      </header>

      {/* About Section - Optimized */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 gradient-text">
                About Me
              </h2>
              <div
                className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full transition-all duration-400"
                style={{ width: heroInView ? "100px" : "0px" }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with 5+ years of
                  experience in building scalable web applications. My expertise
                  spans across modern web technologies, cloud architecture, and
                  DevOps practices.
                </p>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I love turning complex problems into simple, beautiful, and
                  intuitive solutions that make a real impact on users' lives.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="px-4 py-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 rounded-full text-[var(--neon-blue)] text-sm font-medium">
                    5+ Years Experience
                  </div>
                  <div className="px-4 py-2 bg-[var(--neon-purple)]/10 border border-[var(--neon-purple)]/30 rounded-full text-[var(--neon-purple)] text-sm font-medium">
                    MERN Stack Expert
                  </div>
                  <div className="px-4 py-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 rounded-full text-[var(--neon-blue)] text-sm font-medium">
                    Problem Solver
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {stats2.map((stat: { label: string; value: string }) => (
                    <div
                      key={stat.label}
                      className="p-4 lg:p-6 card-gradient rounded-xl text-center border border-[var(--neon-blue)]/20 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Optimized */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-24 bg-[var(--card-bg)] relative z-10"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 gradient-text">
              Technical Skills
            </h2>
            <div
              className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full transition-all duration-400"
              style={{ width: skillsInView ? "100px" : "0px" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <div key={skill.name} className="h-full">
                <SkillCard
                  name={skill.name}
                  level={skill.level}
                  skills={skill.skills}
                  icon={skill.icon}
                  isInView={skillsInView}
                  skillId={skill.skillId}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Optimized */}
      <section id="projects" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <div
              className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full transition-all duration-400"
              style={{ width: skillsInView ? "100px" : "0px" }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Optimized */}
      <section id="contact" className="py-24 bg-[var(--card-bg)] relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 gradient-text">
              Get in Touch
            </h2>
            <div
              className="h-1 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full transition-all duration-400"
              style={{ width: skillsInView ? "100px" : "0px" }}
            />
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="py-12 text-center text-gray-400 relative z-10 border-t border-[var(--neon-blue)]/20">
        <p className="text-lg">
          © 2025 Mudassar Developer. All rights reserved.
        </p>
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
