"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import anushka from '@/assets/Content Creator Team/AnushkaB.jpg';
import shruti from '@/assets/Content Creator Team/shruti.jpg';

// Define TypeScript Interface for Props
interface DummyContentProps {
  title?: string;
  description?: string;
  secondaryPhoto: string; // Adjust if using StaticImageData
}

// Component Function with Explicit Props
const DummyContentOutreach: React.FC<DummyContentProps> = ({ title = "Hello, I am XYZ!!!", description = "Hii, I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program.", secondaryPhoto }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{title}</span>{"  "}
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
    title: "OMKAR RAO",
    src: "",
    content: <DummyContentOutreach title="Hello, I am Omkar Rao" secondaryPhoto={shruti.src} />,
  },
  {
    category: "CSE",
    title: "SHRUTI SURVE",
    src: shruti,
    content: <DummyContentOutreach title="Hello, I am Shruti Surve" secondaryPhoto={shruti.src} />,
  },
  {
    category: "CSE",
    title: "ANUSHKA BAWKAR",
    src: anushka,
    content: <DummyContentOutreach title="Hello, I am Anushka Bawkar" secondaryPhoto={anushka.src} />,
  },
];

export default function CONTENTTEAM() {
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
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-20">
        CONTENT-CREATOR TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
