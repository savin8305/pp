"use client";
import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";

interface Country {
  name: string;
  language: string;
  flag: string;
}

interface CountryLayoutProps {
  isFlagOpen: boolean;
  setIsFlagOpen: (isOpen: boolean) => void;
  setOpenSearch: (isOpen: boolean) => void;
  setProfileOpen: (isOpen: boolean) => void;
  setAccountOpen: (isOpen: boolean) => void;
}

const CountryLayout: React.FC<CountryLayoutProps> = ({
  isFlagOpen,
  setIsFlagOpen,
  setOpenSearch,
  setProfileOpen,
  setAccountOpen,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(16);
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "India",
    language: "हिंदी",
    flag: "https://flagcdn.com/in.svg",
  });
  const countries: Country[] = [
    {
      name: "Saudi Arabia",
      language: "العربية",
      flag: "https://flagcdn.com/sa.svg",
    },
    { name: "Egypt", language: "العربية", flag: "https://flagcdn.com/eg.svg" },
    {
      name: "Bangladesh",
      language: "বাংলা",
      flag: "https://flagcdn.com/bd.svg",
    },
    {
      name: "Brazil",
      language: "Português",
      flag: "https://flagcdn.com/br.svg",
    },
    {
      name: "Portugal",
      language: "Português",
      flag: "https://flagcdn.com/pt.svg",
    },
    { name: "China", language: "中文", flag: "https://flagcdn.com/cn.svg" },
    { name: "Hong Kong", language: "中文", flag: "https://flagcdn.com/hk.svg" },
    {
      name: "Germany",
      language: "Deutsch",
      flag: "https://flagcdn.com/de.svg",
    },
    {
      name: "Switzerland",
      language: "Deutsch",
      flag: "https://flagcdn.com/ch.svg",
    },
    {
      name: "Austria",
      language: "Deutsch",
      flag: "https://flagcdn.com/at.svg",
    },
    {
      name: "Australia",
      language: "English",
      flag: "https://flagcdn.com/au.svg",
    },
    { name: "Canada", language: "English", flag: "https://flagcdn.com/ca.svg" },
    {
      name: "United Kingdom",
      language: "English",
      flag: "https://flagcdn.com/gb.svg",
    },
    {
      name: "United States",
      language: "English",
      flag: "https://flagcdn.com/us.svg",
    },
    { name: "Spain", language: "español", flag: "https://flagcdn.com/es.svg" },
    { name: "Mexico", language: "español", flag: "https://flagcdn.com/mx.svg" },
    {
      name: "Argentina",
      language: "español",
      flag: "https://flagcdn.com/ar.svg",
    },
    { name: "Chile", language: "español", flag: "https://flagcdn.com/cl.svg" },
    {
      name: "Colombia",
      language: "español",
      flag: "https://flagcdn.com/co.svg",
    },
    {
      name: "European Union",
      language: "français",
      flag: "https://flagcdn.com/eu.svg",
    },
    {
      name: "France",
      language: "français",
      flag: "https://flagcdn.com/fr.svg",
    },
    {
      name: "Belgium",
      language: "Français",
      flag: "https://flagcdn.com/be.svg",
    },
    {
      name: "Luxembourg",
      language: "Français",
      flag: "https://flagcdn.com/lu.svg",
    },
    { name: "India", language: "हिंदी", flag: "https://flagcdn.com/in.svg" },
    { name: "Italy", language: "italiano", flag: "https://flagcdn.com/it.svg" },
    { name: "Japan", language: "日本語", flag: "https://flagcdn.com/jp.svg" },
    {
      name: "Belarus",
      language: "Pусский",
      flag: "https://flagcdn.com/by.svg",
    },
    { name: "Russia", language: "русский", flag: "https://flagcdn.com/ru.svg" },
    {
      name: "Ukraine",
      language: "Pусский",
      flag: "https://flagcdn.com/ua.svg",
    },
    {
      name: "South Africa",
      language: "isiZulu",
      flag: "https://flagcdn.com/za.svg",
    },
  ];

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFlagOpen = () => {
    setIsFlagOpen(!isFlagOpen);
    setOpenSearch(false);
    setProfileOpen(false);
    setAccountOpen(false);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const countryRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      countryRef.current &&
      !countryRef.current.contains(event.target as Node)
    ) {
      setIsFlagOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={countryRef} className="relative inline-block text-left">
      <div className="flex items-center space-x-4">
        <button
          type="button"
          className="inline-flex items-center h-8 w-full rounded-md text-sm font-medium text-gray-700 focus:outline-none"
          id="menu-button"
          aria-expanded={isFlagOpen}
          aria-haspopup="true"
          onClick={handleFlagOpen}
        >
          <div className="h-7 w-7 flex items-center justify-center rounded-full overflow-hidden border-2">
            <img
              src={selectedCountry.flag}
              alt={`${selectedCountry.name} flag`}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-montserrat text-16">
            {selectedCountry.name.slice(0, 2)}
          </p>
        </button>
      </div>
      {isFlagOpen && (
        <div
          className="absolute right-[-10.5rem] mt-2 w-64 bg-white rounded-3xl shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="relative p-4">
            <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
              <FiSearch className="text-black" />
            </div>
            <input
              type="text"
              className="w-full font-montserrat text-14 px-2 py-1 pl-2 border rounded-full focus:outline-none focus:ring"
              placeholder="Country or Language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div
            className="max-h-60 grid grid-cols-2 overflow-y-auto scrollbar-custom"
            role="none"
          >
            {filteredCountries.slice(0, visibleCount).map((country, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-0 text-sm text-gray-700 hover:bg-gray-100 flex items-center border-r border-gray-300"
                role="menuitem"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsFlagOpen(false);
                  setSearchTerm("");
                }}
              >
                {country.language}
              </button>
            ))}
            {visibleCount < filteredCountries.length && (
              <p
                className="text-red-500 cursor-pointer pl-4 p-2 flex"
                onClick={handleShowMore}
              >
                more...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryLayout;
