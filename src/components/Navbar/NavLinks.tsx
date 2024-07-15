"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { links } from "../Constants/index";
import { supporItem, DataBankItem } from "../Constants/index";
import AboutLayout from "../Layout/AboutLayout";
import ProductLayout from "../Layout/ProductLayout";
import SupportLayout from "../Layout/SupportLayout";

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
                    setHoveredItem={setHoveredItem}
                    setHeading={setHeading}
                    setIsVisible={setIsVisible}
                  />
                )}
                {link.name === "Products" && (
                  <ProductLayout
                    setHoveredItem={setHoveredItem}
                    setHeading={setHeading}
                    setIsVisible={setIsVisible}
                  />
                )}
                {link.name === "Support" && (
                  <SupportLayout
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                    heading={heading}
                    setHeading={setHeading}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
                    supporItem={supporItem} type={""}                  />
                )}
                {link.name === "Resources" && (
                  <SupportLayout
                    type="Resources"
                    hoveredItem={hoveredItem}
                    setHoveredItem={setHoveredItem}
                    heading={heading}
                    setHeading={setHeading}
                    isVisible={isVisible}
                    setIsVisible={setIsVisible}
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
                  {/* {link.comp === "AboutUs" && <AboutLayout />}
                  {link.name === "Products" && <ProductLayout />}
                  {link.name === "Application" && <AboutLayout />} */}
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
