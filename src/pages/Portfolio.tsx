import ProjectCard, { type Project } from "../components/ProjectCard";

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
      "Firebase",
    ],
    image: "godo.png",
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
      "Flask API",
    ],
    github: "https://github.com/ryanholloway/yolo-frame-processing-api",
    video: "",
    image: "yolo.png",
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
      "Jellyfin",
      "Radarr",
      "Sonarr",
      "Jellyseerr",
    ],
    inProgress: false,
  },
];

export default function Portfolio() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-24">
      <div className="max-w-6xl mx-auto">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6 pb-12 md:pb-16">
          <p className="md:col-span-3 text-xs uppercase tracking-widest text-muted">
            Selected work
          </p>
          <div className="md:col-span-9">
            <h1 className="text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.9]">
              Projects
            </h1>
            <p className="mt-8 max-w-xl text-muted leading-relaxed">
              Showcasing my best work in full-stack development, graphics
              programming, and AI.
            </p>
          </div>
        </header>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
          <div className="border-t border-ink" />
        </div>
      </div>
    </div>
  );
}
