"use client";
import Image from "next/image";
// import pruthvi from "@/app/img/villain 3.jpg";
import shreja from '@/assets/Creative Team/ShrijyaPatil.jpg'
import veena from '@/assets/Creative Team/Veena Patil_Creative Team.jpg'
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export default function CreativeTeamCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-20">
        CREATIVE TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContentCreative = ({ title, description ,secondaryPhoto }) => {
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
    title: "PRATHMESH PATIL",
    src: "",
    content: <DummyContentCreative title={"Hi! I am Prathamesh Patil"}  secondaryPhoto={veena}/>,
  },
  {
    category: "CSE",
    title: "AAHILAHMED NADAF",
    src: "",
    content: <DummyContentCreative title={"Hi! I am Aahilahmad Nadaf"}  secondaryPhoto={veena}/>,
  },
  {
    category: "CSE",
    title: "VEENA PATIL",
    src: veena,
    content: <DummyContentCreative title={"Hi! I am Veena Patil"}  secondaryPhoto={veena}/>,
  },
  {
    category: "CSE",
    title: "SHRIJYA PATIL",
    src: shreja,
    content: <DummyContentCreative title={"Hi! I am Shrijya Patil"} secondaryPhoto={shreja} />,
  },
];
