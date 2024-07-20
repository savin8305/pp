// "use client";
// import React, { useState, useRef } from "react";
// import { FiSearch } from "react-icons/fi";

// interface Country {
//   name: string;
//   language: string;
//   flag: string;
// }

// const CountryLayout = () => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [visibleCount, setVisibleCount] = useState<number>(16);
//   const [selectedCountry, setSelectedCountry] = useState<Country>({
//     name: "India",
//     language: "हिंदी",
//     flag: "https://flagcdn.com/in.svg",
//   });

//   const countries: Country[] = [
//     {
//       name: "Saudi Arabia",
//       language: "العربية",
//       flag: "https://flagcdn.com/sa.svg",
//     },
//     { name: "Egypt", language: "العربية", flag: "https://flagcdn.com/eg.svg" },
//     {
//       name: "Bangladesh",
//       language: "বাংলা",
//       flag: "https://flagcdn.com/bd.svg",
//     },
//     {
//       name: "Brazil",
//       language: "Português",
//       flag: "https://flagcdn.com/br.svg",
//     },
//     {
//       name: "Portugal",
//       language: "Português",
//       flag: "https://flagcdn.com/pt.svg",
//     },
//     { name: "China", language: "中文", flag: "https://flagcdn.com/cn.svg" },
//     { name: "Hong Kong", language: "中文", flag: "https://flagcdn.com/hk.svg" },
//     {
//       name: "Germany",
//       language: "Deutsch",
//       flag: "https://flagcdn.com/de.svg",
//     },
//     {
//       name: "Switzerland",
//       language: "Deutsch",
//       flag: "https://flagcdn.com/ch.svg",
//     },
//     {
//       name: "Austria",
//       language: "Deutsch",
//       flag: "https://flagcdn.com/at.svg",
//     },
//     {
//       name: "Australia",
//       language: "English",
//       flag: "https://flagcdn.com/au.svg",
//     },
//     { name: "Canada", language: "English", flag: "https://flagcdn.com/ca.svg" },
//     {
//       name: "United Kingdom",
//       language: "English",
//       flag: "https://flagcdn.com/gb.svg",
//     },
//     {
//       name: "United States",
//       language: "English",
//       flag: "https://flagcdn.com/us.svg",
//     },
//     { name: "Spain", language: "español", flag: "https://flagcdn.com/es.svg" },
//     { name: "Mexico", language: "español", flag: "https://flagcdn.com/mx.svg" },
//     {
//       name: "Argentina",
//       language: "español",
//       flag: "https://flagcdn.com/ar.svg",
//     },
//     { name: "Chile", language: "español", flag: "https://flagcdn.com/cl.svg" },
//     {
//       name: "Colombia",
//       language: "español",
//       flag: "https://flagcdn.com/co.svg",
//     },
//     {
//       name: "European Union",
//       language: "français",
//       flag: "https://flagcdn.com/eu.svg",
//     },
//     {
//       name: "France",
//       language: "français",
//       flag: "https://flagcdn.com/fr.svg",
//     },
//     {
//       name: "Belgium",
//       language: "Français",
//       flag: "https://flagcdn.com/be.svg",
//     },
//     {
//       name: "Luxembourg",
//       language: "Français",
//       flag: "https://flagcdn.com/lu.svg",
//     },
//     { name: "India", language: "हिंदी", flag: "https://flagcdn.com/in.svg" },
//     { name: "Italy", language: "italiano", flag: "https://flagcdn.com/it.svg" },
//     { name: "Japan", language: "日本語", flag: "https://flagcdn.com/jp.svg" },
//     {
//       name: "Belarus",
//       language: "Pусский",
//       flag: "https://flagcdn.com/by.svg",
//     },
//     { name: "Russia", language: "русский", flag: "https://flagcdn.com/ru.svg" },
//     {
//       name: "Ukraine",
//       language: "Pусский",
//       flag: "https://flagcdn.com/ua.svg",
//     },
//     {
//       name: "South Africa",
//       language: "isiZulu",
//       flag: "https://flagcdn.com/za.svg",
//     },
//   ];
//   const filteredCountries = countries.filter(
//     (country) =>
//       country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       country.language.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const handleShowMore = () => {
//     setVisibleCount((prevCount) => prevCount + 9);
//   };
//   const countryRef = useRef<HTMLDivElement | null>(null);
//   return (
//     <div ref={countryRef} className="relative inline-block text-left">
//       <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg z-50">
//         <div className="p-4">
//           <div className="relative">
//             <input
//               type="text"
//               className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Search country"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <FiSearch className="absolute top-2 right-2 text-gray-400" />
//           </div>
//           <ul className="mt-4 max-h-96 overflow-y-auto">
//             {filteredCountries.slice(0, visibleCount).map((country, index) => (
//               <li
//                 key={index}
//                 className="flex items-center justify-between py-2 cursor-pointer hover:bg-gray-100"
//                 onClick={() => setSelectedCountry(country)}
//               >
//                 <span className="flex items-center">
//                   <img
//                     src={country.flag}
//                     alt={country.name}
//                     className="w-6 h-4 mr-2"
//                   />
//                   {country.name} - {country.language}
//                 </span>
//               </li>
//             ))}
//             {visibleCount < filteredCountries.length && (
//               <li
//                 className="py-2 text-center text-blue-600 cursor-pointer hover:bg-gray-100"
//                 onClick={handleShowMore}
//               >
//                 Show More
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//       <div className="flex items-center space-x-2">
//         <img
//           src={selectedCountry.flag}
//           alt="Selected Country"
//           className="w-6 h-4"
//         />
//         <span>{selectedCountry.language}</span>
//       </div>
//     </div>
//   );
// };

// export default CountryLayout;
import React from 'react'

const CountryLayout = () => {
  return (
    <div className='flex flex-row gap-8'>
      <div className="bg-black w-1/2 h-40 border-2">akash</div>
      <div className="bg-gray w-1/2 h-40 border-2">krishna</div>
    </div>
  )
}

export default CountryLayout

