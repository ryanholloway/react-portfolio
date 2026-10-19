import { Link } from "react-router-dom";
import SkillBadge from "../components/SkillBadge";

const techStack = [
  { name: "React", url: "https://react.dev" },
  { name: "TypeScript", url: "https://www.typescriptlang.org" },
  { name: "GraphQL", url: "https://graphql.org" },
  { name: "C++", url: "https://cplusplus.com" },
  { name: "OpenGL", url: "https://www.opengl.org" },
  { name: "SFML", url: "https://www.sfml-dev.org" },
  { name: "Python", url: "https://www.python.org" },
  { name: "Docker", url: "https://www.docker.com" },
  { name: "YOLO", url: "https://github.com/ultralytics/yolov5" },
  { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" },
  { name: "C#", url: "https://dotnet.microsoft.com/languages/csharp" },
  { name: "Unity", url: "https://unity.com" },
  { name: "Git", url: "https://git-scm.com" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero: split screen, type on the left, photo bleeding off the right */}
      <section className="px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 md:pb-24 border-b border-ink">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-14">
          <div className="md:col-span-7 flex flex-col">
            <p className="text-xs uppercase tracking-widest text-muted mb-6">
              Portfolio — Computer Science &amp; Game Development
            </p>
            <h1 className="text-[clamp(3.25rem,9vw,8rem)] leading-[0.9]">
              Ryan
              <br />
              <span className="italic text-accent">Holloway</span>
            </h1>
            <p className="mt-8 text-sm uppercase tracking-widest">
              Full Stack Developer
            </p>
          </div>

          <figure className="md:col-span-4 md:col-start-9 md:mt-28">
            <img
              src="/me.jpg"
              alt="Ryan Holloway"
              className="w-full aspect-[4/5] object-cover border border-ink"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-widest text-muted">
              Fig. 01 — Ryan Holloway
            </figcaption>
          </figure>
        </div>
      </section>

      {/* About + actions */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 border-b border-ink">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8">
          <h2 className="md:col-span-3 text-xs font-mono uppercase tracking-widest text-muted">
            About
          </h2>
          <div className="md:col-span-8 md:col-start-5">
            <p className="font-display text-2xl md:text-3xl leading-snug">
              Computer Games Development graduate from SETU Carlow, with a
              First Class Honours degree and a passion for creating immersive
              game experiences.
            </p>
            <p className="mt-6 text-base text-muted leading-relaxed max-w-2xl">
              Currently working as a Software Development Assistant at Netwatch,
              specializing in React/GraphQL and C# .NET. I have experience with
              game engines like Unity and OpenGL, and I'm continuously learning
              new technologies while solving complex programming challenges.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <Link
                to="/portfolio"
                className="inline-flex justify-center items-center bg-ink text-paper px-7 py-4 text-sm uppercase tracking-widest hover:bg-accent active:translate-y-px transition-colors"
              >
                View my work →
              </Link>
              <Link
                to="/contact"
                className="text-sm uppercase tracking-widest underline decoration-1 underline-offset-[6px] hover:text-accent hover:decoration-accent active:opacity-70 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stack: flat list, no icons, no pills */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8">
          <h2 className="md:col-span-3 text-xs uppercase tracking-widest text-muted">
            Stack
          </h2>
          <ul className="md:col-span-9 flex flex-wrap gap-x-8 gap-y-4">
            {techStack.map((tech) => (
              <li key={tech.name}>
                <SkillBadge skill={tech.name} href={tech.url} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
