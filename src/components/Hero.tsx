
const Hero = () => {
    const firstName = "KISHAN".split("");
    const lastName = "ROY".split("");

    const letterClass = "inline-block transition-transform duration-300 hover:scale-110 hover:text-gray-700 hover:italic hover:font-serif cursor-default";

    return (
        <section className="relative min-h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
            {/* Background Shape */}
            <div className="absolute bottom-0 left-0 w-full h-[400px] bg-black rounded-t-[50%] transform scale-x-150 translate-y-20 z-0"></div>

            {/* Mobile Layout - Stacked */}
            <div className="lg:hidden relative z-10 container mx-auto px-6 h-full flex flex-col items-center justify-start pt-20 pb-12">
                {/* Text Content */}
                <div className="text-center relative z-20 mb-6">
                    <h1 className="flex justify-center text-[4rem] sm:text-[5rem] leading-none font-bold text-gray-900 tracking-tighter">
                        {firstName.map((char, index) => (
                            <span key={index} className={letterClass}>
                                {char}
                            </span>
                        ))}
                    </h1>
                    <h1 className="flex justify-center text-[4rem] sm:text-[5rem] leading-none font-light text-gray-900 tracking-tighter ml-6 sm:ml-10 -mt-2 sm:-mt-4">
                        {lastName.map((char, index) => (
                            <span key={index} className={letterClass}>
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Introductory Text */}
                <div className="relative z-30 max-w-xs sm:max-w-sm text-center flex flex-col items-center mb-6">
                    <div className="w-12 h-[2px] bg-black mb-4"></div>
                    <p className="text-base sm:text-lg text-gray-800 font-medium tracking-wide leading-relaxed">
                        I build <span className="text-black font-bold">software</span> today while experimenting with how <span className="text-black font-bold">machines learn</span> for tomorrow.
                    </p>
                </div>

                {/* Image */}
                <div className="relative w-full h-[400px] sm:h-[500px] flex items-end justify-center z-10">
                    <img
                        src="/kishan-withoutbackground.png"
                        alt="Kishan Roy"
                        className="h-full w-auto object-contain object-bottom grayscale drop-shadow-2xl brightness-110 contrast-125 hover:grayscale-0 transition-all duration-500"
                    />
                </div>
            </div>

            {/* Desktop Layout - Original Overlapping Design */}
            <div className="hidden lg:flex relative z-10 container mx-auto px-6 h-full flex-col lg:flex-row items-center justify-between pt-24">
                {/* Text Content */}
                <div className="text-left relative z-20">
                    <h1 className="flex text-[7rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[12rem] leading-none font-bold text-gray-900 tracking-tighter">
                        {firstName.map((char, index) => (
                            <span key={index} className={letterClass}>
                                {char}
                            </span>
                        ))}
                    </h1>
                    <h1 className="flex text-[7rem] lg:text-[9rem] xl:text-[11rem] 2xl:text-[12rem] leading-none font-light text-gray-900 tracking-tighter ml-10 lg:ml-16 xl:ml-20 -mt-4 lg:-mt-8 xl:-mt-10">
                        {lastName.map((char, index) => (
                            <span key={index} className={letterClass}>
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                {/* Introductory Text - Positioned over image */}
                <div className="absolute top-[30%] right-[2%] lg:right-[10%] xl:right-[15%] 2xl:right-[20%] max-w-sm text-left z-30 flex flex-col items-start px-4">
                    <div className="w-12 h-[2px] bg-black mb-4"></div>
                    <p className="text-xl text-gray-800 font-medium tracking-wide leading-relaxed">
                        I build <span className="text-black font-bold">software</span> today while experimenting with how <span className="text-black font-bold">machines learn</span> for tomorrow.
                    </p>
                </div>

                {/* Image Placeholder */}
                <div className="absolute right-0 bottom-0 h-[98%] w-[90%] flex items-end justify-center z-10 pointer-events-none translate-y-24">
                    <div className="relative w-full h-full flex items-end justify-end">
                        <img
                            src="/kishan-withoutbackground.png"
                            alt="Kishan Roy"
                            className="h-full w-auto object-contain object-bottom origin-bottom grayscale scale-150 drop-shadow-2xl brightness-110 contrast-125 hover:grayscale-0 transition-all duration-500 pointer-events-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
