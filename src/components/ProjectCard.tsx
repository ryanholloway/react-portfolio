import { motion } from "framer-motion";
import { useRef, useState } from "react";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  video?: string;
  image?: string;
  inProgress?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress(
        (videoRef.current.currentTime / videoRef.current.duration) * 100
      );
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = x / rect.width;
      videoRef.current.currentTime = percentage * duration;
      setProgress(percentage * 100);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 transition-colors cursor-pointer h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      {/* In Progress Badge */}
      {project.inProgress && (
        <div className="absolute bottom-4 right-4 z-30">
          <div className="flex items-center gap-1 bg-yellow-400 text-gray-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
            </span>
            IN PROGRESS
          </div>
        </div>
      )}

      {project.image && !project.video && (
        <div className="relative w-full aspect-video shrink-0">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Video Section */}
      {project.video ? (
        <div className="relative w-full bg-black aspect-video shrink-0">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent pt-12 pb-3 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div
              className="w-full h-1 bg-gray-600 rounded-full mb-3 cursor-pointer hover:h-2 transition-all"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-blue-500 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlayPause}
                  className="text-white hover:text-blue-400 transition p-1"
                >
                  {isPlaying ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-blue-400 transition p-1"
                >
                  {isMuted ? (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.6915026,12.4744748 L21.7063267,17.4886509 C22.0575391,17.8374143 22.0575391,18.4221172 21.7063267,18.7708806 L20.5186046,19.9840766 C20.1673922,20.3328401 19.5837833,20.3328401 19.2325709,19.9840766 L14.2159048,14.9699005 L9.19923867,19.9840766 C8.84802629,20.3328401 8.26441742,20.3328401 7.91320504,19.9840766 L6.72548295,18.7708806 C6.37427057,18.4221172 6.37427057,17.8374143 6.72548295,17.4886509 L11.7421491,12.4744748 L6.72548295,7.46029873 C6.37427057,7.11153536 6.37427057,6.52683246 6.72548295,6.17806909 L7.91320504,5.01687508 C8.26441742,4.66811171 8.84802629,4.66811171 9.19923867,5.01687508 L14.2159048,10.0310512 L19.2325709,5.01687508 C19.5837833,4.66811171 20.1673922,4.66811171 20.5186046,5.01687508 L21.7063267,6.17806909 C22.0575391,6.52683246 22.0575391,7.11153536 21.7063267,7.46029873 L16.6915026,12.4744748 Z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>

                <span className="text-white text-xs">
                  {formatTime(videoRef.current?.currentTime || 0)} /{" "}
                  {formatTime(duration)}
                </span>
              </div>

              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition p-1"
                title="Open in new window"
              >
                <svg
                  className="w-5 h-5"
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
              </a>
            </div>
          </div>
        </div>
      ) : (
        !project.image && (
          <div className="relative w-full aspect-video shrink-0 overflow-hidden">
            {/* Neutral placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950" />
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(59,130,246,0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.45) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/20" />

            <div className="relative h-full w-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-6 h-6 text-blue-300/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-xs font-semibold tracking-wide text-gray-300/80">
                  Preview coming soon
                </p>
              </div>
            </div>
          </div>
        )
      )}

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm hover:bg-opacity-100 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-4 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition font-semibold"
              >
                <svg
                  className="w-5 h-5"
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
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
