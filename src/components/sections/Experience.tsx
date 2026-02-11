import { experience } from "../../data/experience";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-3xl mx-auto px-6 relative">
                <h2 className="text-2xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent uppercase tracking-wider">
                    Experience
                </h2>

                <div className="space-y-12 border-l border-white/10 pl-8 ml-4 md:ml-0">
                    {experience.map((item) => (
                        <ExperienceCard key={item.id} experience={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
