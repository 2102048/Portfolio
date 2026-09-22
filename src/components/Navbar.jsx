import { useEffect } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-60 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className={`font-mono text-xl font-bold text-blue-600 transition-opacity duration-300 ${
              menuOpen ? "opacity-0 md:opacity-100" : "opacity-100"
            }`}
          >
            mayur<span className="text-yellow-500">.portfolio</span>
          </a>

          {/* Mobile Toggle Button */}
          <div
            className="text-2xl text-gray-300 hover:text-white cursor-pointer select-none md:hidden z-50"
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
  );
}

export default Navbar;