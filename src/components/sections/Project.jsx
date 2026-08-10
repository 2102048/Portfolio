import RevealOnScroll from "../RevealOnScroll";

function Project(){
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Nutrivision WebApp </h3>
            <p className="text-gray-400 mb-4"> 
                Developed a full-stack AI-driven web application for automated meal tracking, macro analytics, and personalized dietary feedback.  
                Built dynamic frontend dashboards with React, Vite, and Tailwind CSS, featuring real-time data visualization using Chart libraries.  
                Implemented secure backend REST APIs using FastAPI, PostgreSQL, and JWT authentication.  
                Integrated Keras deep learning models for instant food photo recognition and automated nutrition calculation. 
            </p>
       

        </div>
        <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">SwasthyaMitra App</h3>
            <p className="text-gray-400 mb-4"> 
                Designed modules for healthcare assistance and patient record management. 
                Integrated MongoDB for storing patient and service provider data. 
                Focused on data accuracy and application reliability through validations. 
            </p>
       

        </div>
        </div>
        </div>
        </RevealOnScroll>
    </section>
}


export default Project;