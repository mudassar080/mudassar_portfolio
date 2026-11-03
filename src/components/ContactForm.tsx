import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactForm = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "mohammadmudassar9211@gmail.com",
      href: "mailto:mohammadmudassar9211@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "03107427080",
      href: "tel:+923107427080",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Muhammad Mudassar",
      href: "https://www.linkedin.com/in/muhammad-mudassar-33248119b/",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "mudassar080",
      href: "https://github.com/mudassar080",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Lahore, Pakistan",
      href: undefined as string | undefined,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 max-w-2xl">
        <h3 className="mb-3 text-2xl font-semibold text-zinc-100 md:text-3xl">
          Let&apos;s connect
        </h3>
        <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
          Open to discussing new opportunities, interesting projects, or how
          modern web stacks and AI can strengthen your product.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {contactMethods.map((method) => {
          const content = (
            <>
              <div className="mb-4 inline-flex rounded-lg border border-white/[0.08] bg-white/[0.03] p-2.5 text-cyan-400">
                {method.icon}
              </div>
              <div className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {method.label}
              </div>
              <div className="mt-1 break-all text-sm font-medium text-zinc-100 group-hover:text-cyan-400">
                {method.value}
              </div>
              {method.href && (
                <ArrowUpRight className="absolute right-4 top-4 h-4 w-4 text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </>
          );

          const className =
            "group relative rounded-xl border border-white/[0.08] bg-[var(--card-bg)] p-5 transition-colors hover:border-cyan-400/30";

          if (!method.href) {
            return (
              <div key={method.label} className={className}>
                {content}
              </div>
            );
          }

          return (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className={className}
            >
              {content}
            </a>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          <span className="text-sm font-semibold text-cyan-400">
            Available for opportunities
          </span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-400">
          Currently accepting new projects and full-time roles.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
