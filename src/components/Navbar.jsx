import { useEffect } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "64px",
          zIndex: 9999,
          background: "rgba(10, 10, 10, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">

            {/* LOGO */}
            <a
              href="#home"
              onClick={closeMenu}
              className="font-mono text-xl font-bold text-blue-600"
            >
              mayur<span className="text-yellow-500">.portfolio</span>
            </a>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden text-3xl text-gray-300 hover:text-white"
              style={{
                position: "relative",
                zIndex: 10001,
                width: "45px",
                height: "45px",
              }}
            >
              {menuOpen ? "×" : "☰"}
            </button>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </a>

              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>

              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Project
              </a>

              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE BACKDROP ================= */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="md:hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9997,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 9998,

          background: "#0a0a0a",

          borderBottom: "1px solid rgba(255,255,255,0.12)",

          boxShadow: "0 15px 40px rgba(0,0,0,0.6)",

          transform: menuOpen
            ? "translateY(0)"
            : "translateY(-120%)",

          opacity: menuOpen ? 1 : 0,

          visibility: menuOpen
            ? "visible"
            : "hidden",

          pointerEvents: menuOpen
            ? "auto"
            : "none",

          transition:
            "transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px 0 25px",
          }}
        >
          <a
            href="#home"
            onClick={closeMenu}
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 600,
              textDecoration: "none",
              padding: "14px 20px",
            }}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 600,
              textDecoration: "none",
              padding: "14px 20px",
            }}
          >
            About
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 600,
              textDecoration: "none",
              padding: "14px 20px",
            }}
          >
            Project
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: 600,
              textDecoration: "none",
              padding: "14px 20px",
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;