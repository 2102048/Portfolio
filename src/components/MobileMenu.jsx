function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`fixed inset-0 w-full z-50 flex flex-col items-center justify-center
        bg-black/50 backdrop-blur-xl
        transition-all duration-300 ease-in-out md:hidden ${
        menuOpen
          ? "opacity-100 pointer-events-auto visible"
          : "opacity-0 pointer-events-none invisible"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </a>

      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        About
      </a>

      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        Project
      </a>

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </a>
    </div>
  );
}

export default MobileMenu;