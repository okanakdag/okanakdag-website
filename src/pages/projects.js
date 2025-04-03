import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projectsData";

export default function Projects() {
    return (
        <div className="min-h-screen flex flex-col ">
            <Navbar />

            <main className="w-full flex-grow max-w-3xl mx-auto px-4 py-12 space-y-6">
                <h1 className="text-2xl font-semibold text-white mb-8">All Projects</h1>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </main>

            <Footer />
        </div>
    );
}