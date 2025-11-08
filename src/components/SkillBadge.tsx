import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
  index?: number;
  href?: string;
}

export default function SkillBadge({
  skill,
  index = 0,
  href,
}: SkillBadgeProps) {
  const content = (
    <motion.span
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition cursor-pointer hover:scale-110 inline-flex items-center gap-1"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {skill}
      {href && (
        <svg
          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={`Learn more about ${skill}`}
        className="group"
      >
        {content}
      </a>
    );
  }

  return content;
}
