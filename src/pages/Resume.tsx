import { motion } from "framer-motion";

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
        "Expected First Class Honours (1.1). Year 1: 78.2% GPA, Year 2: 79.3% GPA, Year 3: 70%",
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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Resume</h1>
          <a
            href="/resume.pdf"
            className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-semibold"
          >
            Download PDF
          </a>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mb-16 w-full"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Work Experience
          </h2>
          <motion.div
            className="space-y-6 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors w-full"
              >
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-blue-400 font-semibold text-sm">
                  {exp.company}
                </p>
                <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mb-16 w-full"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Skills & Technologies
          </h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors w-full"
              >
                <h3 className="text-lg font-bold mb-4 text-blue-400">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-start">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm hover:bg-opacity-100 transition-colors whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="mb-16 w-full"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Education</h2>
          <motion.div
            className="space-y-6 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors w-full"
              >
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-blue-400 font-semibold text-sm">
                  {edu.school}
                </p>
                <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                <p className="text-gray-300 text-sm mb-3">{edu.details}</p>
                {edu.subjects && (
                  <div className="flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Awards & Recognition */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <h2 className="text-3xl font-bold mb-8 text-blue-400">
            Awards & Recognition
          </h2>
          <motion.div
            className="space-y-6 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {awards.map((award) => (
              <motion.div
                key={award.id}
                variants={itemVariants}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors w-full"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {award.title}
                  </h3>
                  <span className="text-blue-400 font-semibold text-sm">
                    {award.year}
                  </span>
                </div>
                <p className="text-gray-300">{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
