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
        <div className="group block rounded-xl overflow-hidden bg-[#161616] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2">
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
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </>
                )}

                {/* Dots */}
                {hasMultipleImages && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
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
            <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-[10px] uppercase tracking-wider text-gray-500">
                            {project.subtitle}
                        </span>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>

                    <div className="flex gap-2">
                        {/* GitHub Links */}
                        {project.githubUrls?.length === 0 ? (
                            <div className="h-8 px-3 flex items-center justify-center gap-2 border border-gray-800 rounded-lg text-gray-500 text-xs font-medium cursor-not-allowed select-none bg-white/5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                Private Repo
                            </div>
                        ) : (
                            project.githubUrls?.map((gh) => (
                                <a
                                    key={gh.url}
                                    href={gh.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-8 px-3 flex items-center justify-center gap-2 border border-gray-600 rounded-lg transition-all duration-200 hover:bg-white hover:text-black hover:border-white text-xs font-medium"
                                    title={`View ${gh.label} on GitHub`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                    </svg>
                                    {gh.label}
                                </a>
                            ))
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded-lg transition-all duration-200 hover:bg-white hover:text-black hover:border-white"
                            title="View Live Demo"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
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
        </div>
    );
}
