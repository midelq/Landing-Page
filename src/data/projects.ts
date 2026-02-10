export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    techStack: string[];
    image: string;
    link: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Trello Clone",
        subtitle: "FULL-STACK TASK MANAGEMENT APP",
        description:
            "A modern task management application with drag-and-drop functionality, authentication, and real-time updates. Built with React frontend and Node.js/Express backend.",
        techStack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Drizzle ORM",
            "JWT",
            "Zod",
        ],
        image: "/projects/trello-clone.png",
        link: "https://trello-clone-fe-nine.vercel.app/",
    },
];
