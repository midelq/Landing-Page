import { personalInfo } from "../../data/personal";

export default function Contact() {
    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-t from-purple-900/10 to-[#0a0a0a]">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/4" />

            <div className="max-w-4xl mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent uppercase tracking-wider mb-4">
                        Let's work together
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello

                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    {/* Email */}
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="group flex flex-col items-center justify-center p-8 bg-[#161616] border border-white/5 rounded-2xl hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-4 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium mb-1">Email</h3>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                            Send me a message
                        </span>
                    </a>

                    {/* Telegram */}
                    <a
                        href={personalInfo.socials.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-8 bg-[#161616] border border-white/5 rounded-2xl hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-4 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m22 2-7 20-4-9-9-4Z" />
                                <path d="M22 2 11 13" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium mb-1">Telegram</h3>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                            Quick chat
                        </span>
                    </a>

                    {/* X (Twitter) */}
                    <a
                        href={personalInfo.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center justify-center p-8 bg-[#161616] border border-white/5 rounded-2xl hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-full mb-4 group-hover:bg-green-500/20 group-hover:text-green-400 transition-colors">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                            </svg>
                        </div>
                        <h3 className="text-white font-medium mb-1">X (Twitter)</h3>
                        <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                            Follow for updates
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}
