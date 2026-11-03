import { useInView } from "react-intersection-observer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import TypeWriter from "./components/TypeWriter";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import SkillsDetail from "./components/SkillsDetail";
import ScrollToTop from "./components/ScrollToTop";
import ContactForm from "./components/ContactForm";
import { skills, stats2, experience } from "./utils";
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

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 md:mb-14">
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-zinc-400 md:text-lg">
          {subtitle}
        </p>
      )}
      <div className="section-rule mt-5 ml-0" />
    </div>
  );
}

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
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--dark-bg)]">
      <Navigation />

      {/* Hero */}
      <header
        id="home"
        ref={heroRef}
        className="relative flex min-h-[100svh] items-center pt-20"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]"
        />

        <div
          className={`section-shell relative z-10 py-16 transition-all duration-500 ${
            heroInView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-cyan-400">
            Lahore · MERN · AI
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl">
            Muhammad Mudassar
          </h1>
          <div className="mt-5 min-h-[2em] text-xl text-zinc-300 md:text-2xl">
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
              className="typing-text text-zinc-300"
            />
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Full-stack engineer focused on scalable apps, strong performance,
            and secure delivery — with growing AI integration experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center rounded-lg bg-zinc-100 px-5 text-sm font-semibold text-zinc-900 transition-opacity hover:opacity-90"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-lg border border-white/15 px-5 text-sm font-semibold text-zinc-200 transition-colors hover:border-cyan-400/40 hover:text-cyan-400"
            >
              Get in touch
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="relative z-10 py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            title="About"
            subtitle="Four years shipping full-stack products with cross-functional teams."
          />

          <div className="grid items-start gap-10 md:grid-cols-2 lg:gap-14">
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                MERN Stack Developer and Software Engineer with 4 years of
                professional experience building and maintaining full-stack web
                applications, with growing hands-on experience integrating
                AI-powered features into products.
              </p>
              <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
                Strong expertise in React.js, Next.js, Node.js, Express.js,
                MongoDB, TypeScript, Redux, SQL/NoSQL databases, REST APIs, and
                responsive UI development.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {["4+ Years", "Lahore, Pakistan", "MERN + AI"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] px-3 py-1.5 text-sm text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {stats2.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex min-h-[100px] flex-col items-start justify-center rounded-xl border border-white/[0.08] bg-[var(--card-bg)] p-5"
                  >
                    <div className="text-2xl font-semibold text-zinc-100 md:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 rounded-xl border border-white/[0.08] bg-[var(--card-bg)] p-5">
                <div>
                  <h3 className="mb-1 text-sm font-medium text-zinc-200">
                    Education
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    MSc Information Technology — University of Education, Lahore
                    (CGPA 3.26)
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-medium text-zinc-200">
                    Certifications
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    MERN Stack Developer — Techmatetech LLC · WordPress
                    Developer — Rex Technologies
                  </p>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-medium text-zinc-200">
                    Languages
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-500">
                    English — Professional Working · Urdu — Native/Bilingual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="relative z-10 bg-[var(--card-bg)] py-20 md:py-28"
      >
        <div className="section-shell">
          <SectionHeading
            title="Experience"
            subtitle="Scalability, performance, and security treated as first-class requirements."
          />

          <div className="mb-12 grid gap-3 sm:grid-cols-3">
            {[
              {
                title: "Scalability",
                text: "Architectures built to grow with users and features.",
              },
              {
                title: "Performance",
                text: "Faster APIs, leaner UIs, optimized data access.",
              },
              {
                title: "Security",
                text: "Auth, access control, and careful data handling.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/[0.08] bg-[var(--dark-bg)] p-4"
              >
                <h3 className="mb-1 font-medium text-zinc-100">{item.title}</h3>
                <p className="text-sm text-zinc-500">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="relative space-y-10">
            <div className="absolute bottom-2 left-0 top-2 ml-1.5 hidden w-px bg-white/[0.08] sm:block" />
            {experience.map((job) => (
              <article
                key={`${job.company}-${job.period}`}
                className="relative sm:pl-10"
              >
                <div className="absolute left-0 top-2 ml-0 hidden h-2.5 w-2.5 rounded-full bg-cyan-400 sm:block" />
                <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {job.role}
                    </h3>
                    <p className="font-medium text-cyan-400">{job.company}</p>
                  </div>
                  <p className="text-sm text-zinc-500">{job.period}</p>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-l border-white/[0.08] pl-4 text-sm leading-relaxed text-zinc-400 md:text-base"
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

      {/* Skills */}
      <section
        id="skills"
        ref={skillsRef}
        className="relative z-10 py-20 md:py-28"
      >
        <div className="section-shell">
          <SectionHeading
            title="Skills"
            subtitle="Frontend, backend, payments, data, AI, and delivery tooling."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill.skillId}
                name={skill.name}
                level={skill.level}
                skills={skill.skills}
                icon={skill.icon}
                isInView={skillsInView}
                skillId={skill.skillId}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 bg-[var(--card-bg)] py-20 md:py-28"
      >
        <div className="section-shell">
          <SectionHeading
            title="Projects"
            subtitle="Featured product work and additional platforms shipped across roles."
          />

          <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2">
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

          <h3 className="mb-4 text-lg font-semibold text-zinc-100">
            More selected work
          </h3>
          <div className="border-t border-white/[0.08]">
            {moreProjects.map((project) => (
              <div
                key={project.title}
                className="grid gap-3 border-b border-white/[0.08] py-5 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-8"
              >
                <div>
                  <h4 className="font-semibold text-zinc-100">{project.title}</h4>
                  <p className="mt-0.5 text-sm text-cyan-400">{project.company}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-white/[0.08] px-2 py-0.5 text-[11px] text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-20 md:py-28">
        <div className="section-shell">
          <SectionHeading
            title="Contact"
            subtitle="Reach out by email, phone, or LinkedIn."
          />
          <ContactForm />
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[0.08] py-10 text-center text-sm text-zinc-500">
        © 2026 Muhammad Mudassar. All rights reserved.
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
