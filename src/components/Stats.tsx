import { useState, useEffect } from 'react';
import { Github, Code, ExternalLink, TrendingUp, Award, Calendar, Activity } from 'lucide-react';

const stats = {
    leetcode: {
        link: "https://leetcode.com/u/kishan_roy_1001/"
    },
    github: {
        username: "kishan-1001",
        year: "2025",
        contributions: 114,
        streak: 0,
        link: "https://github.com/kishan-1001"
    },
    platforms: [
        { name: "CodeChef", icon: Code, link: "https://www.codechef.com/users/army_tale_76", color: "text-orange-500" },
        { name: "HackerRank", icon: Award, link: "https://www.hackerrank.com/profile/roykishan532", color: "text-green-500" },
    ]
};

const Stats = () => {
    const [leetCodeData, setLeetCodeData] = useState({
        totalSolved: 65, // Default/Fallback
        easySolved: 53,
        mediumSolved: 11,
        hardSolved: 1,
        ranking: 0,
    });

    // State for GitHub chart toggle
    const [githubChartType, setGithubChartType] = useState<'heatmap' | 'graph'>('graph');

    // LeetCode Username
    const username = "kishan_roy_1001";

    useEffect(() => {
        const fetchLeetCodeStats = async () => {
            try {
                const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
                const data = await response.json();
                if (data.status === "success") {
                    setLeetCodeData({
                        totalSolved: data.totalSolved,
                        easySolved: data.easySolved,
                        mediumSolved: data.mediumSolved,
                        hardSolved: data.hardSolved,
                        ranking: data.ranking,
                    });
                }
            } catch (error) {
                console.error("Failed to fetch LeetCode stats:", error);
            }
        };

        fetchLeetCodeStats();
    }, []);

    return (
        <section id="stats" className="py-20 bg-black text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-12">
                    <h2 className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-2">
                        Performance
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-white">
                        Coding Activity
                    </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* GitHub Stats Card (Span 8) */}
                    <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 shadow-xl group flex flex-col">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-3">
                                <Github className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold">GitHub Contributions</h3>
                            </div>

                            {/* Toggle Switch */}
                            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                                <button
                                    onClick={() => setGithubChartType('heatmap')}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${githubChartType === 'heatmap'
                                        ? 'bg-white/10 text-white shadow-sm'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <Calendar size={14} />
                                    Heatmap
                                </button>
                                <button
                                    onClick={() => setGithubChartType('graph')}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${githubChartType === 'graph'
                                        ? 'bg-white/10 text-white shadow-sm'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <Activity size={14} />
                                    Graph
                                </button>
                            </div>
                        </div>

                        <a
                            href={stats.github.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full overflow-x-auto pb-2 flex justify-center flex-grow items-center cursor-pointer min-h-[160px]"
                        >
                            {githubChartType === 'heatmap' ? (
                                <img
                                    src={`https://ghchart.rshah.org/22c55e/${stats.github.username}`}
                                    alt={`${stats.github.username}'s Github Heatmap`}
                                    className="w-full min-w-[600px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300 invert-[.92] hue-rotate-[180deg] brightness-110 contrast-100"
                                    style={{ filter: "invert(0.92) hue-rotate(170deg) brightness(1.1) contrast(1.1)" }}
                                />
                            ) : (
                                <img
                                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${stats.github.username}&bg_color=0a0a0a&color=22c55e&line=22c55e&point=ffffff&area=true&hide_border=true`}
                                    alt={`${stats.github.username}'s Github Graph`}
                                    className="w-full min-w-[600px] h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            )}
                        </a>

                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                            <div className="text-xs text-gray-500">
                                {githubChartType === 'heatmap' ? 'Calendar view (Dark Mode Optimized)' : 'Activity over time'}
                            </div>
                            <div className="text-sm font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                <span className="text-blue-400">{stats.github.year}: </span>
                                <span className="text-white">{stats.github.contributions}</span>
                            </div>
                        </div>
                    </div>

                    {/* Competitive Platforms Card (Span 4) */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300 shadow-xl flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-6">
                                <TrendingUp className="w-5 h-5 text-purple-500" />
                                <h3 className="font-bold text-white">Competitive Profiles</h3>
                            </div>

                            <div className="space-y-4">
                                {stats.platforms.map((platform, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group/item">
                                        <div className="flex items-center gap-3">
                                            <platform.icon className={`w-5 h-5 ${platform.color}`} />
                                            <span className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">{platform.name}</span>
                                        </div>
                                        <a href={platform.link} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                            View <ExternalLink size={12} />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* LeetCode Full Width Card (Span 12) */}
                    <a
                        href={`https://leetcode.com/u/${username}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:col-span-12 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300 shadow-xl relative overflow-hidden group block cursor-pointer"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            {/* Left: Chart Image (Span 8) */}
                            <div className="lg:col-span-8 flex justify-center lg:justify-start">
                                <img
                                    src={`https://leetcard.jacoblin.cool/${username}?theme=dark&font=ABeeZee&ext=heatmap`}
                                    alt="LeetCode Stats Chart"
                                    className="rounded-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300 w-full max-w-[800px] object-contain"
                                />
                            </div>

                            {/* Right: Stats Text (Span 4) */}
                            <div className="lg:col-span-4 pl-4 border-l border-white/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Code className="w-6 h-6 text-yellow-500" />
                                    <h3 className="text-xl font-bold text-white">LeetCode Stats</h3>
                                </div>
                                <div className="mb-6">
                                    <div className="text-5xl font-bold text-white mb-1">{leetCodeData.totalSolved}</div>
                                    <div className="text-sm text-gray-400 mb-4">Problems Solved</div>

                                    {/* Global Ranking Display */}
                                    <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                                        <span className="text-xs text-yellow-500 font-bold uppercase tracking-wider block mb-0.5">Global Ranking</span>
                                        <span className="text-lg font-bold text-white">{leetCodeData.ranking > 0 ? leetCodeData.ranking.toLocaleString() : 'Loading...'}</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs font-medium text-gray-400 mb-1">
                                        <span>Easy: <span className="text-white">{leetCodeData.easySolved}</span></span>
                                        <span>Med: <span className="text-white">{leetCodeData.mediumSolved}</span></span>
                                        <span>Hard: <span className="text-white">{leetCodeData.hardSolved}</span></span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-800 rounded-full flex overflow-hidden">
                                        {leetCodeData.totalSolved > 0 && (
                                            <>
                                                <div style={{ width: `${(leetCodeData.easySolved / leetCodeData.totalSolved) * 100}%` }} className="h-full bg-green-500"></div>
                                                <div style={{ width: `${(leetCodeData.mediumSolved / leetCodeData.totalSolved) * 100}%` }} className="h-full bg-yellow-500"></div>
                                                <div style={{ width: `${(leetCodeData.hardSolved / leetCodeData.totalSolved) * 100}%` }} className="h-full bg-red-500"></div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Stats;
