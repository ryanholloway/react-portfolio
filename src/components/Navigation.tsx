import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
    { name: "Games", path: "/games" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 shadow-lg">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
          >
            ryancholloway.com
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
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
          </div>
        )}
      </div>
    </nav>
  );
}
