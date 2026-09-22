import { useEffect } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  // Prevent background page scrolling while mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-[70]
        bg-[rgba(10,10,10,0.8)]
        backdrop-blur-lg
        border-b
        border-white/10
        shadow-lg
      "
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className={`
              font-mono
              text-xl
              font-bold
              text-blue-600
              transition-opacity
              duration-300
              ${
                menuOpen
                  ? "opacity-0 md:opacity-100"
                  : "opacity-100"
              }
            `}
          >
            mayur<span className="text-yellow-500">.portfolio</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="
              md:hidden
              relative
              z-[80]
              flex
              items-center
              justify-center
              w-10
              h-10
              text-3xl
              text-gray-300
              hover:text-white
              transition-colors
              duration-200
              cursor-pointer
              focus:outline-none
            "
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            <a
              href="#home"
              className="
                text-gray-300
                hover:text-white
                transition-colors
                duration-200
              "
            >
              Home
            </a>

            <a
              href="#about"
              className="
                text-gray-300
                hover:text-white
                transition-colors
                duration-200
              "
            >
              About
            </a>

            <a
              href="#projects"
              className="
                text-gray-300
                hover:text-white
                transition-colors
                duration-200
              "
            >
              Project
            </a>

            <a
              href="#contact"
              className="
                text-gray-300
                hover:text-white
                transition-colors
                duration-200
              "
            >
              Contact
            </a>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;