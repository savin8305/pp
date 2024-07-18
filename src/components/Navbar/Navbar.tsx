"use client";
import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineAccountCircle } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import CountryLayout from "../Layout/CountryLayout";
import SearchBarLayout from "../Layout/SearchBarLayout";
import AccountLayout from "../Layout/AccountLayout";
import ProfileLayout from "../Layout/ProfileLayout";
import NavLinks from "./NavLinks";
import ContactForm from "../Contact/Contact";
import Logo from "../../../public/assets/Logo.png";

const Navbar: React.FC = memo(() => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [heading, setHeading] = useState<string | null>("");
  const [open, setOpen] = useState(false);
  const [isFlagOpen, setIsFlagOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isContactFormVisible, setContactFormVisible] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const accountRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);

  const handleMouseLeave = useCallback(() => {
    setHoveredItem(null);
    setHeading("");
    setIsVisible(true);
  }, []);

  const handleAccount = useCallback(() => {
    setIsFlagOpen(false);
    setProfileOpen(false);
    setOpenSearch(false);
    setAccountOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      accountRef.current &&
      !accountRef.current.contains(event.target as Node)
    ) {
      setAccountOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    setIsVisible(!(isFlagOpen || openSearch || profileOpen || accountOpen));
  }, [isFlagOpen, openSearch, profileOpen, accountOpen]);

  return (
    <div
      className={`navbar fixed top-0 left-2 right-2 z-50 mx-auto max-w-screen-2xl backdrop-blur-[4px] ${
        hoveredItem ? "rounded-t-lg" : "rounded-lg"
      }`}
    >
      <div className="flex items-center md:gap-24 lg:gap-4 lg:justify-center md:justify-around h-14 md:px-4 lg:px-4">
        <Link
          href="/"
          onMouseEnter={handleMouseLeave}
          className="w-1/5 z-30 h-10 rounded-2xl hidden md:hidden 1122px:hidden xl:flex md:pr-1 pr-2 justify-start items-center"
        >
          <Image
            className={`z-30 ${hoveredItem ? "h-6" : "h-6"} w-auto`}
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="w-[55%] h-10 flex-wrap hidden bg-white rounded-3xl md:hidden 1122px:hidden xl:flex justify-center items-center font-montserrat text-16 font-thin relative">
          <NavLinks
            hoveredItem={hoveredItem}
            setHoveredItem={setHoveredItem}
            heading={heading}
            setHeading={setHeading}
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            open={open}
          />
        </ul>
        <span
          onMouseEnter={handleMouseLeave}
          className={`w-1/5 h-10 z-30 md:hidden 1122px:hidden xl:flex hidden justify-end items-center gap-2 ${
            hoveredItem ? "text-black" : "text-black"
          }`}
        >
          <CountryLayout
            isFlagOpen={isFlagOpen}
            setIsFlagOpen={setIsFlagOpen}
            setOpenSearch={setOpenSearch}
            setProfileOpen={setProfileOpen}
            setAccountOpen={setAccountOpen}
          />
          <SearchBarLayout
            setIsFlagOpen={setIsFlagOpen}
            openSearch={openSearch}
            setOpenSearch={setOpenSearch}
            setProfileOpen={setProfileOpen}
            setAccountOpen={setAccountOpen}
          />
          <ProfileLayout
            profileOpen={profileOpen}
            setIsFlagOpen={setIsFlagOpen}
            setOpenSearch={setOpenSearch}
            setProfileOpen={setProfileOpen}
            setAccountOpen={setAccountOpen}
          />
          <div className="relative">
            <MdOutlineAccountCircle
              onClick={handleAccount}
              className="font-montserrat text-2xl cursor-pointer"
            />
            {accountOpen && (
              <div ref={accountRef}>
                <AccountLayout />
              </div>
            )}
          </div>
          <ContactForm
            isContactFormVisible={isContactFormVisible}
            setContactFormVisible={setContactFormVisible}
            isVisible={isVisible}
            setIsFlagOpen={setIsFlagOpen}
            setOpenSearch={setOpenSearch}
            setProfileOpen={setProfileOpen}
            setAccountOpen={setAccountOpen}
          />
        </span>
        <div className="flex xl:hidden bg-white rounded-3xl sm:px-4 md:px-6 mx-6 justify-between items-center w-full">
          <Link
            href="/"
            onMouseEnter={handleMouseLeave}
            className="z-30 h-10 rounded-2xl md:flex md:pr-1 pr-2 items-center"
          >
            <Image
              className={`z-30 ${hoveredItem ? "h-6" : "h-6"} w-auto`}
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex items-center">
            <ProfileLayout
              profileOpen={profileOpen}
              setIsFlagOpen={setIsFlagOpen}
              setOpenSearch={setOpenSearch}
              setProfileOpen={setProfileOpen}
              setAccountOpen={setAccountOpen}
            />
            <span
              className="text-2xl pr-4 md:text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              {open ? <FiX /> : <FiMenu />}
            </span>
          </div>
        </div>
      </div>
      {open && (
        <div
          className={`md:hidden fixed bg-white w-full top-20 overflow-y-auto bottom-0 py-20 transition-transform duration-300 transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="bg-white font-montserrat text-16 font-thin border-t-4 border-black h-screen text-center">
            <NavLinks
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              heading={heading}
              setHeading={setHeading}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
              open={open}
            />
          </ul>
        </div>
      )}
    </div>
  );
});

Navbar.displayName = "Navbar"; // Set the display name here

export default Navbar;
