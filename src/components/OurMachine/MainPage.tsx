"use client";
import React from "react";
import Stepper from "./Stepper";
import Card from "./Card";
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
const MainPage: React.FC = () => {
  const cards = [
    {
      image:paperBowlMachineImage,
      title: "Servo Driven Paper Cup Machine",
      speed: 123,
      unit: "PCS/MIN",
      icon:papercup,
    },
    {
        image: paperBagMachineImage,
        title: "High Speed Paper Cup Machine",
        speed: 170,
        unit: "PCS/MIN",
        icon: paperbowl,
      },
      {
        image: paperCupMachineImage,
        title: "High Speed Paper Cup Machine",
        speed: 170,
        unit: "PCS/MIN",
        icon:paperbag1,
      },
      {
        image: paperFlexoMachineImage,
        title: "High Speed Paper Cup Machine",
        speed: 170,
        unit: "PCS/MIN",
        icon: paperbowl,
      },
      {
        image: paperLunchBoxMachine,
        title: "High Speed Paper Cup Machine",
        speed: 170,
        unit: "PCS/MIN",
        icon:paperlid,
      },
      {
        image: paperStrawMachine,
        title: "High Speed Paper Cup Machine",
        speed: 170,
        unit: "PCS/MIN",
        icon:paperstraw,
      },
      {
        image: fullyAutomaticBagMachineImage,
        title: "High Speed Paper Cup Machine",
        speed: 170,
        unit: "PCS/MIN",
        icon: papercup,
      },
      {
        image: paperBagMachineImage,
        title: "High Speed Paper Cup Machine",
        speed: 170,
        unit: "PCS/MIN",
        icon:paperbowl,
      },
    // Add more card data as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <Stepper />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-4">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            speed={card.speed}
            unit={card.unit}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
