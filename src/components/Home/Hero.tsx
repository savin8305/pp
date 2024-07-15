"use client";
import React, { useState, useCallback, memo, useEffect, useRef } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
// import Carousel from './Carousel';
import "@fontsource/alex-brush";

interface NavLinkProps {
    href: string;
    text: string;
    index: number;
    activeLink: number;
    handleMouseEnter: (index: number) => void;
    handleMouseLeave: () => void;
}

const NavLink: React.FC<NavLinkProps> = memo(({ href, text, index, activeLink, handleMouseEnter, handleMouseLeave }) => (
    <a
        href={href}
        className={`text-gray-600 hover:text-black ${activeLink === index ? 'border-b-2 border-red-600' : ''}`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
    >
        {text}
    </a>
));

NavLink.displayName = "NavLink"; // Set the display name here

const Hero: React.FC = () => {
    const [activeLink, setActiveLink] = useState<number>(0);
    const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
    const videoRef = useRef<HTMLDivElement | null>(null);

    const handleMouseEnter = useCallback((index: number) => {
        setActiveLink(index);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setActiveLink(-1);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVideoLoaded(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <div className="relative top-6 flex flex-col items-center bg-[#f5f5f5] rounded-lg overflow-hidden max-w-full">
            <div className="relative p-4 sm:p-8 md:p-10 lg:px-12 w-full">
                <div className="w-full h-[20rem] sm:h-[25rem] bg-gray-200 rounded-2xl" ref={videoRef}>
                    {isVideoLoaded ? (
                        <video
                            id="background-video"
                            className="w-full h-full object-cover rounded-2xl"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        >
                            <source src="video/bg.mp4" type="video/mp4" />
                            <source src="video/bg.webm" type="video/webm" />
                            <source src="video/bg.ogv" type="video/ogg" />
                        </video>
                    ) : (
                        <img
                            src="images/video-placeholder.jpg"
                            alt="Video Placeholder"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    )}
                </div>
                <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 md:bottom-20 md:left-20">
                    <div className="btn-common px-2 sm:px-4 py-1">
                        <span>Get a Quote</span>
                        <button className="btn-icon">
                            <span><MdKeyboardArrowRight /></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row mt-[-1.5rem] px-4 sm:px-10 w-full">
                <div className="w-full md:w-2/5 flex flex-col mb-4 md:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-extralight">FOOD PACKING MACHINES</h2>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl py-2 sm:py-4 font-alex-brush">Manufacturing</h3>
                    <div className="flex justify-start w-full">
                        <nav className="flex space-x-2 sm:space-x-4 px-2 sm:px-4 py-0">
                            <NavLink
                                href="#machines"
                                text="Machines"
                                index={0}
                                activeLink={activeLink}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                            <NavLink
                                href="#about-us"
                                text="About Us"
                                index={1}
                                activeLink={activeLink}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                            <NavLink
                                href="#news"
                                text="News"
                                index={2}
                                activeLink={activeLink}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                            <NavLink
                                href="#brands"
                                text="Brands"
                                index={3}
                                activeLink={activeLink}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                            <NavLink
                                href="#clientele"
                                text="Clientele"
                                index={4}
                                activeLink={activeLink}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                            <NavLink
                                href="#testimonials"
                                text="Testimonials"
                                index={5}
                                activeLink={activeLink}
                                handleMouseEnter={handleMouseEnter}
                                handleMouseLeave={handleMouseLeave}
                            />
                        </nav>
                    </div>
                </div>
                <div className="w-full md:w-3/5 mt-[-7rem] flex justify-center md:justify-end">
                    {/* <Carousel /> */}
                </div>
            </div>
        </div>
    );
};

Hero.displayName = "Hero"; // Set the display name here

export default memo(Hero);
