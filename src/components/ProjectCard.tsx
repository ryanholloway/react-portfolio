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
  index: number;
}

const formatTime = (seconds: number) => {
  if (isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
};

// Hard hatch for projects without media, instead of a gradient placeholder
const hatch =
  "repeating-linear-gradient(135deg, transparent 0 18px, rgba(23,20,16,0.07) 18px 19px)";

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

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
      setCurrentTime(videoRef.current.currentTime);
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

  const number = String(index + 1).padStart(2, "0");
  // Alternate media left and right so the list reads as an editorial spread
  const mediaSide = index % 2 === 0 ? "md:col-start-1" : "md:col-start-7";
  const textSide = index % 2 === 0 ? "md:col-start-8" : "md:col-start-1";

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8 border-t border-ink py-12 md:py-16">
      {/* Media */}
      <div className={`md:col-span-6 md:row-start-1 ${mediaSide}`}>
        {project.video ? (
          <div className="bg-ink text-paper">
            <video
              ref={videoRef}
              className="w-full aspect-video object-contain bg-ink"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              className="h-1.5 w-full bg-paper/25 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="h-full bg-accent"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between gap-4 px-3 py-3 text-xs uppercase tracking-widest">
              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="hover:text-accent focus-visible:text-accent active:opacity-60 transition-colors"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="hover:text-accent focus-visible:text-accent active:opacity-60 transition-colors"
                >
                  {isMuted ? "Unmute" : "Mute"}
                </button>
                <span className="tabular-nums text-paper/70">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent focus-visible:text-accent active:opacity-60 transition-colors"
              >
                Open ↗
              </a>
            </div>
          </div>
        ) : project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full aspect-video object-cover border border-ink"
          />
        ) : (
          <div
            className="w-full aspect-video border border-ink bg-paper-deep flex items-end p-4"
            style={{ backgroundImage: hatch }}
          >
            <p className="text-xs uppercase tracking-widest text-muted bg-paper px-2 py-1">
              Preview coming soon
            </p>
          </div>
        )}
      </div>

      {/* Text */}
      <div
        className={`md:col-span-5 md:row-start-1 flex flex-col ${textSide}`}
      >
        <div className="flex items-center justify-between gap-4 text-xs tracking-widest text-muted">
          <span className="tabular-nums">{number}</span>
          {project.inProgress && (
            <span className="inline-flex items-center gap-2 uppercase text-accent">
              <span className="h-2 w-2 bg-accent" aria-hidden="true" />
              In progress
            </span>
          )}
        </div>

        <h3 className="mt-5 text-4xl md:text-5xl leading-[0.95]">
          {project.title}
        </h3>

        <p className="mt-6 text-muted leading-relaxed">{project.description}</p>

        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs uppercase tracking-wider text-ink/70">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        {(project.github || project.link) && (
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-widest">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-[6px] hover:text-accent hover:decoration-accent active:opacity-70 transition-colors"
              >
                GitHub ↗
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-1 underline-offset-[6px] hover:text-accent hover:decoration-accent active:opacity-70 transition-colors"
              >
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
