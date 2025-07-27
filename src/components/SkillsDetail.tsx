import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Globe, Server, Database, Cpu, Cloud, Code2, CheckCircle, Star, Zap } from "lucide-react";

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
    description: "Creating stunning, responsive, and user-friendly web interfaces that engage users and drive conversions.",
    icon: <Globe className="w-8 h-8" />,
    level: 95,
    technologies: ["React & Next.js", "TypeScript", "Tailwind CSS", "Webflow", "WordPress", "Plasmic", "Framer Motion", "Material-UI", "Firebase Auth"],
    services: [
      {
        title: "Modern Web Applications",
        description: "Build cutting-edge web applications with React, Next.js, and TypeScript for optimal performance and user experience.",
        features: ["Responsive Design", "Progressive Web Apps", "SEO Optimization", "Performance Optimization"],
        benefits: ["Faster Loading Times", "Better User Engagement", "Higher Conversion Rates", "Mobile-First Approach"]
      },
      {
        title: "No-Code/Low-Code Solutions",
        description: "Create professional websites using Webflow, WordPress, and Plasmic for clients who want easy content management.",
        features: ["Drag & Drop Builders", "Custom Templates", "Content Management", "E-commerce Integration"],
        benefits: ["Quick Deployment", "Easy Maintenance", "Cost-Effective", "Client-Friendly"]
      }
    ]
  },
  {
    id: "backend",
    name: "Backend & API Development",
    description: "Building robust, scalable backend systems and APIs that power modern web applications and mobile apps.",
    icon: <Server className="w-8 h-8" />,
    level: 90,
    technologies: ["Node.js & Express", "Python & Django", "RESTful APIs", "GraphQL", "JWT Authentication", "API Integration", "Microservices"],
    services: [
      {
        title: "Custom API Development",
        description: "Design and develop RESTful APIs and GraphQL endpoints for seamless data exchange between frontend and backend.",
        features: ["RESTful APIs", "GraphQL", "JWT Authentication", "Rate Limiting", "API Documentation"],
        benefits: ["Scalable Architecture", "Secure Data Transfer", "Easy Integration", "Comprehensive Documentation"]
      },
      {
        title: "Microservices Architecture",
        description: "Build modular, scalable applications using microservices for better maintainability and deployment flexibility.",
        features: ["Service Decomposition", "Load Balancing", "Service Discovery", "Fault Tolerance"],
        benefits: ["Independent Deployment", "Technology Flexibility", "Better Scalability", "Easier Maintenance"]
      }
    ]
  },
  {
    id: "database",
    name: "Database & Data Management",
    description: "Designing efficient database solutions and managing data to ensure optimal performance and reliability.",
    icon: <Database className="w-8 h-8" />,
    level: 85,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Firestore", "Redis", "Data Modeling", "Database Optimization", "Data Migration"],
    services: [
      {
        title: "Database Design & Optimization",
        description: "Create efficient database schemas and optimize queries for better performance and data integrity.",
        features: ["Schema Design", "Query Optimization", "Indexing Strategies", "Data Normalization"],
        benefits: ["Faster Queries", "Reduced Costs", "Better Performance", "Data Integrity"]
      },
      {
        title: "Data Migration & Integration",
        description: "Seamlessly migrate data between systems and integrate multiple data sources for unified access.",
        features: ["Data Migration", "ETL Processes", "Data Validation", "Backup Strategies"],
        benefits: ["Zero Downtime", "Data Consistency", "Risk Mitigation", "Smooth Transitions"]
      }
    ]
  },
  {
    id: "ai",
    name: "AI & Automation Services",
    description: "Integrating cutting-edge AI technologies to automate processes and create intelligent applications.",
    icon: <Cpu className="w-8 h-8" />,
    level: 88,
    technologies: ["OpenAI Integration", "ChatGPT APIs", "AI-Powered Features", "Automation Scripts", "Machine Learning", "Data Analysis", "Smart Chatbots"],
    services: [
      {
        title: "AI-Powered Applications",
        description: "Integrate OpenAI and ChatGPT APIs to create intelligent features that enhance user experience and automate tasks.",
        features: ["ChatGPT Integration", "Natural Language Processing", "Content Generation", "Smart Recommendations"],
        benefits: ["Enhanced User Experience", "Automated Customer Support", "Content Creation", "Personalized Services"]
      },
      {
        title: "Process Automation",
        description: "Automate repetitive tasks and workflows to increase efficiency and reduce operational costs.",
        features: ["Workflow Automation", "Data Processing", "Report Generation", "Task Scheduling"],
        benefits: ["Increased Efficiency", "Cost Reduction", "Error Reduction", "Time Savings"]
      }
    ]
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    description: "Deploying and managing applications in the cloud with modern DevOps practices for scalability and reliability.",
    icon: <Cloud className="w-8 h-8" />,
    level: 85,
    technologies: ["AWS Services", "Firebase", "Google Cloud", "Docker & Kubernetes", "CI/CD Pipelines", "Serverless Architecture", "Cloud Deployment", "Performance Optimization", "Security Best Practices"],
    services: [
      {
        title: "Cloud Infrastructure",
        description: "Design and deploy scalable cloud infrastructure using AWS, Google Cloud, and Firebase for optimal performance.",
        features: ["Cloud Architecture", "Auto Scaling", "Load Balancing", "CDN Integration"],
        benefits: ["High Availability", "Global Performance", "Cost Optimization", "Automatic Scaling"]
      },
      {
        title: "DevOps & CI/CD",
        description: "Implement continuous integration and deployment pipelines for faster, more reliable software delivery.",
        features: ["CI/CD Pipelines", "Docker Containers", "Kubernetes Orchestration", "Monitoring & Logging"],
        benefits: ["Faster Deployment", "Reduced Errors", "Better Collaboration", "Automated Testing"]
      }
    ]
  },
  {
    id: "ecommerce",
    name: "E-commerce & CMS",
    description: "Building complete e-commerce solutions and content management systems for online businesses.",
    icon: <Code2 className="w-8 h-8" />,
    level: 90,
    technologies: ["Shopify Development", "WooCommerce", "Custom CMS", "Payment Integration", "Inventory Management", "Multi-vendor Platforms", "Analytics & Reporting"],
    services: [
      {
        title: "E-commerce Platforms",
        description: "Create custom e-commerce solutions using Shopify, WooCommerce, or custom platforms for online businesses.",
        features: ["Product Management", "Payment Processing", "Inventory Tracking", "Order Management"],
        benefits: ["Increased Sales", "Better Customer Experience", "Streamlined Operations", "Analytics Insights"]
      },
      {
        title: "Content Management Systems",
        description: "Build custom CMS solutions that allow clients to easily manage and update their website content.",
        features: ["Content Editor", "Media Management", "User Roles", "SEO Tools"],
        benefits: ["Easy Content Updates", "Reduced Maintenance Costs", "Better SEO", "User-Friendly Interface"]
      }
    ]
  }
];

