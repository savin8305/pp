import React, { useRef, useEffect, FC } from "react";
import { ImSearch } from "react-icons/im";

interface SearchBarLayoutProps {
  setIsFlagOpen: (isOpen: boolean) => void;
  openSearch: boolean;
  setOpenSearch: (isOpen: boolean) => void;
  setProfileOpen: (isOpen: boolean) => void;
  setAccountOpen: (isOpen: boolean) => void;
}

const SearchBarLayout: FC<SearchBarLayoutProps> = ({
  setIsFlagOpen,
  openSearch,
  setOpenSearch,
  setProfileOpen,
  setAccountOpen,
}) => {
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearchBar = () => {
    setIsFlagOpen(false);
    setProfileOpen(false);
    setAccountOpen(false);
    setOpenSearch(!openSearch);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setOpenSearch(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={searchRef}
      className="relative flex items-center justify-normal text-left"
    >
      <div className="flex items-center justify-center space-x-4">
        <ImSearch
          onClick={handleSearchBar}
          className="font-montserrat text-16 font-thin stroke-0 cursor-pointer"
        />
      </div>
      {openSearch && (
        <div className="mt-7">
          <div className="w-4 h-4 left-1 absolute z-50 mt-1 bg-white rotate-45"></div>
        </div>
      )}
      {openSearch && (
        <div className="absolute flex justify-center px-8 items-center right-[-12.4rem] top-10 w-screen max-w-screen-2xl mx-auto">
          <div className="bg-white w-full h-[60vh] p-4 rounded-xl shadow-lg">
            <form className="flex justify-center w-1/2 items-center mx-auto space-x-1">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-montserrat text-sm font-medium text-black bg-gray-100 rounded-l-lg hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100"
                type="button"
              >
                All categories
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M1 1l4 4 4-4" />
                </svg>
              </button>
              <div className="relative w-full border-gray-300">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm bg-gray-100 rounded-r-lg border-slate-100 font-montserrat placeholder-black"
                  placeholder="Search Product Name..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-[#483d78] rounded-r-lg border border-gray-300 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M19 19l-4-4m0-7a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>
            <div className="mt-4 px-12 w-full border-t border-gray-200"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBarLayout;
