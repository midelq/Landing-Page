import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-2xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent uppercase tracking-wider">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
