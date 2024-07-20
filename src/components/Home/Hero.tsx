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
      <div className="relative sm:p-8 md:p-2  w-full flex-wrap">
        <div
          className="relative w-screen md:mt-12 h-[calc(100vh-150px)]  sm:h-[calc(100vh-220px)] rounded-2xl"
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
        <div className="absolute bg-[#f5f5f5] border-2 rounded-3xl px-4 p-0 flex items-center bottom-0 left-8 sm:bottom-10 sm:left-10 md:bottom-20 md:left-20">
          <span className="mr-2">Get a Quote</span>
          <button className="relative z-10 p-0 text-4xl h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all hover:text-white hover:bg-black">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:translate-x-full group-hover:w-0 group-hover:bg-black group-hover:text-white">
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 sm:px-10 w-full">
        <div className="w-full md:w-2/5 mx-2 flex flex-col mb-4 md:mb-2">
          <h4 className="text-2xl mx-2 sm:text-3xl md:text-2xl lg:text-4xl font-poppins font-thin">
            FOOD PACKING MACHINES
          </h4>

          <Image
            src={Manufacturing}
            alt="Manufacturing Image"
            layout="responsive"
            height={10}
            width={1}
            className="w-[20%] pr-6 h-auto object-cover rounded-2xl"
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
        <div className="w-full px-2 md:w-3/5">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

Hero.displayName = "Hero";

export default memo(Hero);
