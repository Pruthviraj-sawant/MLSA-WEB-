"use client";
import Image from "next/image";
import pruthvi from "@/app/img/villain 3.jpg";
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

const DummyContentCreative = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Creativity is at the heart of innovation.
              </span>{" "}
              Our creative team thrives on fresh ideas, pushing boundaries to
              craft visually stunning and engaging content. From graphic design
              to storytelling, we’re ready to inspire.
            </p>
            <Image
              src={pruthvi}
              alt="Creative team mockup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Innovation",
    title: "PRATHMESH PATIL",
    src: "",
    content: <DummyContentCreative />,
  },
  {
    category: "Design",
    title: "AAHILAHMED NADAF",
    src: "",
    content: <DummyContentCreative />,
  },
  {
    category: "Innovation",
    title: "VEENA PATIL",
    src: "",
    content: <DummyContentCreative />,
  },
  {
    category: "Design",
    title: "SHRIJYA PATIL",
    src: "",
    content: <DummyContentCreative />,
  },
];
