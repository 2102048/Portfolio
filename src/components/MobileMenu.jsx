function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* Blurred background */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          backdropFilter: menuOpen ? "blur(10px)" : "blur(0px)",
          WebkitBackdropFilter: menuOpen ? "blur(10px)" : "blur(0px)",
        }}
      />

      {/* Mobile menu */}
      <div
        className={`fixed top-16 left-0 right-0 z-50 md:hidden
          bg-[rgba(10,10,10,0.92)]
          border-t border-white/10
          border-b border-white/10
          shadow-2xl
          transition-all duration-300 ease-in-out
          ${
            menuOpen
              ? "opacity-100 translate-y-0 visible pointer-events-auto"
              : "opacity-0 -translate-y-5 invisible pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center py-8">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4
                       transition-all duration-200 hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4
                       transition-all duration-200 hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4
                       transition-all duration-200 hover:text-blue-400"
          >
            Project
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-white py-4
                       transition-all duration-200 hover:text-blue-400"
          >
            Contact
          </a>

        </div>
      </div>
    </>
  );
}

export default MobileMenu;