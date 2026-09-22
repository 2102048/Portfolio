function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* Dark transparent background */}
      <div
        className={`fixed inset-0 z-[45] bg-black/30 md:hidden
          transition-opacity duration-300
          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-[55] md:hidden
          bg-[#0a0a0a]
          border-b border-white/10
          shadow-2xl
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center py-6">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4 hover:text-blue-400 transition-colors"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4 hover:text-blue-400 transition-colors"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4 hover:text-blue-400 transition-colors"
          >
            Project
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4 hover:text-blue-400 transition-colors"
          >
            Contact
          </a>

        </div>
      </div>
    </>
  );
}

export default MobileMenu;