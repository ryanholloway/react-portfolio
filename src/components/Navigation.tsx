import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [gamesUnlocked, setGamesUnlocked] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  // Konami Code: ↑↑↓↓←→←→B A
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  const [keySequence, setKeySequence] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key =
        e.key.toLowerCase() === "b" || e.key.toLowerCase() === "a"
          ? e.key.toLowerCase()
          : e.code;

      const newSequence = [...keySequence, key].slice(-10);
      setKeySequence(newSequence);

      // Check if sequence matches Konami Code
      if (newSequence.join(",") === konamiCode.join(",")) {
        setGamesUnlocked(!gamesUnlocked);
        setKeySequence([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keySequence, gamesUnlocked]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
    ...(gamesUnlocked ? [{ name: "🎮 Games", path: "/games" }] : []),
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
          >
            Ryan Holloway
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`relative font-medium transition ${
                  isActive(path)
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                } after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full`}
              >
                {name}
              </Link>
            ))}
            {/* Easter Egg Indicator */}
            {gamesUnlocked && (
              <div className="text-xs text-yellow-400 animate-pulse ml-4 px-2 py-1 rounded bg-yellow-900 bg-opacity-30">
                Secret Unlocked 🔓
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 rounded transition ${
                  isActive(path)
                    ? "bg-blue-900 text-blue-400"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
            {gamesUnlocked && (
              <div className="px-4 py-2 text-xs text-yellow-400 bg-yellow-900 bg-opacity-30 rounded animate-pulse">
                Secret Unlocked 🔓
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
