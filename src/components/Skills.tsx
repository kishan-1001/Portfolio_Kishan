import { useEffect, useRef, useState } from 'react';

const languages = [
    { name: 'Hindi', percentage: 100, level: 'Native Speaker' },
    { name: 'English', percentage: 95, level: 'Professional Fluency' },
    { name: 'Marathi', percentage: 87, level: 'Native Speaker' },
    { name: 'Gujarati', percentage: 89, level: 'Native Speaker' },
];

const technicalSkills = [
    { name: 'Web Development', percentage: 95 },
    { name: 'Python', percentage: 90 },
    { name: 'C++ / OOPs', percentage: 85 },
    { name: 'DSA', percentage: 80 },
    { name: 'Data Science', percentage: 75 },
    { name: 'OS / DBMS / CN', percentage: 85 },
];

const CircularProgress = ({ percentage, label, subLabel }: { percentage: number; label: string; subLabel: string }) => {
    const [progress, setProgress] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setProgress(percentage), 500);
            return () => clearTimeout(timer);
        }
    }, [isVisible, percentage]);

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 group">
            <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        className="stroke-slate-800 fill-none"
                        strokeWidth="8"
                    />
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        className="stroke-white fill-none transition-all duration-1000 ease-out"
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                    {progress}%
                </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{label}</h3>
            <p className="text-sm text-slate-400">{subLabel}</p>
        </div>
    );
};

const ProgressBar = ({ percentage, label }: { percentage: number; label: string }) => {
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => setWidth(percentage), 200);
            return () => clearTimeout(timer);
        }
    }, [isVisible, percentage]);

    return (
        <div ref={ref} className="mb-8">
            <div className="flex justify-between items-center mb-2">
                <span className="text-base font-medium text-white tracking-wide">{label}</span>
                <span className="text-sm font-medium text-slate-400">{width}%</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div
                    className="bg-white h-2.5 rounded-full transition-all duration-1000 ease-out relative group"
                    style={{ width: `${width}%` }}
                >
                    <div className="absolute right-0 top-0 h-full w-full animate-pulse bg-white/30"></div>
                </div>
            </div>
        </div>
    );
};

// Hook to check visibility
function useOnScreen(ref: React.RefObject<HTMLElement | null>) {
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref]);
    return isIntersecting;
}

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-black relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">
                        Expertise
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-white">
                        Languages & Technical Skills
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Languages Column */}
                    <div>
                        <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded">01</span>
                            Languages
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                            {languages.map((lang) => (
                                <CircularProgress
                                    key={lang.name}
                                    percentage={lang.percentage}
                                    label={lang.name}
                                    subLabel={lang.level}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Technical Skills Column */}
                    <div>
                        <h4 className="flex items-center gap-3 text-xl font-bold text-white mb-8 border-b border-gray-800 pb-4">
                            <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded">02</span>
                            Technical Proficiency
                        </h4>
                        <div className="space-y-2">
                            {technicalSkills.map((skill) => (
                                <ProgressBar
                                    key={skill.name}
                                    percentage={skill.percentage}
                                    label={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
