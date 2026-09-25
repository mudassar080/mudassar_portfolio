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
import { skills, stats2, experience } from "./utils";
// import aic from "./assets/aic.png";
// import saraPortfolio from "./assets/SaraPortfolio.png";
import chefPost from "./assets/ChefPost.png";
import DryJect from "./assets/DryJect.png";
import Uplfted from "./assets/Uplfted.png";
import TheraFlow from "./assets/TheraFlow.png";

const projects = [
  {
    title: "TheraFlow - AI-Powered Therapy Practice Platform",
    description:
      "AI-powered therapy worksheet platform for clinicians with patient management, worksheet generation, PDF export, freemium-to-paid subscriptions with free trials, usage limits, referrals, and ads conversion tracking.",
    image: TheraFlow,
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    demo: "https://theraflow.ai/",
  },
  {
    title: "Uplfted - Community Giving Platform",
    description:
      "Crowdfunding platform connecting donors with verified recipients via wishlists, Stripe payments, Community Fund subscriptions, and admin order/fulfillment management.",
    image: Uplfted,
    tech: ["React.js", "NestJS", "PostgreSQL", "Stripe"],
    demo: "https://uplfted.com/",
  },
  {
    title: "DryJect - Franchise Operations Platform",
    description:
      "Franchise operations platform for turf and golf-course aeration — franchisee/territory management, job tracking, monthly and yearly financial reporting, multi-currency analytics, and S3 document management.",
    image: DryJect,
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    demo: "https://www.dryject.com/",
  },
  {
    title: "Chefpost - Personalized Chef Services",
    description:
      "A seamless platform connecting users with vetted personal chefs for in-home meal prep, special occasions, and customized dining experiences.",
    image: chefPost,
    tech: ["Next.js", "MongoDB", "AWS"],
    demo: "https://chefpost.com/",
  },
];

