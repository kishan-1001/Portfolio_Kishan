import { useState } from 'react';
import { Award, ExternalLink, Download, Trophy, X, GraduationCap } from 'lucide-react';

const achievements = [
    {
        id: 1,
        title: "Toycathon 2025",
        organization: "Government of India",
        date: "2025",
        description: "National level innovation challenge focused on developing toys and games based on Indian civilization, history, culture, mythology, and ethos. Selected among top finalists for innovative game design.",
        category: "Innovation",
        icon: Trophy,
        image: "https://images.unsplash.com/photo-1635350646196-857e4e832596?auto=format&fit=crop&q=80&w=1000",
        links: {
            view: "https://drive.google.com/file/d/1fgJMlYGYBCD_qurbEOM-ZplDLzFLcTwd/preview",
            download: "https://drive.google.com/uc?export=download&id=1fgJMlYGYBCD_qurbEOM-ZplDLzFLcTwd"
        }
    },
    {
        id: 2,
        title: "Hackathon 5.0",
        organization: "Technical Event",
        date: "2024",
        description: "Secured top position in the 24-hour hackathon solving complex real-world problems with innovative software solutions. Demonstrated rapid prototyping and effective team collaboration.",
        category: "Competition",
        icon: Award,
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000",
        links: {
            view: "https://drive.google.com/file/d/1Z47om_Z6ZrizWDRPykaHKo3eaPyw1LGo/preview",
            download: "https://drive.google.com/uc?export=download&id=1Z47om_Z6ZrizWDRPykaHKo3eaPyw1LGo"
        }
    },
    {
        id: 3,
        title: "DXC Progressive Mind Scholarship",
        organization: "DXC Technology",
        date: "2023",
        description: "Awarded the prestigious DXC Progressive Mind Scholarship for demonstrating exceptional academic performance and technical prowess. This scholarship recognizes students with a forward-thinking mindset and a strong commitment to innovation in technology. The selection process involved rigorous evaluation of technical skills, problem-solving abilities, and future potential in the IT industry.",
        category: "Scholarship",
        icon: GraduationCap,
        image: null,
        links: null // No certificate for this one
    }
];

const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="achievements" className="py-24 bg-[#050505] text-white relative overflow-hidden border-t border-white/5">
            {/* Classic Background Texture - Subtle Grid & Radial Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20 text-center">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-yellow-500 uppercase mb-3">
                        Excellence & Recognition
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6">
                        Honors & Awards
                    </h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line - Brighter for visibility */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/30 md:-translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>

                    <div className="space-y-16">
                        {achievements.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={item.id}
                                    className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => setActiveIndex(null)}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[20px] md:left-1/2 top-0 w-10 h-10 -translate-x-1/2 z-20 flex items-center justify-center">
                                        <div className={`w-3 h-3 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-yellow-400 scale-150 shadow-[0_0_20px_rgba(250,204,21,0.5)]' : 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]'}`}></div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="md:w-1/2 md:px-12 ml-12 md:ml-0">
                                        <div className="group relative">
                                            {/* Date Badge */}
                                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-yellow-500 mb-4 transition-colors ${activeIndex === index ? 'border-yellow-500/30' : ''}`}>
                                                <CalendarIcon />
                                                {item.date}
                                            </div>

                                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                                                {item.title}
                                            </h3>

                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                                <item.icon size={16} className={`${activeIndex === index ? 'text-yellow-500' : 'text-gray-500'} transition-colors`} />
                                                <span>{item.organization}</span>
                                            </div>

                                            <p className="text-gray-300 leading-relaxed mb-6 font-light">
                                                {item.description}
                                            </p>

                                            {/* Action Buttons (Only if links exist) */}
                                            {item.links && (
                                                <div className="flex flex-wrap gap-4">
                                                    <button
                                                        onClick={() => setSelectedAchievement(item)}
                                                        className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-all hover:text-yellow-400 hover:border-yellow-500/30 active:scale-95"
                                                    >
                                                        <ExternalLink size={16} />
                                                        View Certificate
                                                    </button>
                                                    <a
                                                        href={item.links.download}
                                                        className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm font-medium transition-all hover:text-green-400 hover:border-green-500/30 active:scale-95"
                                                    >
                                                        <Download size={16} />
                                                        Download
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Empty Side for Layout Balance */}
                                    <div className="md:w-1/2"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Modal for viewing certificate */}
            {selectedAchievement && selectedAchievement.links && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300" onClick={() => setSelectedAchievement(null)}>
                    <div
                        className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col relative shadow-2xl animate-in fade-in zoom-in-95 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-black/50 backdrop-blur-xl absolute top-0 left-0 right-0 z-10 rounded-t-2xl">
                            <h3 className="text-lg font-bold text-white flex items-center gap-3">
                                <Award className="text-yellow-500" size={20} />
                                {selectedAchievement.title}
                            </h3>
                            <button
                                onClick={() => setSelectedAchievement(null)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-1 bg-black w-full h-full pt-16 rounded-2xl overflow-hidden">
                            <iframe
                                src={selectedAchievement.links.view}
                                title={selectedAchievement.title}
                                className="w-full h-full border-0 bg-[#0a0a0a]"
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

// Small Helper Component for Icon
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
);

export default Achievements;
