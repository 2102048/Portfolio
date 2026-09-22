import { useEffect } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="font-mono text-xl font-bold text-blue-600">
              mayur<span className="text-yellow-500">.portfolio</span>
            </a>

            {/* Mobile Hamburger / Close icon */}
            <div
              className="text-2xl text-gray-300 hover:text-white cursor-pointer select-none md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "\u2715" : "\u2630"}
            </div>

            {/* Laptop / Desktop links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Project</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[rgba(10,10,10,0.95)] backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-xl font-medium md:hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Project
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-gray-300 hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
    </>
  );
}

export default Navbar;