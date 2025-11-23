import RevealOnScroll from "../RevealOnScroll";

function Project(){
    return <section id="projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">Electricity Bill Management System </h3>
            <p className="text-gray-400 mb-4"> 
                Designed and built a full-stack web application to calculate and manage electricity billing cycles.
                Developed a Python-based REST API to handle all business logic, data processing, and communication with the
                database.
                Built a responsive React frontend allowing administrators to perform CRUD (Create, Read, Update, Delete)
                operations on customer records and generate new bills.
                Managed all customer and billing data using MySQL, ensuring data integrity through robust backend validation.
            </p>
       

        </div>
        <div className="p-6 rounded-xl border boder-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">SwasthyaMitra App</h3>
            <p className="text-gray-400 mb-4"> 
                Developed a client-server healthcare application, designing modules for patient record management and service provider lookups.
                Utilized MongoDB as the backend database to store and manage all patient and provider data, demonstrating
                flexibility with NoSQL databases.
                Engineered the data flow between the Android client and the backend, ensuring high reliability and data accuracy
                through strict validations.
            </p>
       

        </div>
        </div>
        </div>
        </RevealOnScroll>
    </section>
}


export default Project;