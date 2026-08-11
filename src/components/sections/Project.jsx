import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";

function Project() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nutrivision WebApp */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Nutrivision WebApp</h3>
                <p className="text-gray-400 mb-4">
                  Developed a full-stack AI-driven web application for automated meal tracking, macro analytics, and personalized dietary feedback.
                  Built dynamic frontend dashboards with React, Vite, and Tailwind CSS, featuring real-time data visualization using Chart libraries.
                  Implemented secure backend REST APIs using FastAPI, PostgreSQL, and JWT authentication.
                  Integrated Keras deep learning models for instant food photo recognition and automated nutrition calculation.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25"
                >
                  ▶ Watch Demo
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="https://github.com/2102048/nutrivision-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-center rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    Frontend Code
                  </a>
                  <a
                    href="https://github.com/2102048/nutrivision-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-center rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-medium transition-all duration-200"
                  >
                    Backend Code
                  </a>
                </div>
              </div>
            </div>

            {/* Bill Scanner App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Bill Scanner & Splitter</h3>
                <p className="text-gray-400 mb-4">
                  Built a smart web application that scans or uploads receipt images to extract itemized costs automatically. 
                  Allows users to specify group size, assign individual ordered items to specific group members, and accurately calculate split amounts per person.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href="https://bill-scanner-roan.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 text-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  🔗 Live Demo
                </a>
                <a
                  href="https://github.com/2102048/bill-scanner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 text-center rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-medium transition-all duration-200"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* Cocktail WebApp */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Cocktail Explorer</h3>
                <p className="text-gray-400 mb-4">
                  Built an interactive web application that retrieves and filters detailed cocktail lists using first-letter index searching.
                  Features dynamic state management that enables users to easily browse drinks, filter options, and manage selections with an integrated add-to-cart feature.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <a
                  href="https://2102048.github.io/Cocktail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 text-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  🔗 Live Demo
                </a>
                <a
                  href="https://github.com/2102048/Cocktail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 text-center rounded-lg border border-white/20 hover:border-blue-400/50 hover:bg-white/5 text-gray-300 hover:text-white text-sm font-medium transition-all duration-200"
                >
                  View Code
                </a>
              </div>
            </div>

            {/* SwasthyaMitra App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">SwasthyaMitra App</h3>
                <p className="text-gray-400 mb-4">
                  Designed modules for healthcare assistance and patient record management.
                  Integrated MongoDB for storing patient and service provider data.
                  Focused on data accuracy and application reliability through validations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>

      {/* Video Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
              <h4 className="text-lg font-semibold text-white">Nutrivision WebApp Demo</h4>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white text-2xl font-bold cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://drive.google.com/file/d/1MWEQdmWTL10S0jMfXfmzTFpW0V7lJip1/preview"
                className="w-full h-full border-0"
                allow="autoplay"
                allowFullScreen
                title="Nutrivision Demo Video"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;