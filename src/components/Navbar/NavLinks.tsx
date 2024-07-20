"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { links } from "../Constants/index";
import { supporItem, DataBankItem } from "../Constants/index";
import AboutLayout from "../Layout/AboutLayout";
import ProductLayout from "../Layout/ProductLayout";
import SupportLayout from "../Layout/SupportLayout";
import { gsap } from "gsap";
interface NavLinksProps {
  hoveredItem: string | null;
  setHoveredItem: (item: string | null) => void;
  open: boolean;
  heading: string | null;
  setHeading: (heading: string | null) => void;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  hoveredItem,
  setHoveredItem,
  open,
  heading,
  setHeading,
  isVisible,
  setIsVisible,
}) => {
  const animateref = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (item: string) => {
    setHoveredItem(item);
    setHeading(item);
  };

  useEffect(() => {
    if (animateref.current) {
      gsap.to(animateref.current, {
        scale: hoveredItem ? 1 : 0.95,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [hoveredItem]);

  return (
    <>
      {links.map((link, index) => (
        <div
          key={link.name}
          onMouseEnter={() => handleMouseEnter(link.name)}
          className="text-left md:cursor-pointer relative"
        >
          <div className="hidden md:flex">
            <h6
              className="z-30 md:pr-1 pr-2"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              <Link
                href={`/${link.name.toLowerCase()}`}
                className={`font-montserrat md:text-14 p-1 lg:text-16 md:pl-0 lg:pl-2 pr-2 link-name ${
                  hoveredItem === link.name
                    ? "bg-[#483d73] text-white rounded-full"
                    : "text-black"
                } text-base rounded-full`}
              >
                {link.name}
              </Link>
            </h6>
            {hoveredItem === link.name && (
              <div
                ref={animateref}
                className={`fixed left-0 right-0 mx-auto shadow-lg max-w-screen-2xl rounded-b-xl h-auto z-10 top-14 flex justify-center items-center`}
              >
                {link.comp === "AboutUs" && (
                  <AboutLayout
                   
                  />
                )}
                {link.name === "Products" && (
                  <ProductLayout
                    setHoveredItem={setHoveredItem}
                    setHeading={setHeading}
                    setIsVisible={setIsVisible}
                  />
                )}
                {link.name === "Application" && (
                  <AboutLayout
                  />
                )}
                {link.name === "Solutions" && (
                  <ProductLayout
                    setHoveredItem={setHoveredItem}
                    setHeading={setHeading}
                    setIsVisible={setIsVisible}
                  />
                )}
                {link.name === "Support" && (
                  <SupportLayout
                    setHoveredItem={setHoveredItem}
                    supporItem={supporItem}
                    type={""}
                  />
                )}
                {link.name === "Resources" && (
                  <SupportLayout
                    type="Resources"
                    setHoveredItem={setHoveredItem}
                    supporItem={DataBankItem}
                  />
                )}
              </div>
            )}
          </div>

          {/* For mobile */}
          {open && (
            <div className="md:hidden w-full bg-inherit">
              <div
                className={`py-2 pl-4 border-b border-gray-300 text-black flex justify-between items-center`}
                onClick={() => {
                  heading !== link.name
                    ? setHeading(link.name)
                    : setHeading("");
                }}
              >
                <Link href={`/${link.name.toLowerCase()}`} className="text-lg">
                  {link.name}
                </Link>
                <span>{heading === link.name ? "-" : "+"}</span>
              </div>
              {heading === link.name && (
                <div className="pl-4 pb-2">
                  {/* Add mobile-specific content if needed */}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
