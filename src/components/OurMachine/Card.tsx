import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Modal from './Modal';

interface CardProps {
  image: StaticImageData;
  title: string;
  speed: number;
  unit: string;
  icon: StaticImageData;
}

const Card: React.FC<CardProps> = ({ image, title, speed, unit, icon }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="p-1 px-4 pb-4 bg-white rounded-3xl shadow-md relative">
      <div className="flex items-center justify-between mb-0">
        <div className="flex items-center">
          <div className="h-20 w-16 flex items-center justify-center">
            <Image src={icon} alt="icon" height={50} width={50} />
          </div>
          <div className="ml-2">
            <div className="relative h-14 w-14 flex items-center justify-center border-2 border-[#483d78] rounded-full bg-white">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-base font-bold text-red-500">{speed}</div>
                <div className="text-txs mt-1 text-gray-500">{unit}</div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleModalToggle}
          className="absolute text-3xl top-2 right-2 bg-[#483d78] text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          +
        </button>
      </div>
      <div className="h-40 relative rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-gray-600 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="text-lg font-bold">{title}</div>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          image={image}
          title={title}
          speed={speed}
          unit={unit}
          icon={icon}
          onClose={handleModalToggle}
        />
      )}
    </div>
  );
};

export default Card;
