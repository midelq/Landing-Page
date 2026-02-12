export const personalInfo = {
    name: "Orest Prystaiko",
    title: "Building modern web applications",
    titleHighlight: "& learning",
    description:
        "I'm Orest Prystaiko, a 19-year-old Junior Full-Stack Developer from Lviv, Ukraine, passionate about creating robust software. I build scalable apps with React, Node.js, and modern databases. Always learning, improving, and sharing my journey along the way.",
    email: "pryst.oresta@gmail.com",
    cv: "/cv.pdf",
    socials: {
        github: "https://github.com/midelq",
        linkedin: "https://linkedin.com/in/yourprofile", // Placeholder if you have one
        twitter: "https://x.com/midelqh",
        telegram: "https://t.me/midelq",
    },
} as const;

export const techStack = [
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Docker", icon: "docker" },
] as const;

export type TechItem = (typeof techStack)[number];