const moreProjects = [
  {
    title: "gCASTEL Immobili",
    company: "Ubiquify",
    description:
      "Real estate sales marketplace for property catalogs, priority tickets, and purchase proposals, with Stripe Connect checkout, contract e-sign, and role-based buyer/company/superadmin workflows.",
    tech: ["React.js", "Django REST", "PostgreSQL", "Stripe", "Clerk"],
  },
  {
    title: "Bev360",
    company: "Ubiquify",
    description:
      "B2B beverage sales CMS for order management, inventory control, and customer interactions.",
    tech: ["React.js"],
  },
  {
    title: "Quality Insulation",
    company: "Ubiquify",
    description:
      "Internal ops platform for insulation estimates, expense document OCR, inbound email sync, and QuickBooks Online workflows with role-based access for admins and foremen.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "AWS S3"],
  },
  {
    title: "SEO Agent",
    company: "Ubiquify",
    description:
      "SEO analytics platform using Google Search Console API to visualize keywords, clicks, impressions, and website performance metrics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Guard Metrics",
    company: "Techmatetech",
    description:
      "Security management system for guard data and location tracking; frontend API integration, application logic, and Jest test cases.",
    tech: ["React.js", "Jest"],
  },
  {
    title: "Birth By US",
    company: "Techmatetech",
    description:
      "Healthcare application for pregnancy-related consultations; backend APIs and Angular frontend API integration and page development.",
    tech: ["Angular", "Node.js"],
  },
  {
    title: "5axis Pharmacy",
    company: "CodeDevza",
    description:
      "Pharmacy application involving authentication, API integration, and frontend data tables.",
    tech: ["React.js", "REST APIs"],
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
                "MERN Stack Developer | Software Engineer",
                2000,
                "Building AI-powered web products",
                2000,
                "Full-Stack Developer · Lahore",
                2000,
                "4+ Years Shipping Products",
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

            <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  MERN Stack Developer and Software Engineer with 5 years of
                  professional experience building and maintaining full-stack
                  web applications, with growing hands-on experience integrating
                  AI-powered features and modern AI technologies into web
                  applications.
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Strong expertise in React.js, Next.js, Node.js, Express.js,
                  MongoDB, TypeScript, Redux, SQL/NoSQL databases, REST APIs,
                  and responsive UI development. Comfortable collaborating with
                  cross-functional teams and leveraging modern AI tools to
                  improve workflows and product functionality.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="px-4 py-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 rounded-full text-[var(--neon-blue)] text-sm font-medium">
                    5+ Years Experience
                  </div>
                  <div className="px-4 py-2 bg-[var(--neon-purple)]/10 border border-[var(--neon-purple)]/30 rounded-full text-[var(--neon-purple)] text-sm font-medium">
                    Lahore, Pakistan
                  </div>
                  <div className="px-4 py-2 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 rounded-full text-[var(--neon-blue)] text-sm font-medium">
                    MERN + AI
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {stats2.map((stat: { label: string; value: string }) => (
                    <div
                      key={stat.label}
                      className="p-5 lg:p-6 card-gradient rounded-xl text-center border border-[var(--neon-blue)]/20 transition-all duration-300 hover:scale-105 min-h-[110px] flex flex-col items-center justify-center"
                    >
                      <div className="text-2xl lg:text-3xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 p-5 lg:p-6 card-gradient rounded-xl border border-[var(--neon-blue)]/20">
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--neon-blue)] mb-1">
                      Education
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      MSc Information Technology — University of Education,
                      Lahore (CGPA 3.26)
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--neon-blue)] mb-1">
                      Certifications
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      MERN Stack Developer — Techmatetech LLC · WordPress
                      Developer — Rex Technologies
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--neon-blue)] mb-1">
                      Languages
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      English — Professional Working · Urdu — Native/Bilingual
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[var(--card-bg)] relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-6 gradient-text">
              Experience
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-6">
              Every role has centered on shipping products that scale — with
              performance, security, and reliability treated as first-class
              requirements, not afterthoughts.
            </p>
            <div className="h-1 w-[100px] bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                title: "Scalability",
                text: "Architectures and data flows built to grow with users and features.",
              },
              {
                title: "Performance",
                text: "Faster APIs, leaner UIs, and optimized database operations.",
              },
              {
                title: "Security",
                text: "Auth, access control, and secure handling of sensitive data.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl border border-[var(--neon-blue)]/20 bg-[var(--dark-bg)]/60 text-center"
              >
                <h3 className="text-[var(--neon-blue)] font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="relative space-y-10">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[var(--neon-blue)]/20 hidden sm:block ml-1.5" />
            {experience.map((job) => (
              <article key={`${job.company}-${job.period}`} className="relative sm:pl-10">
                <div className="hidden sm:block absolute left-0 top-2 w-3 h-3 rounded-full bg-[var(--neon-blue)] ml-0" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {job.role}
                    </h3>
                    <p className="text-[var(--neon-blue)] font-medium">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400">{job.period}</p>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-gray-300 text-sm md:text-base leading-relaxed pl-4 border-l border-[var(--neon-blue)]/20"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section - Optimized */}
      <section
        id="skills"
        ref={skillsRef}
        className="py-24 relative z-10"
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

          <div className="max-w-7xl mx-auto mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              More selected work
            </h3>
            <div className="space-y-0 border-t border-[var(--neon-blue)]/20">
              {moreProjects.map((project) => (
                <div
                  key={project.title}
                  className="py-5 border-b border-[var(--neon-blue)]/15 grid md:grid-cols-[minmax(0,1fr)_2fr] gap-3 md:gap-6"
                >
                  <div>
                    <h4 className="font-bold text-white">{project.title}</h4>
                    <p className="text-sm text-[var(--neon-blue)] mt-0.5">
                      {project.company}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs text-gray-400 border border-[var(--neon-blue)]/20 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Optimized */}
      <section id="contact" className="py-24 relative z-10">
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
          © 2026 Muhammad Mudassar. All rights reserved.
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
