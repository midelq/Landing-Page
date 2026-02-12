import { TechIcons, type TechIconName } from "../ui/TechIcons";

interface SkillCategory {
    name: string;
    items: {
        name: string;
        icon?: TechIconName;
    }[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Languages & Frameworks",
        items: [
            { name: "JavaScript", icon: "javascript" },
            { name: "TypeScript", icon: "typescript" },
            { name: "React", icon: "react" },
            { name: "Node.js", icon: "nodejs" },
            { name: "AdonisJS", icon: "adonis" },
        ],
    },
    {
        name: "Back-end & Databases",
        items: [
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MySQL", icon: "mysql" },

            { name: "Drizzle ORM", icon: "drizzle" },
            { name: "Lucid" },
        ],
    },
    {
        name: "Testing",
        items: [
            { name: "Playwright (E2E)", icon: "playwright" },
            { name: "Japa" },
            { name: "Feature & Integration Testing" },
        ],
    },
    {
        name: "Cloud & DevOps",
        items: [
            { name: "Docker", icon: "docker" },
            { name: "Docker Compose" },
        ],
    },
    {
        name: "Styling",
        items: [
            { name: "CSS3", icon: "css3" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "Material UI" },
        ],
    },
    {
        name: "Tooling & Infra",
        items: [

            { name: "GitHub", icon: "github" },

            { name: "Prettier", icon: "prettier" },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-10 relative overflow-hidden bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-6 relative">
                <h2 className="text-2xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider">
                    Skills & Technologies
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.name} className="bg-[#161616] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                {category.name}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all group"
                                    >
                                        {skill.icon && TechIcons[skill.icon] ? (
                                            <div className="w-5 h-5 flex-shrink-0">
                                                {TechIcons[skill.icon]}
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 flex items-center justify-center text-gray-500 group-hover:text-purple-400 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                                    <polyline points="16 18 22 12 16 6" />
                                                    <polyline points="8 6 2 12 8 18" />
                                                </svg>
                                            </div>
                                        )}
                                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
