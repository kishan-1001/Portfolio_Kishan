import { useEffect, useRef } from 'react';

const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const elements = entry.target.querySelectorAll('.reveal-text');
                        elements.forEach((el) => {
                            el.classList.add('active');
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full blur-3xl opacity-30 -z-10"></div>

            <div className="container mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="reveal-text text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-4">
                        About Me
                    </h2>
                    <div className="reveal-text delay-100 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Paragraph 1 */}
                    <div className="reveal-text delay-200">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            I'm <span className="font-bold text-gray-900">Kishan Roy</span>, a passionate software developer with a keen interest in building <span className="text-blue-600 font-semibold">scalable applications</span> and exploring the frontiers of <span className="text-purple-600 font-semibold">artificial intelligence and machine learning</span>.
                        </p>
                    </div>

                    {/* Paragraph 2 */}
                    <div className="reveal-text delay-300">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            My journey in tech is driven by <span className="text-purple-600 font-semibold">curiosity</span> and a desire to solve <span className="font-semibold text-gray-900">real-world problems</span> through code. I believe in writing clean, maintainable software that not only works but also <span className="text-blue-600 font-semibold">stands the test of time</span>.
                        </p>
                    </div>

                    {/* Paragraph 3 */}
                    <div className="reveal-text delay-400">
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Currently, I'm diving deep into <span className="text-pink-600 font-semibold">AI/ML technologies</span>, experimenting with <span className="font-semibold text-gray-900">neural networks</span>, and building <span className="text-purple-600 font-semibold">intelligent systems</span> that can learn and adapt.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <div className="reveal-text delay-500 pt-6 text-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                        >
                            <span>Let's Connect</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
