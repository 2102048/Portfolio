import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      )}

      <div
        className={`min-h-screen bg-black text-gray-100 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Navbar */}
        <Navbar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* Mobile Menu */}
        <MobileMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />

        {/* Portfolio Content */}
        <main
          className={`
            relative
            z-0
            transition-all
            duration-300
            ease-in-out
            ${
              menuOpen
                ? "blur-[8px] scale-[0.995]"
                : "blur-0 scale-100"
            }
          `}
        >
          <Home />
          <About />
          <Project />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;