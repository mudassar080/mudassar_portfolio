import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  demo,
}: ProjectCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[var(--card-bg)] transition-colors hover:border-white/[0.14]">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] via-transparent to-transparent opacity-70" />
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-semibold leading-snug text-zinc-100 md:text-xl">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((techItem) => (
            <span
              key={techItem}
              className="rounded-md border border-white/[0.08] px-2.5 py-1 text-xs text-zinc-400"
            >
              {techItem}
            </span>
          ))}
        </div>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300"
          >
            Live demo
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
