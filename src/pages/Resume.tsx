export default function Resume() {
  const experience = [
    {
      id: "netwatch-sda-2025",
      role: "Software Development Assistant",
      company: "Netwatch",
      period: "September 2025 - Present",
      description:
        "React/TypeScript frontend development for Progressive Web Apps. Authentication systems, database integration, responsive design, and service worker implementation for offline functionality.",
    },
    {
      id: "netwatch-intern-2025",
      role: "Software Engineering Intern",
      company: "Netwatch",
      period: "January 2025 - August 2025",
      description:
        "Developed scaled-down PWA version of existing Web App. Collaborated on innovative .NET proof-of-concept projects. Gained hands-on exposure to modern web technologies, agile methodologies, and collaborative development.",
    },
    {
      id: "teagasc-seasonal-2024",
      role: "Temporary Seasonal Worker",
      company: "Teagasc, Carlow",
      period: "June 2024 - July 2024",
      description:
        "6-week internship with the Potato Research Group. Conducted potato virus testing using Enzyme-linked immunosorbent assay (ELISA). Balanced field work and lab work in agricultural research environment.",
    },
    {
      id: "msd-dmo-2023",
      role: "Digital Manufacturing Operative Intern",
      company: "MSD, Carlow",
      period: "June 2023 - August 2023",
      description:
        "Built and configured laptops and iPads, performed network patching and stock management. Mentored and supported colleagues on the Down Syndrome Ireland employment scheme.",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "GraphQL",
        "Tailwind CSS",
        "Framer Motion",
        "PWA",
        "Service Workers",
        "HTML",
        "CSS",
      ],
    },
    {
      category: "Backend & Databases",
      items: [
        "Node.js",
        "SQL Server",
        "Web Development",
        "Authentication",
        "Database Design",
      ],
    },
    {
      category: "Graphics & Game Dev",
      items: [
        "OpenGL",
        "C++",
        "SFML",
        "Graphics Programming",
        "Game Development",
        "Mobile Gameplay",
      ],
    },
    {
      category: "AI/Computer Vision",
      items: [
        "YOLO Object Detection",
        "PyTorch",
        "OpenCV",
        "Computer Vision",
        "Data Structures & Algorithms",
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "Git",
        "CI/CD",
        "Linux",
        "Microsoft 365",
      ],
    },
    {
      category: "Additional",
      items: [
        "Python",
        "JavaScript",
        "DaVinci Resolve",
        "Computer Hardware",
        "HACCP Training",
      ],
    },
  ];

  const education = [
    {
      id: "setu-carlow-bsc-2022",
      degree: "BSc Computer Science (Game Development)",
      school: "SETU Carlow",
      period: "September 2022 - May 2026",
      details:
        "First Class Honours (1.1). Year 1: 78.2% GPA, Year 2: 79.3% GPA, Year 3: 70%, Year 4: 70%",
      subjects: [
        "Web Development & Databases",
        "3D Graphics",
        "Data Structures & AI Algorithms",
        "Gameplay Programming for Mobile Devices",
      ],
    },
    {
      id: "harvardx-intro-cs-2025",
      degree: "Intro to Computer Science",
      school: "HarvardX (Online)",
      period: "June 2025 - December 2025",
      details: "Online Harvard-run Computer Science foundational course",
    },
  ];

  const awards = [
    {
      id: "cty-2017",
      title: "Centre For Talented Youth, Ireland",
      year: "2017",
      description:
        "Prestigious youth program award for students of high academic ability. Awarded for exceptional ability in Mathematics.",
    },
    {
      id: "haccp-2021",
      title: "HACCP Training Certification",
      year: "2021",
      description: "Food safety and hazard analysis certification.",
    },
    {
      id: "claude-101",
      title: "Claude 101",
      year: "2026",
      description: "Certification for Claude 101.",
    },
    {
      id: "claude-code-101",
      title: "Claude Code 101",
      year: "2026",
      description: "Certification for Claude Code 101.",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8 pb-12 md:pb-16">
          <h1 className="md:col-span-8 text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.9]">
            Resume
          </h1>
          <div className="md:col-span-4 md:self-end">
            <a
              href="/resume.pdf"
              className="inline-flex w-full sm:w-auto justify-center items-center bg-ink text-paper px-7 py-4 text-sm uppercase tracking-widest hover:bg-accent active:translate-y-px transition-colors"
            >
              Download PDF ↓
            </a>
          </div>
        </header>

        {/* Experience */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 border-t border-ink py-12">
          <h2 className="md:col-span-3 text-xs uppercase tracking-widest text-muted">
            Work Experience
          </h2>
          <div className="md:col-span-9 divide-y divide-ink">
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="py-8 first:pt-0 last:pb-0 grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-3"
              >
                <div className="sm:col-span-8">
                  <h3 className="text-2xl md:text-3xl">{exp.role}</h3>
                  <p className="mt-2 text-sm uppercase tracking-widest text-accent">
                    {exp.company}
                  </p>
                </div>
                <p className="sm:col-span-4 sm:text-right text-xs uppercase tracking-widest text-muted sm:pt-2">
                  {exp.period}
                </p>
                <p className="sm:col-span-12 text-muted leading-relaxed max-w-3xl">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 border-t border-ink py-12">
          <h2 className="md:col-span-3 text-xs uppercase tracking-widest text-muted">
            Skills &amp; Technologies
          </h2>
          <dl className="md:col-span-9 divide-y divide-ink border-b border-ink">
            {skills.map((group) => (
              <div
                key={group.category}
                className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-x-6 gap-y-2"
              >
                <dt className="sm:col-span-4 text-sm font-semibold">
                  {group.category}
                </dt>
                <dd className="sm:col-span-8">
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="whitespace-nowrap after:content-['/'] after:ml-4 after:text-ink/30 last:after:content-none"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 border-t border-ink py-12">
          <h2 className="md:col-span-3 text-xs uppercase tracking-widest text-muted">
            Education
          </h2>
          <div className="md:col-span-9 divide-y divide-ink">
            {education.map((edu) => (
              <div key={edu.id} className="py-8 first:pt-0 last:pb-0">
                <h3 className="text-2xl md:text-3xl">{edu.degree}</h3>
                <p className="mt-2 text-sm uppercase tracking-widest text-accent">
                  {edu.school}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted">
                  {edu.period}
                </p>
                <p className="mt-4 text-sm text-muted leading-relaxed max-w-3xl">
                  {edu.details}
                </p>
                {edu.subjects && (
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-wider text-ink/70">
                    {edu.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Awards */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 border-t border-b border-ink py-12">
          <h2 className="md:col-span-3 text-xs uppercase tracking-widest text-muted">
            Awards &amp; Recognition
          </h2>
          <div className="md:col-span-9 divide-y divide-ink">
            {awards.map((award) => (
              <div key={award.id} className="py-8 first:pt-0 last:pb-0">
                <div className="flex justify-between items-baseline gap-6">
                  <h3 className="text-2xl md:text-3xl">{award.title}</h3>
                  <span className="shrink-0 tabular-nums text-sm text-accent">
                    {award.year}
                  </span>
                </div>
                <p className="mt-3 text-muted leading-relaxed max-w-3xl">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
