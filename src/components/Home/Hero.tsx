"use client";
import Image from "next/image";
import React, { useState, useCallback, memo, useEffect, useRef } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Carousel from "./Carousel";
import Manufacturing from "../../../public/assets/Manufacturing.png";
interface NavLinkProps {
  href: string;
  text: string;
  index: number;
  activeLink: number;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
}
const NavLink: React.FC<NavLinkProps> = memo(
  ({ href, text, index, activeLink, handleMouseEnter, handleMouseLeave }) => (
    <a
      href={href}
      className={`text-gray-600 hover:text-black ${
        activeLink === index ? "border-b-2 border-red-600" : ""
      }`}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </a>
  )
);

NavLink.displayName = "NavLink";

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
    <div className="relative bg-[#f5f5f5] flex flex-col items-center  rounded-lg overflow-hidden min-h-screen w-full">
      <div className="relative sm:p-8 md:p-2 lg:px-12 w-full flex-wrap">
        <div
          className="relative w-full md:mt-12 h-[calc(100vh-150px)]  sm:h-[calc(100vh-220px)] rounded-2xl"
          ref={videoRef}
        >
          {isVideoLoaded ? (
            <video
              id="background-video"
              className="w-full h-full pb-2 object-cover rounded-2xl"
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="loader"></div>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-8 sm:bottom-10 sm:left-10 md:bottom-20 md:left-20">
          <div className="btn-common px-2 sm:px-4 py-1">
            <span>Get a Quote</span>
            <button className="btn-icon">
              <span>
                <MdKeyboardArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 sm:px-10 w-full">
        <div className="w-full md:w-2/5 flex flex-col mb-4 md:mb-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-poppins font-extralight">
            FOOD PACKING MACHINES
          </h2>
          <Image
            src={Manufacturing}
            alt="Manufacturing Image"
            layout="responsive"
            height={10}
            width={150}
            className="w-full h-auto object-cover rounded-2xl"
          />
          <nav className="flex flex-wrap mt-0 space-x-2 sm:space-x-4 px-1 sm:px-2">
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
        <div className="w-full px-6 md:w-3/5">
         <Carousel/>
        </div>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";

export default memo(Hero);
