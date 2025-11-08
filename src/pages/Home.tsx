import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SkillBadge from "../components/SkillBadge";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl sm:text-6xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">Ryan</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Computer Science & Game Development | Full Stack Developer
            </p>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Final year Computer Games Development student at SETU Carlow with
              a passion for creating immersive game experiences. Currently
              working as a Software Development Assistant at Netwatch,
              specializing in React/GraphQL and C# .NET. I have experience with
              game engines like Unity and OpenGL, and I'm continuously learning
              new technologies while solving complex programming challenges.
            </p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-start mb-12"
            >
              <Link
                to="/portfolio"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition transform hover:scale-105 w-full sm:w-auto text-center"
              >
                View My Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition w-full sm:w-auto text-center"
              >
                Get in Touch
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <p className="text-gray-500 mb-6 text-left">Tech Stack</p>
              <div className="flex flex-wrap gap-3 justify-start">
                {[
                  { name: "React", url: "https://react.dev" },
                  { name: "TypeScript", url: "https://www.typescriptlang.org" },
                  { name: "GraphQL", url: "https://graphql.org" },
                  { name: "C++", url: "https://cplusplus.com" },
                  { name: "OpenGL", url: "https://www.opengl.org" },
                  { name: "SFML", url: "https://www.sfml-dev.org" },
                  { name: "Python", url: "https://www.python.org" },
                  { name: "Docker", url: "https://www.docker.com" },
                  {
                    name: "YOLO",
                    url: "https://github.com/ultralytics/yolov5",
                  },
                  { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" },
                  {
                    name: "C#",
                    url: "https://dotnet.microsoft.com/languages/csharp",
                  },
                  { name: "Unity", url: "https://unity.com" },
                  { name: "Git", url: "https://git-scm.com" },
                ].map((tech, index) => (
                  <SkillBadge
                    key={tech.name}
                    skill={tech.name}
                    index={index}
                    href={tech.url}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <img
                src="/me.jpg"
                alt="Ryan Holloway"
                className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-blue-400/30 hover:border-blue-400/60 transition"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
