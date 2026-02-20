import { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight, Layers, Layout, Database, BookOpen } from 'lucide-react';

const projects = [
    {
        title: "CodeHive",
        subtitle: "AI-Powered Competitive Coding Platform",
        description: "A comprehensive platform revolutionizing coding education with real-time code execution, AI-driven feedback, and collaborative learning tools.",
        tags: ["React", "Node.js", "Express", "MongoDB", "AI Integration", "Socket.io"],
        links: {
            github: "https://github.com/kishan-1001/CodeHive",
            live: "https://mycodehive.in"
        },
        image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "WhatsApp Chat Analyzer",
        subtitle: "Data Visualization & Analytics Tool",
        description: "An intelligent analytics tool that transforms WhatsApp chat exports into insightful visualizations, revealing conversation patterns, activity trends, and engagement metrics.",
        tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Data Analysis", "NLP"],
        links: {
            github: "https://github.com/kishan-1001/WhatsApp-Chat-Analyzer",
            live: "#"
        },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Toycathon 2025",
        subtitle: "Interactive Educational Game",
        description: "A creative game developed for Toycathon 2025, focusing on Indian culture and mythology. Features engaging gameplay mechanics designed to educate and entertain.",
        tags: ["Game Development", "Unity", "C#", "UI/UX", "Educational Tech"],
        links: {
            github: "https://github.com/kishan-1001/toycathon_2025",
            live: "#"
        },
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "A-Z Character Recognition",
        subtitle: "Deep Learning Model",
        description: "A robust handwritten character recognition system using Convolutional Neural Networks to accurately identify A-Z characters with high precision and real-time inference.",
        tags: ["Python", "TensorFlow", "Keras", "CNN", "Computer Vision", "Machine Learning"],
        links: {
            github: "https://github.com/kishan-1001/A-Z-Handwritten-Character-Recognition-Model",
            live: "#"
        },
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Pineapple Memories",
        subtitle: "Digital Memory Gallery",
        description: "A secure and elegant space to preserve, organize, and share your most cherished memories with intuitive gallery features and seamless user experience.",
        tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion", "Cloudinary"],
        links: {
            github: "https://github.com/kishan-1001/Pineapple-Memories",
            live: "#" // Placeholder as requested
        },
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000"
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <div className="flex flex-col lg:flex-row bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl border border-white/10 h-full max-w-6xl mx-auto">
        {/* Project Image Section */}
        <div className="lg:w-3/5 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 transition-opacity duration-300 group-hover:opacity-40"></div>
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 lg:h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay Tech Icons (Decorative) */}
            <div className="absolute bottom-6 left-6 z-20 flex gap-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-white">
                    <Layers size={20} />
                </div>
                <div className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-white">
                    <Layout size={20} />
                </div>
            </div>
        </div>

        {/* Project Details Section */}
        <div className="lg:w-2/5 p-6 lg:p-10 flex flex-col justify-center relative bg-[#0a0a0a]">
            <div className="absolute top-0 right-0 p-6 opacity-10">
                <Database size={100} className="text-white" />
            </div>

            <div className="relative z-10">
                <h3 className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2">
                    {project.subtitle}
                </h3>
                <h2 className="text-2xl lg:text-3xl font-serif text-white mb-4 leading-tight">
                    {project.title}
                </h2>
                <div className="w-12 h-1 bg-blue-500 mb-6"></div>

                <p className="text-gray-400 mb-6 leading-relaxed text-base">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    <a
                        href="#"
                        className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group text-sm"
                    >
                        <BookOpen size={18} />
                        <span className="border-b border-transparent group-hover:border-blue-400 transition-all">Read Case Study</span>
                    </a>
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white font-medium hover:text-blue-400 transition-colors group text-sm"
                    >
                        <Github size={18} />
                        <span className="border-b border-transparent group-hover:border-blue-400 transition-all">GitHub Repo</span>
                    </a>
                    {project.links.live !== '#' && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
                        >
                            <ExternalLink size={16} />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    </div>
);

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStartRef = { current: null as number | null };

    const nextProject = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
            setIsAnimating(false);
        }, 300); // Wait for exit animation
    };

    const prevProject = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
            setIsAnimating(false);
        }, 300); // Wait for exit animation
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartRef.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartRef.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartRef.current;
        touchStartRef.current = null;
        if (Math.abs(deltaX) < 50) return; // too small, ignore
        if (deltaX < 0) nextProject(); // swipe left → next
        else prevProject();            // swipe right → prev
    };

    return (
        <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-xs font-bold tracking-[0.2em] text-blue-600 uppercase mb-2">
                            Portfolio
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-medium text-gray-900">
                            Featured Projects
                        </h3>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevProject}
                            className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-sm group"
                            aria-label="Previous Project"
                        >
                            <ChevronLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextProject}
                            className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 shadow-sm group"
                            aria-label="Next Project"
                        >
                            <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div
                    className="relative"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div
                        className={`transition-all duration-500 ease-in-out transform ${isAnimating ? 'opacity-0 translate-y-4 scale-95' : 'opacity-100 translate-y-0 scale-100'
                            }`}
                    >
                        <ProjectCard project={projects[currentIndex]} />
                    </div>

                    {/* Pagination Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (index !== currentIndex && !isAnimating) {
                                        setIsAnimating(true);
                                        setTimeout(() => {
                                            setCurrentIndex(index);
                                            setIsAnimating(false);
                                        }, 300);
                                    }
                                }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-10 bg-gray-900' : 'w-3 bg-gray-300 hover:bg-gray-400'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
