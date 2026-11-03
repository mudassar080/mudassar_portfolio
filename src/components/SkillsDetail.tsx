import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Server,
  Database,
  Cpu,
  Cloud,
  Code2,
  CreditCard,
  CheckCircle,
} from "lucide-react";

interface SkillDetail {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  services: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  }[];
  technologies: string[];
  level: number;
}

const skillsData: SkillDetail[] = [
  {
    id: "frontend",
    name: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with React, Next.js, TypeScript, and modern UI systems.",
    icon: <Globe className="h-7 w-7" />,
    level: 95,
    technologies: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Material UI",
      "Ant Design",
      "Axios",
      "Figma",
    ],
    services: [
      {
        title: "Modern web applications",
        description:
          "SPA and SSR apps with React and Next.js focused on performance and clean architecture.",
        features: [
          "Responsive design",
          "TypeScript-first UI",
          "Design system integration",
          "API-driven interfaces",
        ],
        benefits: [
          "Faster delivery",
          "Better UX",
          "Maintainable code",
          "Mobile-ready",
        ],
      },
      {
        title: "UI systems & tooling",
        description:
          "Interfaces built with Material UI, Ant Design, Bootstrap, and Figma-aligned workflows.",
        features: [
          "Component libraries",
          "Design handoff",
          "Accessible patterns",
          "Cross-browser polish",
        ],
        benefits: [
          "Consistent UI",
          "Faster iteration",
          "Lower design debt",
          "Clear handoff",
        ],
      },
    ],
  },
  {
    id: "backend",
    name: "Backend & API Development",
    description:
      "APIs and services with Node.js, Nest.js, and Express.js for scalable products.",
    icon: <Server className="h-7 w-7" />,
    level: 90,
    technologies: [
      "Node.js",
      "Nest.js",
      "Express.js",
      "REST APIs",
      "Microservices",
      "API Integration",
    ],
    services: [
      {
        title: "API development",
        description:
          "Design and implement REST APIs with authentication, validation, and clear contracts.",
        features: [
          "REST architecture",
          "Auth & permissions",
          "Third-party integrations",
          "Documented endpoints",
        ],
        benefits: [
          "Secure data flow",
          "Clear contracts",
          "Easier frontend work",
          "Scalable services",
        ],
      },
      {
        title: "Scalable services",
        description:
          "Structure backends for maintainability with modular services and reliable data flows.",
        features: [
          "Nest.js modules",
          "Express services",
          "Microservice patterns",
          "Performance-minded queries",
        ],
        benefits: [
          "Independent deploy",
          "Better reliability",
          "Easier growth",
          "Cleaner ownership",
        ],
      },
    ],
  },
  {
    id: "payments",
    name: "Payments & Billing",
    description:
      "End-to-end payment flows with Stripe — checkout, subscriptions, Connect, and webhooks.",
    icon: <CreditCard className="h-7 w-7" />,
    level: 90,
    technologies: [
      "Stripe Integration",
      "Stripe Connect",
      "Checkout Flows",
      "Subscription Billing",
      "Payment Webhooks",
      "Trials & Usage Limits",
    ],
    services: [
      {
        title: "Stripe checkout & subscriptions",
        description:
          "One-time payments, recurring plans, free trials, and usage-based billing limits.",
        features: [
          "Checkout sessions",
          "Subscription plans",
          "Trial periods",
          "Usage metering",
        ],
        benefits: [
          "Faster monetization",
          "Reliable billing",
          "Fewer payment bugs",
          "Clear upgrades",
        ],
      },
      {
        title: "Connect & marketplace payouts",
        description:
          "Marketplace-style flows with Stripe Connect, webhooks, and secure payment handling.",
        features: [
          "Stripe Connect",
          "Webhook handling",
          "Payout workflows",
          "PCI-aware design",
        ],
        benefits: [
          "Trusted checkout",
          "Automated reconciliation",
          "Secure money movement",
          "Scalable commerce",
        ],
      },
    ],
  },
  {
    id: "database",
    name: "Database & Data Management",
    description:
      "SQL and NoSQL modeling with MongoDB and relational databases for reliable storage.",
    icon: <Database className="h-7 w-7" />,
    level: 85,
    technologies: ["MongoDB", "SQL", "NoSQL", "PostgreSQL"],
    services: [
      {
        title: "Data modeling",
        description:
          "Schemas designed around product workflows, integrity, and query patterns.",
        features: [
          "MongoDB schemas",
          "SQL design",
          "Indexing strategies",
          "Migration support",
        ],
        benefits: [
          "Faster queries",
          "Data integrity",
          "Lower cost",
          "Clear structure",
        ],
      },
      {
        title: "Query & performance",
        description:
          "Optimize reads and writes so listings and transactional flows stay fast.",
        features: [
          "Query tuning",
          "Aggregation pipelines",
          "Relational joins",
          "Caching-friendly design",
        ],
        benefits: [
          "Snappier apps",
          "Stable under load",
          "Better UX",
          "Fewer bottlenecks",
        ],
      },
    ],
  },
  {
    id: "ai",
    name: "AI & AI-Assisted Development",
    description:
      "Integrating LLMs and AI APIs into products, using tools like Cursor and Claude.",
    icon: <Cpu className="h-7 w-7" />,
    level: 88,
    technologies: [
      "LLM Integration",
      "AI API Integration",
      "Cursor",
      "Claude",
    ],
    services: [
      {
        title: "Product AI features",
        description:
          "Wire AI capabilities into real workflows — generation, assistance, and API-backed features.",
        features: [
          "LLM API integration",
          "Prompted product flows",
          "Usage-aware features",
          "Safe failure handling",
        ],
        benefits: [
          "Smarter products",
          "Faster workflows",
          "Better UX",
          "Competitive edge",
        ],
      },
      {
        title: "AI-assisted engineering",
        description:
          "Use modern AI tooling to improve development speed and iteration quality.",
        features: [
          "Cursor workflows",
          "Claude-assisted reviews",
          "Faster prototyping",
          "Clearer implementation paths",
        ],
        benefits: [
          "Faster delivery",
          "Higher quality",
          "Less toil",
          "Better focus",
        ],
      },
    ],
  },
  {
    id: "cloud",
    name: "DevOps & Version Control",
    description:
      "Shipping with Git/GitHub, CI/CD, and cloud deployments on Vercel and AWS.",
    icon: <Cloud className="h-7 w-7" />,
    level: 85,
    technologies: [
      "Git",
      "GitHub",
      "CI/CD",
      "Deployment Automation",
      "Vercel",
      "AWS",
    ],
    services: [
      {
        title: "Deployment pipelines",
        description:
          "Automate builds and releases so features move from branch to production smoothly.",
        features: [
          "CI/CD setup",
          "Vercel deployments",
          "AWS services",
          "Environment management",
        ],
        benefits: [
          "Faster releases",
          "Fewer deploy errors",
          "Repeatable process",
          "Safer rollbacks",
        ],
      },
      {
        title: "Collaboration hygiene",
        description:
          "Branching, reviews, and release practices that keep teams aligned.",
        features: [
          "GitHub workflows",
          "PR-based delivery",
          "Release automation",
          "Rollback-friendly deploys",
        ],
        benefits: [
          "Clear ownership",
          "Better reviews",
          "Stable history",
          "Team velocity",
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    name: "State & Testing",
    description:
      "Client state with Redux, API checks with Postman, unit tests with Jest, tracking in Jira.",
    icon: <Code2 className="h-7 w-7" />,
    level: 90,
    technologies: ["Redux", "Jest", "Jira", "Postman"],
    services: [
      {
        title: "State management",
        description:
          "Predictable client state for complex React apps using maintainable Redux patterns.",
        features: [
          "Redux stores",
          "Async data flows",
          "Shared app state",
          "Debuggable actions",
        ],
        benefits: [
          "Predictable UI",
          "Easier debugging",
          "Scalable client logic",
          "Team consistency",
        ],
      },
      {
        title: "Quality & delivery",
        description:
          "Jest for critical logic, Postman for APIs, and Jira for sprint visibility.",
        features: [
          "Jest test cases",
          "API verification",
          "Regression checks",
          "Sprint tracking",
        ],
        benefits: [
          "Fewer regressions",
          "Faster QA",
          "Clear delivery status",
          "Reliable releases",
        ],
      },
    ],
  },
];

const SkillsDetail = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  const skill = skillsData.find((s) => s.id === skillId);

  if (!skill) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--dark-bg)] px-6">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-semibold text-zinc-100">
            Skill not found
          </h1>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-900"
          >
            Back home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--dark-bg)]">
      <div className="fixed left-6 top-6 z-50">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[var(--card-bg)] px-4 py-2 text-sm text-zinc-200 hover:border-cyan-400/40 hover:text-cyan-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </button>
      </div>

      <section className="relative z-10 pb-16 pt-28">
        <div className="section-shell max-w-3xl text-center">
          <div className="mb-6 inline-flex rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-cyan-400">
            {skill.icon}
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-zinc-100 md:text-5xl">
            {skill.name}
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400">
            {skill.description}
          </p>
          <p className="mt-4 text-sm text-zinc-500">{skill.level}% proficiency</p>
        </div>
      </section>

      <section className="relative z-10 pb-16">
        <div className="section-shell">
          <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-100">
            What I deliver
          </h2>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {skill.services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-white/[0.08] bg-[var(--card-bg)] p-6"
              >
                <h3 className="mb-2 text-xl font-semibold text-zinc-100">
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-zinc-400">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-400"
                    >
                      <CheckCircle className="h-4 w-4 shrink-0 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[var(--card-bg)] py-16">
        <div className="section-shell max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-100">
            Technologies & tools
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skill.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/[0.08] bg-[var(--dark-bg)] px-3 py-2 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16">
        <div className="section-shell max-w-xl text-center">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100">
            Ready to build?
          </h2>
          <p className="mb-6 text-zinc-400">
            Let&apos;s talk about how this skill set fits your next project.
          </p>
          <button
            type="button"
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="rounded-lg bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 hover:opacity-90"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default SkillsDetail;
