"use client";
import Image from "next/image";

import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export default function Outreach() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-20">OUTREACH AND COMMUNICATION TEAM</h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
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
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src=""
              alt="Macbook mockup from Aceternity UI"
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

const DummContent = () => {
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
                 hiiiiiiiiiiiiiiiiiiii prithvi
                </span>{"  "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error harum commodi reprehenderit, aperiam atque architecto perspiciatis sunt consectetur adipisci quisquam porro nulla ex non cupiditate facilis officiis ratione provident.
                Tenetur voluptatem quia sint omnis amet quaerat et similique. Saepe consequatur adipisci laborum molestias quo quae quisquam. Voluptas saepe ipsa dicta esse? Repellendus dolorem possimus laborum et tenetur, libero necessitatibus?
                Aliquid earum aperiam itaque consequatur id, quia doloremque, cupiditate error distinctio eligendi dolore mollitia in libero quasi voluptatibus aliquam iure dicta fuga minus ab ipsa minima similique? Tempore, alias minima!
              </p>
              <Image
                src={""}
                alt="Macbook mockup from Aceternity UI"
                height="200"
                width="200"
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
    category: "Artificial Intelligence",
    title: "SIDDHANT KIERTE",
    src: "",
  content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "SAMRUDDHI PATIL",
    src: "",
    content: <DummContent />,
  },
  {
    category: "Product",
    title: "SUHANA PATEL",
    src: "",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "SNEHA GAIKWAD",
    src: "",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "PRADEEP SINGH",
    src: "",
    content: <DummyContent />,
  },
 
];
