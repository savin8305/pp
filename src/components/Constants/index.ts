import { FaLeaf, FaProjectDiagram, FaLightbulb, FaRecycle } from 'react-icons/fa';
  import {
    papercup,
    paperplate2,
    paperbowl,
    paperlid,
    paperstraw,
    allproduct,
    paperbag1,
    missionImage,
    companyImage,
    strengthImage,
    pinkCityImage,
    paperBowlMachineImage,
    paperBagMachineImage,
    paperPlateMachineImage,
    paperFlexoMachineImage,
    fullyAutomaticBagMachineImage,
    PCM110WithPLC,
    paperStrawMachine,
    BookServiceImage,
    paperLunchBoxMachine
  } from "../../../public/assets";
  import { StaticImageData } from 'next/image';
interface Images {
  paperBowlMachineImage: StaticImageData;
  paperBagMachineImage: StaticImageData;
  PCM110WithPLC: StaticImageData;
  paperPlateMachineImage: StaticImageData;
  paperFlexoMachineImage: StaticImageData;
  fullyAutomaticBagMachineImage: StaticImageData;
  paperStrawMachine: StaticImageData;
  paperLunchBoxMachine:StaticImageData;
}

export const images: Images = {
paperBowlMachineImage:paperBowlMachineImage,
paperBagMachineImage:paperBagMachineImage,
PCM110WithPLC:PCM110WithPLC,
paperPlateMachineImage:paperPlateMachineImage ,
paperFlexoMachineImage:paperFlexoMachineImage,
fullyAutomaticBagMachineImage:fullyAutomaticBagMachineImage,
paperStrawMachine:paperStrawMachine,
paperLunchBoxMachine:paperLunchBoxMachine
};

  export const items = [
    {
      title: "Sustainability",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-green-100",
      icon: FaLeaf,
    },
    {
      title: "Featured Projects",
      description:
        "Paper industry adopts biodegradable materials and enhances recycling efforts.",
      color: "bg-purple-100",
      icon: FaProjectDiagram,
    },
    {
      title: "Innovation",
      description: "New technologies in paper manufacturing increase efficiency.",
      color: "bg-blue-100",
      icon: FaLightbulb,
    },
    {
      title: "Recycling",
      description:
        "Recycling initiatives in the paper industry have grown significantly.",
      color: "bg-yellow-100",
      icon: FaRecycle,
    },
  ];
  
  export const titlesWithImages = [
    { title: "Mission & Vision", image: missionImage },
    { title: "Our Company", image: companyImage },
    { title: "Our Strength", image: strengthImage },
    { title: "The Pink City", image: pinkCityImage },
  ];
  // links for navbar
  export const links = [
    {
      name: "About Us",
      comp: "AboutUs",
    },
    {
      name: "Products",
    },
    {
      name: "Application",
    },
    {
      name: "Solutions",
    },
    {
      name: "Support",
    },
  
    {
      name: "Resources",
    },
    {
      name: "Videos",
    },
  ];

  
  // items for banners.jsx
  export const Machines = [
    {
      name: "NS-015",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-016",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-017",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-018",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-019",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "NS-020",
      image: "PCM110WithPLC",
      category: "Paper Cup Machine,All Products",
      icon: papercup,
    },
    {
      name: "Paper Bowl Machine 01",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "Paper Bowl Machine 02",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "Paper Bowl Machine 03",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
    {
      name: "Paper Bowl Machine 04",
      image: "paperBowlMachineImage",
      category: "Paper Bowl Machine,All Products",
      icon: paperbowl,
    },
  
    {
      name: "NS-021",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "NS-022",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "Cybertruck",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
    {
      name: "Cybertruck2",
      image: "paperPlateMachineImage",
      category: "Paper Plate Machine,All Products",
      icon: paperplate2,
    },
  
    {
      name: "Paper Flexo Machine",
      image: "paperFlexoMachineImage",
      category: "Paper Flexo Machine,All Products",
      icon: paperlid,
    },
    {
      name: "Paper Flexo Machine",
      image: "paperFlexoMachineImage",
      category: "Paper Flexo Machine,All Products",
      icon: paperlid,
    },
    {
      name: "Paper Bag Machine1",
      image: "paperBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    },
    {
      name: "Paper Flexo Machine2",
      image: "paperFlexoMachineImage",
      category: "Paper Flexo Machine,All Products",
      icon: paperlid,
    },
    {
      name: "Paper Flexo Machine3",
      image: "paperFlexoMachineImage",
      category: "Paper Flexo Machine,All Products",
      icon: paperlid,
    },
    {
      name: "Paper Bag Machine new",
      image: "fullyAutomaticBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    }, {
      name: "Paper Bag Machine1",
      image: "fullyAutomaticBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    }, {
      name: "Paper Bag Machine new2",
      image: "fullyAutomaticBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    }, {
      name: "Paper Bag Machine new3",
      image: "fullyAutomaticBagMachineImage",
      category: "Paper Bag Machine,All Products",
      icon: paperbag1,
    },
  
    {
      name: "Paper Straw Machine",
      image: "paperStrawMachine",
      category: "Paper Straw Machine,All Products",
      icon: paperstraw,
    },
    {
      name: "Paper Straw Machine1",
      image: "paperStrawMachine",
      category: "Paper Straw Machine,All Products",
      icon: paperstraw,
    },
    {
      name: "Paper Straw Machine2",
      image: "paperStrawMachine",
      category: "Paper Straw Machine,All Products",
      icon: paperstraw,
    },
    {
      name: "Paper Straw Machine3",
      image: "paperStrawMachine",
      category: "Paper Straw Machine,All Products",
      icon: paperstraw,
    },
    
    {
      name: "Paper Straw Machine4",
      image: "paperStrawMachine",
      category: "Paper Straw Machine,All Products",
      icon: paperstraw,
    },
    {
      name: "Paper Lunch Box Machine",
      image: "paperLunchBoxMachine",
      category: "Paper Lunch Box Machine,All Products",
      icon: paperstraw,
    },
    {
      name: "Paper Lunch Box Machine1",
      image: "paperLunchBoxMachine",
      category: "Paper Lunch Box Machine,All Products",
      icon: paperstraw,
    },
    {
      name: "Paper Lunch Box Machine2",
      image: "paperLunchBoxMachine",
      category: "Paper Lunch Box Machine,All Products",
      icon: paperstraw,
    },
    {
      name: "Paper Lunch Box Machine3",
      image: "paperLunchBoxMachine",
      category: "Paper Lunch Box Machine,All Products",
      icon: paperstraw,
    },
  ];
  
  export const SidebarLinks = [
    {
      name: "Paper Cup Machine",
      link: "/Paper Cup Machine",
      icon: papercup,
    },
    {
      name: "Paper Bowl Machine",
      link: "/Paper Bowl Machine",
      icon: paperbowl,
    },
    {
      name: "Paper Plate Machine",
      link: "/Paper Plate Machine",
      icon: paperplate2,
    },
    {
      name: "Paper Flexo Machine",
      link: "/Paper Flexo Machine",
      icon: paperlid,
    },
    {
      name: "Paper Bag Machine",
      link: "/Paper Bag Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Straw Machine",
      link: "/Paper Straw Machine",
      icon: paperstraw,
    },
    {
      name: "Paper Lunch Box Machine",
      link: "/Lunch Box Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Cutting Machine",
      link: "/Paper Cutting Machine",
      icon: paperbag1,
    },
    {
      name: "Slitting Machine",
      link: "/Slitting Machine",
      icon: paperbag1,
    },
    {
      name: "Coating Machine",
      link: "/Coating Machine",
      icon:paperbag1,
    },
    {
      name: "Corrugation Machine",
      link: "/Corrugation Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Handle Cup Machine",
      link: "/Paper Handle Cup Machine",
      icon: paperbag1,
    },
    {
      name: "Die Cutting Machine",
      link: "/Die Cutting Machine",
      icon: paperbag1,
    },
    {
      name: "Insulated Cup Machine",
      link: "/Insulated Cup Machine",
      icon: paperbag1,
    },
    {
      name: "Sleeve Making Machine",
      link: "/Sleeve Making Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Cutlery Machine",
      link: "/Paper Cutlery Machine",
      icon: paperbag1,
    },
    {
      name: "Plastic Lid Machine",
      link: "/Plastic Lid Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Bucket Machine",
      link: "/Paper Bucket Machine",
      icon: paperbag1,
    },
    {
      name: "Paper Lid Machine",
      link: "/Paper Lid Machine",
      icon: paperbag1,
    },
    {
      name: "Octagonal Paper Box Forming Machine",
      link: "/Octagonal Paper Box Forming Machine",
      icon:paperbag1,
    },
    {
      name: "Rectangular Flat Bottom Bowl Machine",
      link: "/Rectangular Flat Bottom Bowl Machine",
      icon: paperbag1,
    },
    {
      name: "Rectangular Flat Bottom Bowl Machine (Two Compartment)",
      link: "/Rectangular Flat Bottom Bowl Machine (Two Compartment)",
      icon: paperbag1,
    },
    {
      name: "Carton Erecting Machine",
      link: "/Carton Erecting Machine",
      icon: paperbag1,
    },
  ];

  // support itemm
  export const supporItem = [
    { title: "Book a Service", image: BookServiceImage },
    { title: "Genuine Parts", image: BookServiceImage },
    { title: "User Guide", image: BookServiceImage },
    { title: "Machine Warranty", image: BookServiceImage },
    { title: "Additional Item 1", image: BookServiceImage },
    { title: "Additional Item 2", image: BookServiceImage },
    { title: "Additional Item 3", image: BookServiceImage },
    { title: "Additional Item 4", image: BookServiceImage },
    { title: "Additional Item 5", image: BookServiceImage },
  ];
  export const DataBankItem = [
    { title: "Paper Cup Machine", image:paperBagMachineImage },
    { title: "Paper Bowl Machine", image: paperBowlMachineImage },
    { title: "Paper Straw Machine", image: paperPlateMachineImage },
    { title: "Paper Bucket Machine", image: paperStrawMachine },
    { title: "Additional Item 4", image: BookServiceImage },
    { title: "Additional Item 5", image: BookServiceImage },
  ];
  