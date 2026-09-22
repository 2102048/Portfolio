import RevealOnScroll from "../RevealOnScroll";

function About() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C"],
      color: "blue",
    },
    {
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Tailwind CSS"],
      color: "cyan",
    },
    {
      title: "Backend & Databases",
      skills: ["Express.js", "MySQL", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "emerald",
    },
    {
      title: "Testing & QA",
      skills: ["Manual Testing", "Input Validation", "Test Case Design", "Debugging"],
      color: "amber",
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "Visual Studio Code"],
      color: "purple",
    },
    {
      title: "Operating Systems",
      skills: ["Windows", "Linux"],
      color: "rose",
    },
  ];

  // Helper function to provide color accents per category
  const getBadgeStyle = (color) => {
    const styles = {
      blue: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.25)]",
      cyan: "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_2px_8px_rgba(6,182,212,0.25)]",
      emerald: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(16,185,129,0.25)]",
      amber: "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgba(245,158,11,0.25)]",
      purple: "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(168,85,247,0.25)]",
      rose: "bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 hover:shadow-[0_2px_8px_rgba(244,63,94,0.25)]",
    };
    return styles[color] || styles.blue;
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-8 text-base leading-relaxed">
              Passionate developer with expertise in building scalable web
              applications, designing robust backend APIs, and creating innovative solutions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-5 border border-white/5 bg-white/[0.01] hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((tech, key) => (
                      <span
                        key={key}
                        className={`py-1 px-3 rounded-full text-xs font-medium transition cursor-default ${getBadgeStyle(
                          category.color
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-8">
            <div className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                Education <span>🎓</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li className="leading-relaxed">
                  <strong className="text-white">
                    Master of Science in Information Technology
                  </strong>{" "}
                  — Parvatibai Chowgule College of Arts and Science (2024–2026)
                </li>
                <li className="leading-relaxed">
                  <strong className="text-white">
                    Bachelor of Science in Computer Science
                  </strong>{" "}
                  — Dnyanprassarak Mandal's College (2021–2024)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;