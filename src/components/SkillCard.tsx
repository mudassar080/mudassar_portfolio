import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface SkillCardProps {
  name: string;
  level: number;
  skills: string[];
  icon: ReactNode;
  isInView: boolean;
  skillId: string;
}

const SkillCard = ({
  name,
  level,
  skills,
  icon,
  isInView,
  skillId,
}: SkillCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate(`/skills/${skillId}`)}
      className="group flex h-full w-full flex-col rounded-2xl border border-white/[0.08] bg-[var(--card-bg)] p-5 text-left transition-colors hover:border-white/[0.14] md:p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5 text-cyan-400">
            {icon}
          </div>
          <h3 className="text-base font-semibold text-zinc-100 md:text-lg">
            {name}
          </h3>
        </div>
        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-zinc-600 transition-colors group-hover:text-cyan-400" />
      </div>

      <div className="mb-4">
        <div className="mb-2 flex items-center justify-between text-xs text-zinc-500">
          <span>Proficiency</span>
          <span className="tabular-nums text-zinc-300">{level}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-zinc-800">
          <div
            className="skill-bar h-full rounded-full transition-all duration-700"
            style={{ width: isInView ? `${level}%` : "0%" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400"
          >
            {skill}
          </span>
        ))}
      </div>
    </button>
  );
};

export default SkillCard;
