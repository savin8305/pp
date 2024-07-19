import React, { useState } from "react";
import Image from "next/image";
import stepper_glassicon from "../../../public/assets/stepper_glassicon.png";
import stepper_bowlicon from "../../../public/assets/stepper_bowlicon.png";
import stepper_allicon from "../../../public/assets/stepper_allicon.png";
import stepper_bagicon from "../../../public/assets/stepper_bagicon.png";
import paperlid from "../../../public/assets/nav_machine_icon/paperlid.png";
import paperstraw from "../../../public/assets/nav_machine_icon/paperstraw.png";

const Stepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { name: "All paper Products", icon: stepper_allicon },
    { name: "Paper cup machines", icon: stepper_glassicon },
    { name: "Paper bowl machines", icon: stepper_bowlicon },
    { name: "Paper bag machines", icon: stepper_bagicon },
    { name: "Paper plate machines", icon: paperlid },
    { name: "Paper straw machines", icon: paperstraw },
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
  };

  return (
    <div className="fixed top-14 left-0 w-full z-30">
      <div className="flex items-center justify-center py-2 relative max-w-sm mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div
              className={`flex flex-col items-center relative ${
                index === activeStep ? "text-blue-500" : "text-gray-500"
              } cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              <div
                className={`relative h-8 w-8 ${
                  index === activeStep ? "bg-slate-300 rounded-lg" : ""
                }`}
              >
                <Image
                  src={step.icon}
                  alt={step.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="text-xs mt-1 font-montserrat text-center w-20">
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center">
                <div className="h-8 border-t-2 border-dotted border-white w-8"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
