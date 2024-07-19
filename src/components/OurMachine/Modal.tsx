import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Breadcrumb from "./Breadcrumb"; // Adjust the path according to your file structure
import { motion } from "framer-motion";

interface Item {
  icon: JSX.Element;
  text: string;
}

interface ModalProps {
  image: StaticImageData;
  title: string;
  firstname: string;
  secondname: string;
  description: string;
  items: Item[];
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.3 } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.3 } },
};

const Modal: React.FC<ModalProps> = ({
  image,
  title,
  firstname,
  secondname,
  description,
  items,
  onClose,
}) => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: title, current: true },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="relative w-full max-w-[78rem] h-[90vh] bg-white rounded-xl p-6 transform transition-transform overflow-y-auto"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700"
        >
          &times;
        </button>
        <Breadcrumb items={breadcrumbItems} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <motion.div
            className="flex flex-col items-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg object-contain h-[400px]" // Fixed image height
            />
            <div className="flex space-x-4 mt-4">
              <button className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg">
                View Machine
              </button>
              <button className="px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-lg">
                Get a Quote
              </button>
            </div>
          </motion.div>
          <motion.div variants={contentVariants} initial="hidden" animate="visible">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-red-600">{firstname}</span>
              <span className="text-[#483d78] ml-2">{secondname}</span>
            </h1>
            <p className="text-gray-700 mb-4">{description}</p>
            <ul className="list-none grid grid-cols-2 gap-4 text-gray-700">
              {items.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
