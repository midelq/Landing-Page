import { useState } from "react";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [currentImage, setCurrentImage] = useState(0);
    const hasMultipleImages = project.images.length > 1;

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImage(
            (prev) => (prev - 1 + project.images.length) % project.images.length
        );
    };

    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-xl overflow-hidden bg-[#161616] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2"
        >
            {/* Image Carousel */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.images[currentImage]}
                    alt={`${project.title} - ${currentImage + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Navigation Arrows */}
                {hasMultipleImages && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Dots */}
                {hasMultipleImages && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setCurrentImage(i);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentImage
                                        ? "bg-white w-4"
                                        : "bg-white/40 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                )}
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

                    <div className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-lg transition-all duration-200 group-hover:bg-white group-hover:text-black group-hover:border-white">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </div>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                </p>

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
