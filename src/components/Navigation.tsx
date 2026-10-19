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
    ...(gamesUnlocked ? [{ name: "Games", path: "/games" }] : []),
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper border-b border-ink">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-display text-xl font-extrabold tracking-tight hover:text-accent transition-colors active:opacity-70"
          >
            Ryan Holloway
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                aria-current={isActive(path) ? "page" : undefined}
                className={`text-xs uppercase tracking-widest py-1 border-b-2 transition-colors active:opacity-70 ${
                  isActive(path)
                    ? "border-accent text-ink"
                    : "border-transparent text-muted hover:text-ink hover:border-ink"
                }`}
              >
                {name}
              </Link>
            ))}
            {gamesUnlocked && (
              <span className="text-xs uppercase tracking-widest text-accent">
                [ Unlocked ]
              </span>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden text-ink border border-ink px-3 py-1.5 text-xs uppercase tracking-widest active:bg-ink active:text-paper transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden border-t border-ink -mx-4 sm:-mx-6 lg:-mx-8">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                aria-current={isActive(path) ? "page" : undefined}
                className={`block px-4 sm:px-6 lg:px-8 py-4 border-b border-ink text-sm uppercase tracking-widest transition-colors active:bg-ink active:text-paper ${
                  isActive(path)
                    ? "text-accent"
                    : "text-ink hover:text-accent"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
            ))}
            {gamesUnlocked && (
              <div className="px-4 sm:px-6 lg:px-8 py-3 text-xs uppercase tracking-widest text-accent">
                [ Unlocked ]
              </div>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
