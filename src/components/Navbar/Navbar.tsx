"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./nav-menue";
import { cn } from "@/lib/utils";
import AboutLayout from "../Layout/AboutLayout";
import SupportLayout from "../Layout/SupportLayout";
import { supporItem } from "@/components/Constants/index";
import ProductLayout from "../Layout/ProductLayout";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/Logo.png";
import CountryLayout from "../Layout/CountryLayout";
import AccountLayout from "../Layout/AccountLayout";
import ProfileLayout from "../Layout/ProfileLayout";
import SearchBarLayout from "../Layout/SearchBarLayout";

export default function NavbarDemo() {
  return (
    <div className="relative flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-0 flex flex-row justify-center items-center inset-x-0 mx-auto z-50",
        className
      )}
    >
      <div className="w-1/5 flex justify-start items-center">
        <Link
          href="/"
          className="z-30 h-10 rounded-2xl hidden md:hidden 1122px:hidden xl:flex md:pr-1 pr-2 justify-start items-center"
        >
          <Image
            className={`z-30 h-6  w-auto`}
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="w-[55%]">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="About">
            <AboutLayout />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Products">
            <ProductLayout
              setHoveredItem={() => {}}
              setHeading={() => {}}
              setIsVisible={() => {}}
            />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Application">
            <ProductLayout
              setHoveredItem={() => {}}
              setHeading={() => {}}
              setIsVisible={() => {}}
            />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Solution">
            <ProductLayout
              setHoveredItem={() => {}}
              setHeading={() => {}}
              setIsVisible={() => {}}
            />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Support">
            <SupportLayout
              setHoveredItem={() => {}}
              supporItem={supporItem}
              type={""}
            />
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Resources">
            <SupportLayout
              setHoveredItem={() => {}}
              supporItem={supporItem}
              type={""}
            />
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Video"
          ></MenuItem>
        </Menu>
      </div>
      <div className="w-1/5 gap-2 flex flex-row items-center justify-center">
        <MenuItem setActive={setActive} active={active} item="countryLayout">
          <CountryLayout />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="searchLayout">
          <SearchBarLayout />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="profileLayout">
          <ProfileLayout />
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="userLayout">
          <AccountLayout />
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="contact"
        ></MenuItem>
      </div>
    </div>
  );
}
