"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { items, titlesWithImages } from "../Constants";

const AboutLayout = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollDown = () => {
    if (currentIndex < items.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollUp = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleWheel = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      scrollDown();
    } else {
      scrollUp();
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      gsap.fromTo(
        carouselElement.children,
        { y: "100%", scale: 0.5, opacity: 0 },
        {
          y: "0%",
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "elastic.out(1, 0.5)",
        }
      );
      carouselElement.addEventListener("wheel", handleWheel);
    }
    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="flex w-[98vw] flex-col md:flex-row items-center justify-center border-b-2 rounded-xl pb-8 h-full px-2 md:px-4"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-screen-lg">
        {titlesWithImages.map((item, index) => (
          <div key={index} className="flex flex-col items-center mt-4">
            <Link href={`/${item.title}`} passHref>
              <Image
                src={item.image}
                alt={item.title}
                className="bg-gray-600 rounded-2xl cursor-pointer w-58 h-56 object-cover"
                width={240}
                height={240}
              />
              <p className="mt-2 text-center text-sm font-semibold">
                {item.title}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="ml-4 w-2 h-72 border-l border-gray-300"></div>
      <div className="ml-4 md:w-[15%] min-h-full flex flex-col justify-between">
        <div ref={carouselRef}>
          {items.slice(currentIndex, currentIndex + 2).map((item, index) => (
            <Link key={index} href={`/${item.title}`} passHref>
              <div
                className={`${item.color} flex items-center p-4 rounded-3xl mb-2`}
              >
                <div className="h-12 w-12 mr-3 flex justify-center items-center text-2xl">
                  <item.icon />
                </div>
                <div>
                  <h3 className="text-md font-medium mb-0">{item.title}</h3>
                  <p className="text-xs line-clamp-3">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex w-full justify-end">
          {currentIndex > 0 && (
            <button
              onClick={scrollUp}
              className="absolute text-2xl top-0 p-2 rounded-full"
            >
              <IoIosArrowUp />
            </button>
          )}
        </div>
        <div className="bottom-4 flex w-full justify-center text-3xl">
          {currentIndex < items.length - 2 && (
            <button
              onClick={scrollDown}
              className="absolute bg-transparent flex justify-center items-center rounded-full"
            >
              <IoIosArrowDown />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
