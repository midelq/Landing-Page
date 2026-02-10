import type { Project } from "../../data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden bg-[#161616] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2"
        >
            {/* Project Image */}
            <div className="aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">
                            {project.subtitle}
                        </span>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>

                    {/* Arrow */}
                    <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-lg transition-all duration-200 group-hover:bg-white group-hover:text-black group-hover:border-white">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-[11px] px-2.5 py-1 bg-white/5 rounded-full text-gray-400"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}
