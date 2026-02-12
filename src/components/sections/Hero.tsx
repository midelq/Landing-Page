import { motion } from "framer-motion";
import { personalInfo } from "../../data/personal";

export default function Hero() {
    return (
        <section
            id="home"
            className="pt-20 pb-10 md:pt-32 md:pb-16 relative"
        >
            <div className="max-w-2xl mx-auto px-6 text-center">
                {/* Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden"
                >
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
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                >
                    {personalInfo.title}{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                        {personalInfo.titleHighlight}
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto"
                >
                    {personalInfo.description}
                </motion.p>




            </div>
        </section>
    );
}
