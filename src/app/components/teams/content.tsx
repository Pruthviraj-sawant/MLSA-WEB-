"use client";
import Image from "next/image";

import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import anushka from '@/assets/Content Creator Team/AnushkaB.jpg'
import shruti from '@/assets/Content Creator Team/shruti.jpg'
export default function CONTENTTEAM() {
  const cards = data.map((card, index) => (
    <Card key={index} card={{ ...card, src: typeof card.src === "string" ? card.src : card.src.src }} index={index} />
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

const DummyContentOutreach = ({ title, description ,secondaryPhoto }) => {
  if (!title) title = "Hello i am XYZ!!!"
  if (!description) description = "Hii, I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in [specific interest area, e.g., development, AI, data science]."

  return (
    <div
      className="bg-[#F5F5F7] dark:bg-neutral-800 p-4 md:p-14 rounded-3xl mb-4"
    >
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>{"  "}
      {description}
      </p>
      <Image
        src={secondaryPhoto}
        alt="Macbook mockup from Aceternity UI"
        height="200"
        width="200"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );

};
const data = [
  {
    category: "CSE",
    title: "OMKAR RAO",
    src: shruti, // Ensure a valid StaticImageData instead of an empty string
    content: <DummyContentOutreach title="Hello, I am Omkar Rao" secondaryPhoto={shruti} />,
  },
  {
    category: "CSE",
    title: "SHRUTI SURVE",
    src: shruti,
    content: <DummyContentOutreach title="Hello, I am Shruti Surve" secondaryPhoto={shruti} />,
  },
  {
    category: "CSE",
    title: "ANUSHKA BAWKAR",
    src: anushka,
    content: <DummyContentOutreach title="Hello, I am Anushka Bawkar" secondaryPhoto={anushka} />,
  },
];

