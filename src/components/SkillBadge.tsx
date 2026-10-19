import TechIcon from "./TechIcons";

interface SkillBadgeProps {
  skill: string;
  href?: string;
}

export default function SkillBadge({ skill, href }: SkillBadgeProps) {
  const content = (
    <>
      <TechIcon name={skill} className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
      <span className="underline decoration-1 underline-offset-[6px] decoration-muted group-hover:decoration-accent transition-colors">
        {skill}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`Learn more about ${skill}`}
        className="group inline-flex items-center gap-2.5 text-sm text-ink hover:text-accent focus-visible:text-accent active:opacity-70 transition-colors"
      >
        {content}
      </a>
    );
  }

  return <span className="inline-flex items-center gap-2.5 text-sm text-ink">{content}</span>;
}
