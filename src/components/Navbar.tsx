
import React, { useState, useEffect, useRef } from 'react';
import { Menu, Eye, Download } from 'lucide-react';

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => {
    return (
        <a href={href} className="group relative flex flex-col items-center justify-center w-20 h-16">

            {/* Black Circle Background - scales up on hover */}
            <span className={`absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0 origin-center ${isScrolled ? 'bg-white' : 'bg-black'}`}></span>

            {/* Dot - visible on hover, floats above text */}
            <span className={`absolute top-4 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 z-20 ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>

            {/* Link Text */}
            <span className={`relative z-10 font-semibold text-sm transition-colors duration-300 pointer-events-none ${isScrolled ? 'text-white group-hover:text-black' : 'text-gray-700 group-hover:text-white'}`}>
                {children}
            </span>

            {/* Underline - visible on hover */}
            <span className={`absolute bottom-6 w-4 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-100 origin-center z-20 ${isScrolled ? 'bg-black' : 'bg-white'}`}></span>
        </a>
    );
};

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Stats', href: '#stats' },
        { label: 'Achievements', href: '#achievements' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleViewResume = () => {
        setIsResumeModalOpen(true);
        setIsMenuOpen(false);
    };

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Kishan_resume_parul.pdf';
        link.download = 'Kishan_Roy_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-1 w-full pointer-events-auto transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
            {/* Reduced height for a more compact navbar */}

            {/* Logo */}
            <div className={`text-2xl font-bold tracking-widest z-50 pointer-events-auto transition-colors duration-300 ${isScrolled ? 'text-white' : 'text-black'}`}>
                KiRi
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1">
                {/* space-x-1 because each link has its own large hit area (w-24) */}
                {navItems.map((item) => (
                    <NavLink key={item.label} href={item.href} isScrolled={isScrolled}>
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-6 z-50 relative" ref={menuRef}>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`p-3 border rounded-full transition-colors duration-300 pointer-events-auto ${isScrolled ? 'border-white text-white hover:bg-white hover:text-black' : 'border-gray-400 hover:bg-black hover:text-white'}`}
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Dropdown Menu */}
                {isMenuOpen && (
                    <div className={`absolute top-16 right-0 w-64 rounded-2xl shadow-2xl border overflow-hidden transition-all duration-300 ${isScrolled ? 'bg-white border-gray-200' : 'bg-white border-gray-200'}`}>
                        <div className="p-3">
                            {/* Mobile Navigation Links - Only visible on mobile */}
                            <div className="md:hidden mb-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">{item.label}</span>
                                    </a>
                                ))}
                                {/* Divider after nav links on mobile */}
                                <div className="border-t border-gray-200 my-2"></div>
                            </div>

                            {/* Resume Item */}
                            <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="text-left">
                                    <div className="font-semibold text-gray-900 text-sm">Resume</div>
                                    <div className="text-xs text-gray-500">Kishan Roy</div>
                                </div>

                                {/* Action Icons */}
                                <div className="flex items-center gap-1">
                                    {/* View Icon */}
                                    <button
                                        onClick={handleViewResume}
                                        className="p-1.5 rounded-lg hover:bg-blue-100 transition-colors duration-200 group/view"
                                        title="View Resume"
                                    >
                                        <Eye className="w-4 h-4 text-gray-600 group-hover/view:text-blue-600 transition-colors" />
                                    </button>

                                    {/* Download Icon */}
                                    <button
                                        onClick={handleDownloadResume}
                                        className="p-1.5 rounded-lg hover:bg-purple-100 transition-colors duration-200 group/download"
                                        title="Download Resume"
                                    >
                                        <Download className="w-4 h-4 text-gray-600 group-hover/download:text-purple-600 transition-colors" />
                                    </button>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-2"></div>

                            {/* Email */}
                            <a
                                href="mailto:kishanroy1001@gmail.com"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm text-gray-700 group-hover:text-gray-900 truncate">kishanroy1001@gmail.com</span>
                            </a>

                            {/* Phone */}
                            <a
                                href="tel:+918511705401"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-4 h-4 text-gray-500 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-sm text-gray-700 group-hover:text-gray-900">+91 8511705401</span>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/kishan-roy1001"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span className="text-sm text-gray-700 group-hover:text-gray-900 truncate">kishan-roy1001</span>
                            </a>
                        </div>
                    </div>
                )}
            </div>

            {/* Resume Modal */}
            {isResumeModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 z-[100] flex items-center justify-center p-4"
                    onClick={() => setIsResumeModalOpen(false)}
                >
                    <div
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900">Resume - Kishan Roy</h3>
                            <button
                                onClick={() => setIsResumeModalOpen(false)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 overflow-hidden">
                            <iframe
                                src="/Kishan_resume_parul.pdf"
                                className="w-full h-full"
                                title="Resume PDF"
                            />
                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
                            <button
                                onClick={handleDownloadResume}
                                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
