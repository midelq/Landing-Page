export const personalInfo = {
    name: "John Doe",
    title: "I do code and make content",
    titleHighlight: "about it!",
    description:
        "I am a seasoned full-stack software engineer with over 8 years of professional experience, specializing in backend development. My expertise lies in crafting robust and scalable SaaS-based architectures on the Amazon AWS platform.",
    email: "abmcodehub@gmail.com",
    cv: "/cv.pdf",
} as const;

export const techStack = [
    { name: "JavaScript", icon: "javascript" },
    { name: "Next.js", icon: "nextjs" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "React", icon: "react" },
] as const;

export type TechItem = (typeof techStack)[number];
