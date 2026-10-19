import type { ReactNode } from "react";

// Custom glyph set: one 24px grid, one 1.5px square-cap stroke, no brand artwork.
// Each glyph is a geometric motif tied to its technology.
const icons: Record<string, ReactNode> = {
  // Three orbits around a nucleus
  React: (
    <>
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  // Framed T and S
  TypeScript: (
    <>
      <rect x="3" y="3" width="18" height="18" />
      <path d="M5.5 8.5h5M8 8.5v7" />
      <path d="M17 8.5h-3.5v3.25h3v3.25H13.5" />
    </>
  ),
  // Three nodes joined in a graph
  GraphQL: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="19" cy="17.5" r="2.2" />
      <circle cx="5" cy="17.5" r="2.2" />
      <path d="M12 7.2 L17.1 15.6 M6.9 15.6 L10.9 8.2 M7.2 17.5h9.6" />
    </>
  ),
  // C arc with two plus marks
  "C++": (
    <>
      <path d="M14 9.2A5.2 5.2 0 1 0 14 14.8" />
      <path d="M16.8 12h2.4M18 10.8v2.4M20.8 12h2.4M22 10.8v2.4" />
    </>
  ),
  // Isometric cube
  OpenGL: (
    <>
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
      <path d="M4 7.5L12 12l8-4.5M12 12v9" />
    </>
  ),
  // Monitor with a sprite diamond
  SFML: (
    <>
      <rect x="3" y="4" width="18" height="12" />
      <path d="M12 7l2.5 3-2.5 3-2.5-3z" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  // Two interlocking blocks
  Python: (
    <>
      <rect x="4" y="3" width="11" height="9" rx="2" />
      <rect x="9" y="12" width="11" height="9" rx="2" />
      <circle cx="9.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="17.5" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  // Stacked containers on a hull
  Docker: (
    <>
      <path d="M2.5 13.5h18.5c.6 3.5-1.5 6.5-6.5 6.5H7.5C4.5 20 2.5 17 2.5 13.5z" />
      <rect x="5" y="9.5" width="3" height="3" />
      <rect x="9" y="9.5" width="3" height="3" />
      <rect x="13" y="9.5" width="3" height="3" />
      <rect x="9" y="5.5" width="3" height="3" />
    </>
  ),
  // Detection reticle
  YOLO: (
    <>
      <path d="M3 7V3h4M17 3h4v4M21 17v4h-4M7 21H3v-4" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  // Database cylinder
  SQL: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="2.5" />
      <path d="M4 5.5v13c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-13" />
      <path d="M4 12c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5" />
    </>
  ),
  // C arc with a hash mark
  "C#": (
    <>
      <path d="M11 9.2A5.2 5.2 0 1 0 11 14.8" />
      <path d="M16 8v8M20 8v8M14.5 10.5h7M14.5 13.5h7" />
    </>
  ),
  // U-shaped cradle with a pivot point
  Unity: (
    <>
      <path d="M5 4v8a7 7 0 0 0 14 0V4" />
      <circle cx="12" cy="20" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  // Commit graph: a main line and a branch
  Git: (
    <>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 7v10M18 10c0 3-12 1.5-12 7" />
    </>
  ),
};

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const glyph = icons[name];
  if (!glyph) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {glyph}
    </svg>
  );
}
