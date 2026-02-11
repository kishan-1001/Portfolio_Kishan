import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        if (!formRef.current) return;

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Service ID: service_xxxxxx
        // Template ID: template_xxxxxx
        // Public Key: xxxxxxxxxxxxxxx

        emailjs.sendForm(
            'service_5mq529l',
            'template_9xvnzqb',
            formRef.current,
            '5pz4vHXpXHTZGkpfl'
        )
            .then(() => {
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                formRef.current?.reset();
            }, (error) => {
                setLoading(false);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
                console.error(error.text);
            });
    };

    return (
        <section id="contact" className="py-24 bg-[#f9fafb] text-gray-900 relative overflow-hidden border-t border-gray-200">
            {/* Classic Light Mesh Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

            {/* Subtle Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Info */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase mb-3">
                                Get in Touch
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                                Let's Work Together
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                                Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities and collaborations. Feel free to reach out via the form or my contacts below.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a
                                href="mailto:kishanroy1001@gmail.com"
                                className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 transition-all group"
                            >
                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-medium mb-1">Email Me</div>
                                    <div className="text-gray-900 font-semibold text-lg">kishanroy1001@gmail.com</div>
                                </div>
                            </a>

                            <a
                                href="tel:+918511705401"
                                className="flex items-center gap-5 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-green-100 transition-all group"
                            >
                                <div className="p-3 bg-green-50 rounded-xl text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500 font-medium mb-1">Call Me</div>
                                    <div className="text-gray-900 font-semibold text-lg">+91 8511705401</div>
                                </div>
                            </a>

                            <div className="flex gap-4 mt-8 pt-8 border-t border-gray-200">
                                <a
                                    href="https://www.linkedin.com/in/kishan-roy1001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-blue-700 hover:border-blue-200 hover:shadow-md transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://github.com/kishan-1001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-white border border-gray-100 rounded-xl text-gray-500 hover:text-gray-900 hover:border-gray-300 hover:shadow-md transition-all"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Light Theme Form */}
                    <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden">

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    required
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none font-medium"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                                    {status.message}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {loading ? (
                                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="mt-24 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Kishan Roy. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
