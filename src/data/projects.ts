export interface Project {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    techStack: string[];
    images: string[];
    link: string;
    githubUrls?: { label: string; url: string }[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Trello Clone",
        subtitle: "FULL-STACK TASK MANAGEMENT APP",
        description:
            "A modern task management app with a fully functional backend and database. Supports real-time updates for users, boards, lists, and cards.",
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
        images: [
            "/projects/trello-clone/trello-clone.png",
            "/projects/trello-clone/trello-clone-2.png",
            "/projects/trello-clone/trello-clone-3.png",
            "/projects/trello-clone/trello-clone-4.png",
        ],
        link: "https://trello-clone-fe-nine.vercel.app/",
        githubUrls: [
            { label: "Frontend", url: "https://github.com/midelq/Trello-clone-FE" },
            { label: "Backend", url: "https://github.com/midelq/Trello-clone-BE" },
        ],
    },
    {
        id: 2,
        title: "Med-Corp Reporting System",
        subtitle: "MEDICAL REPORTING PLATFORM",
        description:
            "A monorepo-based medical reporting system with role-based access control. Enables report creation, assignment, and management with certificate generation.",
        techStack: [
            "React",
            "TypeScript",
            "AdonisJS",
            "PostgreSQL",
            "Docker",
            "Vite",
            "pnpm",
        ],
        images: [
            "/projects/med-corp/med-corp-1.png",
            "/projects/med-corp/med-corp-2.png",
            "/projects/med-corp/med-corp-3.png",
            "/projects/med-corp/med-corp-4.png",
            "/projects/med-corp/med-corp-5.png",
        ],
        link: "https://front-production-6a0e.up.railway.app/users",
        githubUrls: [],
    },
];
