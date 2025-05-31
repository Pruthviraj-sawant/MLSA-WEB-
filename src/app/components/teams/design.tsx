"use client";
import Image from "next/image";
// import pruthvi from "@/app/img/villain 3.jpg";
import asma from '@/assets/Media Hub/asma.jpeg'
import siddhi from '@/assets/Media Hub/Siddhi_MediaHubMember.jpg'
import prathamesh from '@/assets/Media Hub/bosco.jpg'
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import userprofile from "@/app/img/image.png";

interface DummyContentProps {
  title?: string;
  description?: string;
  secondaryPhoto: string; // Adjust if using StaticImageData
}
export default function  DesignTeamCarouselDemo() {
 const cards = data.map((card, index) => (
    <Card
      key={index}
      card={{ 
        ...card, 
        src: typeof card.src === "object" && card.src !== null && "src" in card.src 
          ? (card.src ).src 
          : card.src 
      }}
      index={index}
    />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans mt-20">
        DESIGN TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

 const DummyContentDesign: React.FC<DummyContentProps> = ({ title = "Hello, I am XYZ!!!", description = "Hii, I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program.", secondaryPhoto }) => {
   return (
     <div className="bg-neutral-800 p-4 md:p-14 rounded-3xl mb-4">
       <p className="text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
         <span className="font-bold text-neutral-200">{title}</span>{"  "}
         {description}
       </p>
       <Image
         src={secondaryPhoto}
         alt="Profile Picture"
         height={200}
         width={200}
         className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
       />
     </div>
   );
 };

const data = [
  {
    category: "CSE",
    title: "ASMA KAZI",
    src: asma,
    content: <DummyContentDesign title={"Hello, I'm Asma Kazi"}  secondaryPhoto={asma.src} />,
  },
  {
    category: "CSE",
    title: "ARYA SUTAR",
    src: userprofile,
    content: <DummyContentDesign title={"Hello, I'm Arya Sutar"} secondaryPhoto={""}/>,
  },
  {
    category: "CSE",
    title: "Sidhhi",
    src: siddhi,
    content: <DummyContentDesign title={"Hello, I'm Siddhie"} secondaryPhoto={siddhi.src} />,
  },
  {
    category: "CSE",
    title: "Prathamesh",
    src: prathamesh,
    content: <DummyContentDesign title={"Hello, I'm Prathamesh"} secondaryPhoto={prathamesh.src} />,
  },
  {
    category: "CSE",
    title: "VINAY MANATE",
    src: userprofile,
    content: <DummyContentDesign title={"Hello, I'm Vinay Manate"}  secondaryPhoto={asma.src}/>,
  },
];
