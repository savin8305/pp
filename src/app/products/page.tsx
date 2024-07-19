"use client";
import React from "react";
import Stepper from "../../components/OurMachine/Stepper";
import Card from "../../components/OurMachine/Card";
import {
  paperBagMachineImage,
  paperBowlMachineImage,
  paperCupMachineImage,
  paperStrawMachine,
  paperFlexoMachineImage,
  fullyAutomaticBagMachineImage,
  paperLunchBoxMachine,
  papercup,
  paperbag1,
  paperbowl,
  paperlid,
  paperstraw,
} from "../../../public/assets";
import {FaCircleNotch } from 'react-icons/fa';
const page: React.FC = () => {
  const cards = [
    {
      firstname: "Servo Driven",
      secondname: "Paper Cup Machine",
      description:
        "Experience unparalleled efficiency with our Servo Driven Paper Cup Machine, a marvel of engineering that integrates advanced mechanical, electronic, pneumatic, and electrical technologies. This high-precision machine is equipped with 13 servos that work in perfect sync via PLC, enabling the production of up to 180 high-quality paper cups per minute, equivalent to 3 cups per second. The machine features a two-step curling process, which ensures the rim of each cup is curled twice to provide extra rigidity and durability & High-quality sealing is guaranteed through the use of ultrasonic and hot air mechanisms, minimizing the risk of leakage, making it ideal for both hot and cold beverages.",
      image: paperBowlMachineImage,
      title: "Servo Driven Paper Cup Machine",
      speed: 123,
      unit: "PCS/MIN",
      icon: papercup,
      items: [
        { icon: <FaCircleNotch className="text-blue-500 text-3xl" />, text: "High-Speed Synchronized Servos" },
        { icon: <FaCircleNotch className="text-green-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-yellow-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System with PLC + HMI" }
      ]
    },
    {
      firstname: "Paper Bag",
      secondname: "Making Machine",
      description:
        "Fully automatic Paper Bag Making Machine is able to perform a series of functions including printing tracking, cutting, bottom indentation, bottom folding, bottom gluing. One can use both plain and printed paper as raw material for bag formation. This bag making machine is equipped with German photoelectric sensors which enables precise tracking of paper movement throughout the machine whether it is alignment of paper, unwinding or rewinding of paper.",
      image: paperBagMachineImage,
      title: "Paper Bag Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbowl,
      items: [
        { icon: <FaCircleNotch className="text-blue-500 text-3xl" />, text: "High-Speed Synchronized Servos" },
        { icon: <FaCircleNotch className="text-green-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-yellow-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System with PLC + HMI" }
      ]
    },
    {
      firstname: "Disposable Cup",
      secondname: "Making Machine",
      description:
        "NS-200 Disposable Cup making Machine is manufactured using latest technology and high tech equipment which are reliable as well as durable. This is the best Disposable cup making machine which has two-layer system for movement of Paper fans which is formed by a kind of arm arrangement for cup cone tracker. Robotic Arm plays a vital role in transferring cup cone to Moulds for further process of Bottom heating, knurling and Top curling. Moreover, this machine has certain additional features like photoelectric sensors for paper feeding and cup counting.",
      image: paperCupMachineImage,
      title: "Disposable Cup Making Machine",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbag1,
      items: [
        { icon: <FaCircleNotch className="text-blue-500 text-3xl" />, text: "High-Speed Synchronized Servos" },
        { icon: <FaCircleNotch className="text-green-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-yellow-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System with PLC + HMI" }
      ]
    },
    {
      firstname: "Flexo",
      secondname: "Printing Machine",
      description:
        "This machine has an accurate color printing process as it uses rolling materials. It has meter counter that can set printing quantity and color usability as per utility. This machine is equipped with hydraulic systems which assists independent unwinding and rewinding of paper roll. One can complete whole roll to roll printing process in one machine including unwinding (feeding paper roll), printing in various colors, infrared drying and rewinding (assorting printed paper in one roll) as well. Nessco flexographic machine supports multi-colour printing and is equipped with ultraviolet infrared drying devices which are fixed at each print unit.",
      image: paperFlexoMachineImage,
      title: "Flexo Printing Machine",
      speed: 120,
      unit: "PCS/MIN",
      icon: paperbowl,
      items: [
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "High-Speed Synchronized" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System" }
      ]
    },
    {
      firstname: "High Speed",
      secondname: "",
      description: "",
      image: paperLunchBoxMachine,
      title: "High Speed Paper Cup Machine ",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperlid,
      items: [
        { icon: <FaCircleNotch className="text-blue-500 text-3xl" />, text: "High-Speed Synchronized Servos" },
        { icon: <FaCircleNotch className="text-green-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-yellow-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System with PLC + HMI" }
      ]
    },
    {
      firstname: "High Speed",
      secondname: "",
      description: "",
      image: paperStrawMachine,
      title: "High Speed Paper Cup Machine ",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperstraw,
      items: [
        { icon: <FaCircleNotch className="text-blue-500 text-3xl" />, text: "High-Speed Synchronized Servos" },
        { icon: <FaCircleNotch className="text-green-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-yellow-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System with PLC + HMI" }
      ]
    },
    {
      firstname: "High Speed",
      secondname: "",
      description: "",
      image: fullyAutomaticBagMachineImage,
      title: "High Speed Paper Cup Machine ",
      speed: 170,
      unit: "PCS/MIN",
      icon: papercup,
      items: [
        { icon: <FaCircleNotch className="text-blue-500 text-3xl" />, text: "High-Speed Synchronized Servos" },
        { icon: <FaCircleNotch className="text-green-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-yellow-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System with PLC + HMI" }
      ]
    },
    {
      firstname: "High Speed",
      secondname: "",
      description: "",
      image: paperBagMachineImage,
      title: "High Speed Paper Cup Machine  ",
      speed: 170,
      unit: "PCS/MIN",
      icon: paperbowl,
      items: [
        { icon: <FaCircleNotch className="text-blue-500 text-3xl" />, text: "High-Speed Synchronized Servos" },
        { icon: <FaCircleNotch className="text-green-500 text-3xl" />, text: "Advanced Sealing Technology" },
        { icon: <FaCircleNotch className="text-yellow-500 text-3xl" />, text: "Two-Step Curling Process" },
        { icon: <FaCircleNotch className="text-red-500 text-3xl" />, text: "Comprehensive Control System with PLC + HMI" }
      ]
    },
  ];

  return (
    <div className="container mt-14 mx-auto px-4">
      <Stepper />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            firstname={card.firstname}
            secondname={card.secondname}
            image={card.image}
            title={card.title}
            description={card.description}
            speed={card.speed}
            unit={card.unit}
            icon={card.icon}
            items={card.items}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
