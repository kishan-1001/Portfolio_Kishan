import { Linkedin, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

const SocialSidebar = () => {
    const SOCIAL_LINKS = [
        {
            id: 'phone',
            icon: Phone,
            label: '+91 8511705401',
            url: 'tel:+918511705401',
            active: true
        },
        {
            id: 'linkedin',
            icon: Linkedin,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kishan-roy1001',
            active: true
        },
        {
            id: 'instagram',
            icon: Instagram,
            label: 'Instagram',
            url: '#',
            active: false
        },
        {
            id: 'facebook',
            icon: Facebook,
            label: 'Facebook',
            url: '#',
            active: false
        },
        {
            id: 'twitter',
            icon: Twitter,
            label: 'Twitter',
            url: '#',
            active: false
        },
        {
            id: 'email',
            icon: Mail,
            label: 'Email',
            url: 'mailto:kishanroy1001@gmail.com',
            active: true
        }
    ];

    const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

    const handleLinkClick = (e: React.MouseEvent, link: typeof SOCIAL_LINKS[0]) => {
        if (!link.active) {
            e.preventDefault();
            setActiveTooltip(link.id);
            // Hide tooltip after delay
            setTimeout(() => {
                if (activeTooltip === link.id) setActiveTooltip(null);
            }, 2000);
        } else {
            setActiveTooltip(null);
        }
    };

    return (
        <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6">
            {/* Top Vertical Line */}
            <div className="w-[1px] h-32 bg-gray-300"></div>

            <div className="flex flex-col gap-6">
                {SOCIAL_LINKS.map((link) => {
                    const isExternal = link.active && link.id !== 'email' && link.id !== 'phone';
                    return (
                        <a
                            key={link.id}
                            href={link.url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className="group relative flex items-center justify-center"
                            onClick={(e) => handleLinkClick(e, link)}
                            onMouseEnter={() => setActiveTooltip(link.id)}
                            onMouseLeave={() => setActiveTooltip(null)}
                        >
                            {/* Circular Icon Container */}
                            <div className="w-12 h-12 bg-white rounded-full text-gray-600 shadow-md border border-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-blue-600 hover:border-blue-100 peer">
                                <link.icon size={20} className="stroke-[1.5]" />
                            </div>

                            {/* Tooltip / Label */}
                            <div
                                className={`
                                    absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 pointer-events-none z-50
                                    ${activeTooltip === link.id
                                        ? 'opacity-100 translate-x-0 visible'
                                        : 'opacity-0 -translate-x-2 invisible'}
                                    ${!link.active
                                        ? 'bg-red-50 text-red-600 border border-red-100'
                                        : 'bg-white text-gray-700 border border-gray-100 shadow-sm'}
                                `}
                            >
                                {!link.active ? `Sorry, I don't use ${link.label}` : link.label}
                                {/* Tiny arrow pointing left */}
                                <div className={`absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 rotate-45 border-l border-b ${!link.active ? 'bg-red-50 border-red-100' : 'bg-white border-gray-100'}`}></div>
                            </div>
                        </a>
                    );
                })}
            </div>

            {/* Bottom Vertical Line */}
            <div className="w-[1px] h-32 bg-gray-300"></div>
        </div>
    );
};

export default SocialSidebar;
