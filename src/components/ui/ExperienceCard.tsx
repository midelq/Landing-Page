import type { ExperienceItem } from "../../data/experience";

interface ExperienceCardProps {
    experience: ExperienceItem;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute top-2 -left-[41px] w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10" />

            {/* Content */}
            <div className="bg-[#161616] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors group">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                            {experience.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span className="font-medium text-white">
                                {experience.company}
                            </span>
                            <span>•</span>
                            <span>{experience.period}</span>
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2.5 py-1 bg-white/5 rounded-full text-gray-400 border border-white/5"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
