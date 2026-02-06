import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  video?: string;
  inProgress?: boolean;
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: "GoDo - The Bucket List App",
      description:
        "Developed a full-stack bucket list tracking app as a personal project to showcase modern web development skills. GoDo helps users capture life goals, track progress with visual milestones, and celebrate achievements across devices. Features a responsive landing page built with React 18, TypeScript, Vite, Material-UI (MUI v5), and Framer Motion for smooth animations. The core app is a cross-platform PWA in development with offline support, progress visualization, and social sharing capabilities.",
      tags: [
        "React 18",
        "TypeScript",
        "Vite",
        "Material-UI",
        "Framer Motion",
        "PWA",
        "Vercel",
      ],
      link: "https://getgodo.net",
      inProgress: true,
    },
    {
      id: 2,
      title: "Zombie Survival Shooter - Joint Module End of Year 2",
      description:
        "A comprehensive 4-module joint project developing a zombie survival shooter with life mechanics (thirst, hunger). Features a spatial partition system for efficient collision detection, procedurally generated maps using Perlin Noise, advanced 2D lighting with Candle library, and a full level editor. Implemented survival mechanics with randomly spawned resource pickups and dynamic enemy AI.",
      tags: [
        "C++",
        "SFML",
        "Candle Library",
        "Perlin Noise",
        "Spatial Partitioning",
        "Level Editor",
        "Game Development",
      ],
      video: "zombiesurvivor.mp4",
      github: "https://github.com/ryanholloway/SurvivalPixelArt2D",
      inProgress: false,
    },
    {
      id: 3,
      title: "3D Cube Game - OpenGL & SFML (First Class)",
      description:
        "A challenging OpenGL and SFML project creating a scrolling cube game where only same-colored cubes interact. Developed custom Command Pattern for unified input handling between keyboard and controller. Implemented controller support with gamepad integration, audio system with soundtrack and sound effects, and intuitive gameplay mechanics. Achieved First Class Grade.",
      tags: [
        "C++",
        "OpenGL",
        "SFML",
        "Controller Support",
        "Command Pattern",
        "Audio Systems",
        "Input Management",
      ],
      video: "cuberunner.mp4",
      github:
        "https://github.com/ryanholloway/3DGameplayProgramming/tree/main/Project",
      inProgress: false,
    },
    {
      id: 4,
      title: "YOLO Object Detection with Raspberry Pi 5",
      description:
        "Implemented real-time card detection using YOLO v11 with AI accelerator hat and camera module 3. Optimized for low-latency JSON/JPG streaming over USB with custom UI. Explored CUDA OpenCV performance optimization and resolution tuning (320p) for efficient CPU utilization.",
      tags: [
        "Python",
        "YOLO v11",
        "Raspberry Pi 5",
        "Computer Vision",
        "OpenCV",
        "AI Accelerator",
      ],
      github: "https://github.com/ryanholloway/yolo-frame-processing-api",
      video: "",
      inProgress: true,
    },
    {
      id: 5,
      title: "Progressive Web App at Netwatch",
      description:
        "Developed responsive PWA using React and TypeScript with GraphQL backend integration. Implemented service workers for offline functionality and native-like app behavior. Built authentication systems and complex state management with full responsive design.",
      tags: [
        "React",
        "TypeScript",
        "GraphQL",
        "PWA",
        "Service Workers",
        "Responsive Design",
      ],
      video: "",
      inProgress: false,
    },
    {
      id: 6,
      title: "Docker Media Server Stack",
      description:
        "Orchestrated containerized media management system using Docker Compose. Integrated DVD/Blu-ray ripping, automated sorting, and multi-service coordination. Built sophisticated container networking and volume management for home automation solutions.",
      tags: [
        "Docker",
        "Docker Compose",
        "Linux",
        "Home Automation",
        "Container Orchestration",
      ],
      inProgress: false,
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-gray-400 text-lg">
            Showcasing my best work in full-stack development, graphics
            programming, and AI
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="w-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
