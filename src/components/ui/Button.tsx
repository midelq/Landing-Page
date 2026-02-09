interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "outline";
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    className = "",
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 hover:-translate-y-0.5";

    const variants = {
        primary: "bg-white text-black hover:bg-gray-200",
        outline: "border border-gray-500 text-white hover:border-white",
    };

    const classes = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} onClick={onClick}>
            {children}
        </button>
    );
}
