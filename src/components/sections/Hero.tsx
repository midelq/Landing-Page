import Button from "../ui/Button";
import { personalInfo } from "../../data/personal";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20"
        >
            <div className="max-w-2xl mx-auto px-6 text-center">
                {/* Avatar */}
                <div className="w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden">
                    <img
                        src="/avatar.png"
                        alt={personalInfo.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.parentElement!.innerHTML = `
                  <span class="text-6xl flex items-center justify-center h-full bg-[#1a1a1a]">👨‍💻</span>
                `;
                        }}
                    />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {personalInfo.title}{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {personalInfo.titleHighlight}
                    </span>
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                    {personalInfo.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    <Button variant="outline" href="#contact">
                        Get In Touch
                    </Button>
                    <Button variant="primary" href={personalInfo.cv}>
                        Download CV
                    </Button>
                </div>


            </div>
        </section>
    );
}
