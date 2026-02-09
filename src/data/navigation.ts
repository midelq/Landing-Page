export const navLinks = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
