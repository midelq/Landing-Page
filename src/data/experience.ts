export interface ExperienceItem {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    technologies: string[];
}

export const experience: ExperienceItem[] = [
    {
        id: 1,
        company: "Med-Corp",
        role: "Full Stack Developer",
        period: "2025 - Present",
        description:
            "Developing and maintaining a comprehensive medical reporting system. Focusing primarily on backend architecture using AdonisJS and PostgreSQL, while also handling frontend tasks with React and TypeScript.",
        technologies: [
            "AdonisJS",
            "PostgreSQL",
            "React",
            "TypeScript",
            "Docker",
            "Microservices",
        ],
    },
];
