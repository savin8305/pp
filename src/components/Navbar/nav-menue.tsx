"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountryLayout from "../Layout/CountryLayout";
import Image from "next/image";
import { ImSearch } from "react-icons/im";
import { MdOutlineAccountCircle } from "react-icons/md";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    language: "हिंदी",
    flag: "https://flagcdn.com/in.svg",
  });

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer rounded-full w-full text-black hover:opacity-[0.9] dark:text-white"
      >
        {item === "countryLayout" && (
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="h-7 w-7">
              <Image
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="h-full w-full object-cover rounded-full"
                width={6}
                height={6}
              />
            </div>
            <span className="text-white">{selectedCountry.language}</span>
          </div>
        )}
        {item === "searchLayout" && (
          <div className="flex items-center justify-center space-x-2 cursor-pointer">
            <div className="flex items-center justify-center space-x-4">
              <ImSearch className="font-montserrat text-16 font-thin stroke-0 cursor-pointer" />
            </div>
          </div>
        )}
        {item === "profileLayout" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="h-6 w-8 cursor-pointer font-montserrat text-16 font-thin"
          >
            <rect width="256" height="256" fill="none"></rect>
            {Array.from({ length: 9 }, (_, i) => (
              <circle
                key={i}
                cx={60 + (i % 3) * 68}
                cy={60 + Math.floor(i / 3) * 68}
                r="18"
                fill="black"
              ></circle>
            ))}
          </svg>
        )}
        {item === "userLayout" && (
          <MdOutlineAccountCircle className="font-montserrat text-2xl cursor-pointer" />
        )}
        {item !== "countryLayout" &&
          item !== "searchLayout" &&
          item !== "profileLayout" &&
          item !== "userLayout" && <>{item}</>}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <>
              {item === "About" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[26.5%] pr-2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Products" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[32%] pr-2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Application" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[39.5%] pr-2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Solution" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[48.5%] pl-2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Support" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[55.2%] pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "Resources" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[62.5%] pl-4 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "countryLayout" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-1/2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "searchLayout" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-[82%] pr-2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "countryLayout" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-1/2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "countryLayout" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-1/2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "countryLayout" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-1/2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
              {item === "countryLayout" && (
                <div className="absolute top-[calc(100%_+_0.5rem)] transform -translate-x-1/2 pt-2">
                  <motion.div
                    transition={transition}
                    layoutId="active"
                    className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="h-full w-max p-2">
                      {children}
                    </motion.div>
                  </motion.div>
                </div>
              )}
            </>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center px-2 py-2"
    >
      {React.Children.map(children, (child) => (
        <div className="mx-4">{child}</div>
      ))}
    </nav>
  );
};