const SkillsDetail = () => {
  const { skillId } = useParams<{ skillId: string }>();
  const navigate = useNavigate();
  
  const skill = skillsData.find(s => s.id === skillId);

  if (!skill) {
    return (
      <div className="min-h-screen bg-[var(--dark-bg)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text mb-4">Skill Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full text-white font-semibold"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--dark-bg)] relative overflow-x-hidden">
      {/* Animated Background */}
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

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--card-bg)]/80 backdrop-blur-md rounded-full text-white border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </motion.button>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Skill Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-2xl mb-8"
            >
              {skill.icon}
            </motion.div>

            {/* Skill Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold gradient-text mb-6"
            >
              {skill.name}
            </motion.h1>

            {/* Skill Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              {skill.description}
            </motion.p>

            {/* Skill Level */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--neon-blue)]/10 border border-[var(--neon-blue)]/30 rounded-full"
            >
              <Star className="w-5 h-5 text-[var(--neon-blue)]" />
              <span className="text-[var(--neon-blue)] font-semibold">{skill.level}% Expertise</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center gradient-text mb-16"
          >
            Services I Offer
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skill.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-gradient p-8 rounded-2xl border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/40 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--neon-blue)] mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-[var(--neon-blue)] flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--neon-purple)] mb-4">Client Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <Star className="w-4 h-4 text-[var(--neon-purple)] flex-shrink-0" />
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-[var(--card-bg)] relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center gradient-text mb-16"
          >
            Technologies & Tools
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skill.technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-[var(--dark-bg)] rounded-xl border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/40 transition-all duration-300 text-center"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how I can help you implement these solutions for your project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/#contact')}
              className="px-8 py-4 bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full text-white font-semibold hover:shadow-lg hover:shadow-[var(--neon-blue)]/25 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SkillsDetail; 