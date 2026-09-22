function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* =========================================
          BACKDROP
      ========================================= */}
      <div
        className={`
          fixed
          inset-0
          z-[80]
          md:hidden
          bg-black/30
          transition-opacity
          duration-300
          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setMenuOpen(false)}
      />

      {/* =========================================
          MOBILE MENU
      ========================================= */}
      <div
        className={`
          fixed
          top-16
          left-0
          right-0
          z-[90]
          md:hidden

          bg-[#0a0a0a]

          border-b
          border-white/10

          shadow-2xl

          transition-all
          duration-300
          ease-out

          ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-6 invisible pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col items-center py-6">

          {/* HOME */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="
              w-full
              text-center
              text-2xl
              font-semibold
              text-white
              py-4
              hover:text-blue-400
              active:text-blue-400
              transition-colors
              duration-200
            "
          >
            Home
          </a>

          {/* ABOUT */}
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="
              w-full
              text-center
              text-2xl
              font-semibold
              text-white
              py-4
              hover:text-blue-400
              active:text-blue-400
              transition-colors
              duration-200
            "
          >
            About
          </a>

          {/* PROJECT */}
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="
              w-full
              text-center
              text-2xl
              font-semibold
              text-white
              py-4
              hover:text-blue-400
              active:text-blue-400
              transition-colors
              duration-200
            "
          >
            Project
          </a>

          {/* CONTACT */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="
              w-full
              text-center
              text-2xl
              font-semibold
              text-white
              py-4
              hover:text-blue-400
              active:text-blue-400
              transition-colors
              duration-200
            "
          >
            Contact
          </a>

        </div>
      </div>
    </>
  );
}

export default MobileMenu;