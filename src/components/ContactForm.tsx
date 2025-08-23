import {
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mohammadmudassar9211@gmail.com",
      href: "mailto:mohammadmudassar9211@gmail.com",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-400 to-cyan-400",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-mudassar-33248119b/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-500 to-blue-600",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View Projects",
      href: "https://github.com/mudassar080",
      color: "from-gray-700 to-gray-800",
      hoverColor: "from-gray-600 to-gray-700",
    },
    {
      icon: (
        <div className="w-6 h-6 flex items-center justify-center font-bold text-white">
          up
        </div>
      ),
      label: "Upwork",
      value: "Hire me on Upwork",
      href: "https://www.upwork.com/freelancers/~01fda2fe9fa2cae798",
      color: "from-green-500 to-green-600",
      hoverColor: "from-green-400 to-green-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Contact Information */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 gradient-text">
              Let's Connect
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 lg:mb-10">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology and development.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 lg:gap-6 p-4 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[var(--card-bg)] to-[#252525] border border-[var(--neon-blue)]/20 hover:border-[var(--neon-blue)]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--neon-blue)]/20 transform-gpu hover:scale-105 hover:-translate-y-1"
                style={{
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  className={`p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-gradient-to-r ${method.color} text-white shadow-xl transform-gpu group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                  style={{
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {method.icon}
                </div>
                <div className="flex-1">
                  <div className="text-xs lg:text-sm text-gray-400 mb-1 lg:mb-2 font-medium">
                    {method.label}
                  </div>
                  <div className="text-white font-semibold text-sm lg:text-lg group-hover:text-[var(--neon-blue)] transition-colors duration-300">
                    {method.value}
                  </div>
                </div>
                <div className="text-[var(--neon-blue)] text-2xl font-bold transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100 opacity-0">
                  →
                </div>
              </a>
            ))}
          </div>

          {/* Availability Status */}
          <div className="p-4 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[var(--neon-blue)]/15 via-[var(--neon-purple)]/10 to-[var(--accent-green)]/15 border border-[var(--neon-blue)]/40 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-4 h-4 bg-[var(--neon-blue)] rounded-full animate-pulse" />
              <span className="text-[var(--neon-blue)] font-bold text-lg">
                Available for opportunities
              </span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Currently accepting new projects and full-time opportunities.
              Let's discuss how we can work together!
            </p>
          </div>

          {/* Upwork Section */}
          <div className="p-4 lg:p-8 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-green-500/15 via-green-600/10 to-green-700/15 border border-green-500/40 backdrop-blur-sm transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-bold text-base lg:text-lg">
                Hire me on Upwork
              </span>
            </div>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
              I'm a verified Upwork freelancer with excellent ratings and
              reviews. Ready to take on your next project!
            </p>
            <a
              href="https://www.upwork.com/freelancers/~01fda2fe9fa2cae798"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg lg:rounded-xl hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 text-sm lg:text-base hover:scale-105 hover:-translate-y-1"
            >
              <div className="w-5 h-5 flex items-center justify-center font-bold text-white">
                up
              </div>
              View Profile
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative">
          <div
            style={{
              boxShadow:
                "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 100px rgba(0, 247, 255, 0.1)",
            }}
            className="p-4 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[var(--card-bg)] via-[#252525] to-[var(--card-bg)] border border-[var(--neon-blue)]/30 shadow-2xl transform-gpu"
          >
            <div className="relative z-10">
              <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 gradient-text">
                  Send a Message
                </h3>
                <p className="text-gray-400 text-base lg:text-lg">
                  Have a project in mind? Let's discuss it!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-4 focus:ring-[var(--neon-blue)]/20 transition-all duration-300 backdrop-blur-sm transform-gpu text-sm lg:text-base"
                      placeholder="Your name"
                      style={{
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-4 focus:ring-[var(--neon-blue)]/20 transition-all duration-300 backdrop-blur-sm transform-gpu text-sm lg:text-base"
                      placeholder="your@email.com"
                      style={{
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-4 focus:ring-[var(--neon-blue)]/20 transition-all duration-300 backdrop-blur-sm transform-gpu text-sm lg:text-base"
                    placeholder="Project discussion"
                    style={{
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 lg:px-6 py-3 lg:py-4 rounded-xl lg:rounded-2xl bg-gray-800/50 border border-gray-600/50 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] focus:ring-4 focus:ring-[var(--neon-blue)]/20 transition-all duration-300 backdrop-blur-sm resize-none transform-gpu text-sm lg:text-base"
                    placeholder="Tell me about your project..."
                    style={{
                      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 lg:py-5 px-6 lg:px-8 rounded-xl lg:rounded-2xl text-white font-bold text-base lg:text-lg transition-all duration-300 flex items-center justify-center gap-3 transform-gpu hover:scale-105 hover:-translate-y-1 ${
                    isSubmitted
                      ? "bg-gradient-to-r from-green-500 to-green-600"
                      : "bg-gradient-to-r from-[var(--neon-blue)] via-[var(--neon-purple)] to-[var(--accent-green)] hover:shadow-2xl"
                  }`}
                  style={{
                    boxShadow: isSubmitted
                      ? "0 15px 35px rgba(34, 197, 94, 0.3)"
                      : "0 15px 35px rgba(0, 247, 255, 0.2)",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-6 h-6" />
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
