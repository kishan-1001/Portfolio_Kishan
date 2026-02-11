import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const expertiseData = [
    {
        title: '15+ Technologies',
        description: 'Mastering the modern tech stack to build robust, scalable applications.',
        items: [
            'React.js & Next.js',
            'Node.js & Express',
            'Python & TensorFlow',
            'PostgreSQL & MongoDB',
            'AWS & Docker'
        ],
        theme: 'light'
    },
    {
        title: '10+ Projects',
        description: 'From concept to launch, delivering high-impact solutions across various domains.',
        items: [
            'E-commerce Platforms',
            'AI-Powered SaaS',
            'Real-time Chat Apps',
            'Portfolio Websites',
            'Task Management Systems'
        ],
        theme: 'alt'
    },
    {
        title: '3+ Years Experience',
        description: 'A consistent track record of writing clean, maintainable, and efficient code.',
        items: [
            'Frontend Architecture',
            'Backend Optimization',
            'Database Design',
            'API Security',
            'CI/CD Pipelines'
        ],
        theme: 'light'
    },
    {
        title: '98% On-Time Delivery',
        description: 'Commitment to deadlines and excellence in every project milestone.',
        items: [
            'Agile Development',
            'Sprint Planning',
            'Rapid Prototyping',
            'Technical Documentation',
            'Quality Assurance'
        ],
        theme: 'alt'
    },
    {
        title: 'Continuous Innovation',
        description: 'Staying ahead of the curve with cutting-edge technological advancements.',
        items: [
            'Generative AI',
            'Large Language Models',
            'System Architecture',
            'Performance Tuning',
            'User Experience (UX)'
        ],
        theme: 'light'
    }
];

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = document.querySelectorAll('.fade-up');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 bg-white relative"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Column - Sticky Bio */}
                    <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit self-start">
                        <div className="mb-12">
                            <h2 className="fade-up opacity-0 translate-y-10 transition-all duration-700 ease-out text-sm font-bold tracking-[0.2em] text-gray-500 uppercase mb-4">
                                About Me
                            </h2>
                            <h3 className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-100 ease-out text-4xl md:text-5xl font-serif font-medium text-gray-900 leading-[1.2] mb-6">
                                Transforming Ideas into <br />
                                <span className="italic text-gray-800">
                                    Digital Reality
                                </span>
                            </h3>
                            <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-200 ease-out w-20 h-1 bg-gray-900"></div>
                        </div>

                        <div className="space-y-8 text-lg text-gray-600 leading-relaxed mb-12 font-light">
                            <p className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-300 ease-out">
                                I'm <span className="font-semibold text-gray-900">Kishan Roy</span>, a passionate software developer with a keen interest in building scalable applications and exploring the frontiers of artificial intelligence and machine learning.
                            </p>
                            <p className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-400 ease-out">
                                My journey in tech is driven by curiosity and a desire to solve real-world problems through code. I believe in writing <span className="font-semibold text-gray-900">clean, maintainable software</span> that not only works but also stands the test of time.
                            </p>
                            <p className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-500 ease-out">
                                Currently, I'm diving deep into <span className="font-semibold text-gray-900">AI/ML technologies</span>, experimenting with neural networks, and building intelligent systems that can learn and adapt.
                            </p>
                        </div>

                        <div className="fade-up opacity-0 translate-y-10 transition-all duration-700 delay-500 ease-out">
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm tracking-widest uppercase font-medium hover:bg-gray-800 transition-colors duration-300 group"
                            >
                                Let's Connect
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Stacking Cards */}
                    <div className="lg:w-1/2 flex flex-col pb-24">
                        {expertiseData.map((item, index) => (
                            <div
                                key={index}
                                className={`sticky top-28 p-10 rounded-3xl border transition-all duration-500 hover:shadow-2xl group ${index % 2 === 0
                                        ? 'bg-black border-gray-800 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)]' // Dark Theme for Even (0, 2...)
                                        : 'bg-white border-gray-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]' // Light Theme for Odd (1, 3...)
                                    }`}
                                style={{
                                    marginBottom: '4rem',
                                    zIndex: 10 + index
                                }}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className={`text-3xl font-serif ${index % 2 === 0 ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {item.title}
                                    </h3>
                                    <ArrowRight className={`w-6 h-6 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 ${index % 2 === 0 ? 'text-gray-400' : 'text-gray-500'
                                        }`} />
                                </div>

                                <p className={`mb-8 leading-relaxed font-light text-lg ${index % 2 === 0 ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    {item.description}
                                </p>
                                <ul className="space-y-4">
                                    {item.items.map((subItem, subIndex) => (
                                        <li key={subIndex} className="flex items-center gap-3">
                                            <div className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-white' : 'bg-gray-900'
                                                }`}></div>
                                            <span className={`text-sm font-medium tracking-wide ${index % 2 === 0 ? 'text-gray-200' : 'text-gray-700'
                                                }`}>
                                                {subItem}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
