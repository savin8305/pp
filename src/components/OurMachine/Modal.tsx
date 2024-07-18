import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Breadcrumb from "./Breadcrumb"; // Adjust the path according to your file structure

interface ModalProps {
  image: StaticImageData;
  title: string;
  speed: number;
  unit: string;
  icon: StaticImageData;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  image,
  title,
  speed,
  unit,
  icon,
  onClose,
}) => {
  const breadcrumbItems = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: title, current: true }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full max-w-4xl bg-white rounded-xl p-6 transform transition-transform duration-500 flip-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700"
        >
          &times;
        </button>
        <Breadcrumb items={breadcrumbItems} />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="h-20 w-16 flex items-center justify-center">
                  <Image src={icon} alt="icon" height={50} width={50} />
                </div>
                <div className="ml-2">
                  <div className="relative h-14 w-14 flex items-center justify-center border-2 border-[#483d78] rounded-full bg-white">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="text-base font-bold text-red-500">
                        {speed}
                      </div>
                      <div className="text-txs mt-1 text-gray-500">{unit}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-lg font-bold mb-2 text-red-600">{title}</div>
            <p className="text-gray-700 mb-4">
              Experience unparalleled efficiency with our {title}, a marvel of
              engineering that integrates advanced mechanical, electronic,
              pneumatic, and electrical technologies. This high-precision
              machine is equipped with 13 servos that work in perfect sync via
              PLC, enabling the production of up to 180 high-quality paper cups
              per minute, equivalent to 3 cups per second. The machine features
              a two-step curling process, which ensures the rim of each cup is
              curled twice to provide extra rigidity and durability.
              High-quality sealing is guaranteed through the use of ultrasonic
              and hot air mechanisms, minimizing the risk of leakage, making it
              ideal for both hot and cold beverages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
