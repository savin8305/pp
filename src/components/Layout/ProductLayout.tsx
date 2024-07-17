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
  const [hoveredCategory, setHoveredCategory] = useState<string>(
    SidebarLinks[0].name
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState<number | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredMachines = Machines.filter((machine) =>
    hoveredCategory ? machine.category.includes(hoveredCategory) : false
  ).map((machine) => ({
    ...machine,
    image: (images as unknown as Images)[machine.image],
  }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredMachines.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + filteredMachines.length) % filteredMachines.length
    );
  };

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      const container = containerRef.current;
      if (container) {
        const rect = container.getBoundingClientRect();
        if (e.clientY >= rect.bottom) {
          setHoveredCategory("");
          setCurrentIndex(0);
          setHoveredItem(null);
          setHeading(null);
          setIsVisible(true);
        }
      }
    },
    [setHoveredItem, setHeading, setIsVisible]
  );

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
  }, [handleMouseLeave]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [hoveredCategory]);

  return (
    <div
      ref={containerRef}
      className="w-full z-30 md:h-full bg-white p-2 border-b-2 rounded-xl flex flex-col justify-center items-center font-medium"
    >
      <div className="w-full flex flex-col md:flex-row rounded-lg overflow-hidden">
        <div className="flex h-full justify-center items-center w-full md:w-3/4 relative">
          {filteredMachines.length > 6 && (
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 p-0 text-4xl border-2 rounded-full overflow-hidden bg-white text-black transition-all hover:text-white hover:bg-black"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <MdKeyboardArrowLeft />
            </button>
          )}
          <div className="flex flex-wrap justify-center overflow-hidden w-full">
            {filteredMachines.length <= 6
              ? filteredMachines.map((machine, index) => (
                  <div
                    key={`${machine.name}-${index}`}
                    className="text-center relative w-1/3 p-1"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationDuration: "1s",
                      animationFillMode: "both",
                      animationTimingFunction: "ease-in-out",
                      animationName: "fadeIn",
                    }}
                    onMouseEnter={() => setHoveredImageIndex(index)}
                    onMouseLeave={() => setHoveredImageIndex(null)}
                  >
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      className={`object-contain rounded-lg relative z-10 h-36 w-full transition-transform duration-300 ${
                        hoveredImageIndex === index ? "transform scale-110" : ""
                      }`}
                      width={200}
                      height={150}
                    />
                    <h3 className="text-lg text-black font-bold relative z-20">
                      {machine.name}
                    </h3>
                    <div className="flex justify-center space-x-2">
                      <a
                        href={`${machine.name}`}
                        className="primary-button relative z-20"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                ))
              : filteredMachines
                  .slice(currentIndex, currentIndex + 6)
                  .map((machine, index) => (
                    <div
                      key={`${machine.name}-${index}`}
                      className="text-center relative w-1/3 p-2"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationDuration: "1s",
                        animationFillMode: "both",
                        animationTimingFunction: "ease-in-out",
                        animationName: "fadeIn",
                      }}
                      onMouseEnter={() => setHoveredImageIndex(index)}
                      onMouseLeave={() => setHoveredImageIndex(null)}
                    >
                      <Image
                        src={machine.image}
                        alt={machine.name}
                        className={`object-scale-down relative z-10 transition-transform duration-300 ${
                          hoveredImageIndex === index
                            ? "transform scale-110"
                            : ""
                        } h-auto w-full`}
                        width={200}
                        height={150}
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
          {filteredMachines.length > 6 && (
            <button
              onClick={handleNext}
              className="absolute border-2 rounded-full right-0 z-10 h-10 w-10 animated-button-right"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <MdKeyboardArrowRight />
            </button>
          )}
        </div>
        <div className="w-full mt-6 md:w-1/4 pl-4 space-y-2 border-l border-gray-300">
          {SidebarLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => {
                setHoveredCategory(link.name);
                setCurrentIndex(0);
              }}
              className={`flex items-center space-x-4 text-lg transition-colors duration-300 cursor-pointer ${
                hoveredCategory === link.name
                  ? "font-montserrat font-bold text-[#483d73]"
                  : "font-montserrat text-[#483d73]"
              }`}
            >
              <div
                className={`flex items-center bg-fixed object-contain bg-no-repeat h-6 w-6 justify-center cursor-pointer ${
                  hoveredCategory === link.name
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
                  hoveredCategory === link.name ? "font-semibold" : ""
                }`}
              >
                {link.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      {hoveredCategory && filteredMachines.length > 0 && (
        <div className="flex justify-center w-full mt-4">
          <div className="flex justify-center items-center space-x-2">
            {filteredMachines.map((machine, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer transition-transform duration-300 ${
                  index === (currentIndex + 1) % filteredMachines.length
                    ? "h-8 w-8"
                    : "h-4 w-4"
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <Image
                  className="rounded-full bg-transparent"
                  src={machine.icon}
                  alt="machine icon"
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductLayout;
