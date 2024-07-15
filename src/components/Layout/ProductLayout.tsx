import React, { useState, useEffect, useRef, useCallback } from "react";
import { Machines, SidebarLinks, images } from "../Constants";
import me from "../../../public/assets/BgForAbout.png";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface ProductLayoutProps {
  setHoveredItem: (item: string | null) => void;
  setHeading: (heading: string | null) => void;
  setIsVisible: (visible: boolean) => void;
}

interface Images {
  [key: string]: StaticImageData;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({
  setHoveredItem,
  setHeading,
  setIsVisible,
}) => {
  const [hoveredCategory, setHoveredCategory] = useState("All Products");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredMachines = Machines.filter(machine =>
    machine.category.includes(hoveredCategory)
  ).map(machine => ({
    ...machine,
    image: (images as unknown as Images)[machine.image],
  }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredMachines.length);
    setActiveCategory(
      filteredMachines[
        (currentIndex + 1) % filteredMachines.length
      ].category.split(",")[0]
    );
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredMachines.length) % filteredMachines.length
    );
    setActiveCategory(
      filteredMachines[
        (currentIndex - 1 + filteredMachines.length) % filteredMachines.length
      ].category.split(",")[0]
    );
  };

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      if (e.clientY >= rect.bottom) {
        setHoveredCategory("All Products");
        setCurrentIndex(0);
        setActiveCategory(null);
        setHoveredItem(null);
        setHeading(null);
        setIsVisible(true);
      }
    }
  }, [setHoveredItem, setHeading, setIsVisible]); // Add dependencies if they are used inside

  useEffect(() => {
    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (containerElement) {
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [handleMouseLeave]); // Include handleMouseLeave here

  useEffect(() => {
    setCurrentIndex(0);
    setActiveCategory(null);
  }, [hoveredCategory]);

  return (
    <div
      ref={containerRef}
      className="w-full z-30 md:h-full bg-white p-4 border-b-2 rounded-xl flex flex-col justify-center items-center font-medium"
    >
      <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${me.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="flex h-full justify-center items-center w-full md:w-3/4 relative px-4"
        >
          {filteredMachines.length > 3 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-0 text-4xl ml-0 h-10 w-10 border-2 rounded-full overflow-hidden bg-white text-black transition-all before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:w-0 before:bg-black before:transition-all before:duration-75 hover:text-white hover:before:left-0 hover:before:w-full"
            >
              <span className="relative z-10">
                <MdKeyboardArrowLeft />
              </span>
            </button>
          )}
          <div className="flex overflow-hidden w-full justify-center">
            {filteredMachines.length <= 3
              ? filteredMachines.map((machine, index) => (
                  <div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3"
                  >
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      className="object-contain rounded-lg relative z-10 h-[200px] w-full"
                      width={400}
                      height={200}
                    />
                    <h3 className="text-lg text-black font-bold mt-2 relative z-20">
                      {machine.name}
                    </h3>
                    <div className="flex justify-center space-x-4 mt-2">
                      <a
                        href={`${machine.name}`}
                        className="primary-button relative z-20"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                ))
              : [...filteredMachines, ...filteredMachines]
                  .slice(currentIndex, currentIndex + 3)
                  .map((machine, index) => (
                    <div
                      key={`${machine.name}-${index}`}
                      className="pt-0 text-center w-1/3 relative"
                    >
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        className={`object-scale-down relative z-10 transition-transform duration-700 ${
                          index === 1
                            ? "zoomed-image w-[400px] h-[200px] p-2"
                            : "h-[200px] w-full p-6"
                        }`}
                        width={400}
                        height={200}
                      />
                      <h1 className="text-lg text-black font-bold pt-0 relative z-20">
                        {machine.name}
                      </h1>
                      <div className="flex justify-center pt-4 space-x-4 mt-2">
                        <a
                          href={`${machine.name}`}
                          className="primary-button relative z-20"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  ))}
          </div>
          {filteredMachines.length > 3 && (
            <button
              onClick={handleNext}
              className="absolute border-2 rounded-full right-0 z-10 h-10 w-10 animated-button-right"
            >
              <span className="relative z-10">
                <MdKeyboardArrowRight />
              </span>
            </button>
          )}
        </div>
        <div className="w-full md:w-1/4 pl-6 lg:space-y-3 border-l border-gray-300">
          {SidebarLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => {
                setHoveredCategory(link.name);
                setCurrentIndex(0);
              }}
              className={`flex items-center space-x-6 text-lg transition-colors duration-300 cursor-pointer ${
                hoveredCategory === "All Products" &&
                activeCategory === link.name
                  ? "font-montserrat font-bold text-16 text-[#483d73]"
                  : "font-montserrat text-14 text-[#483d73]"
              }`}
            >
              <div
                className={`flex items-center bg-fixed object-contain bg-no-repeat h-6 w-6 justify-center cursor-pointer ${
                  hoveredCategory === "All Products" &&
                  activeCategory === link.name
                    ? "h-8 w-8 text-[#483d73] font-bold"
                    : "text-black"
                }`}
              >
                <Image
                  className="rounded-full"
                  src={link.icon}
                  alt="machine icon"
                  width={24}
                  height={24}
                />
              </div>
              <span
                className={`transition duration-300 ${
                  hoveredCategory === link.name
                    ? "font-semibold font-montserrat text-16"
                    : ""
                }`}
              >
                {link.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div
          className={`flex justify-center items-center ${
            hoveredCategory === "All Products" ? "space-x-0" : "space-x-2"
          }`}
          style={{ width: "75%", marginLeft: "-15rem" }}
        >
          {filteredMachines.map((machine, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index === (currentIndex + 1) % filteredMachines.length
                  ? hoveredCategory !== "All Products"
                    ? "h-8 w-8"
                    : "h-3 w-3 bg-black rounded-full"
                  : "h-4 w-4"
              } bg-fixed bg-no-repeat justify-center cursor-pointer ${
                hoveredCategory === "All Products" ? "text-black" : ""
              }`}
              onClick={() => {
                setCurrentIndex(
                  index !== 0 ? index - 1 : filteredMachines.length - 1
                );
                setActiveCategory(
                  filteredMachines[index].category.split(",")[0].trim()
                );
              }}
            >
              {hoveredCategory === "All Products" ? (
                <div className="h-2 w-2 bg-black rounded-full"></div>
              ) : (
                <Image
                  className="rounded-full bg-transparent"
                  src={machine.icon}
                  alt="machine icon"
                  width={24}
                  height={24}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductLayout;
