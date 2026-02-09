import { useState } from "react";
import { navLinks } from "../../data/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="text-xl font-semibold italic text-white">
                    JD
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>

                {/* Navigation */}
                <nav
                    className={`
            md:flex md:items-center md:gap-8
            ${isMenuOpen
                            ? "absolute top-full left-0 right-0 bg-[#1a1a1a] flex flex-col py-4"
                            : "hidden md:flex"
                        }
          `}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={closeMenu}
                            className="text-sm text-gray-400 hover:text-white transition-colors px-6 py-2 md:px-0 md:py-0"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
