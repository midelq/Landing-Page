import { useState } from "react";
import { navLinks } from "../../data/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 px-4 pt-4">
            <div className="bg-[#121212]/80 backdrop-blur-md rounded-2xl border border-white/5 px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transform hover:scale-105 transition-transform"
                    style={{ fontFamily: "'Dancing Script', cursive" }} // Fallback if font not loaded, stylistic choice
                >
                    midelq
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors relative group"
                        >
                            {link.label}
                            {/* Hover Underline Effect */}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button - Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-gray-300 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2 bg-purple-500" : ""}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-300 transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-gray-300 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2 bg-purple-500" : ""}`}
                    />
                </button>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`
                        absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-xl bg-[#161616] border border-white/10 shadow-xl overflow-hidden transition-all duration-300 origin-top
                        ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
                    `}
                >
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={closeMenu}
                                className="text-gray-400 hover:text-purple-400 hover:bg-white/5 px-4 py-2 rounded-lg transition-colors text-center font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
