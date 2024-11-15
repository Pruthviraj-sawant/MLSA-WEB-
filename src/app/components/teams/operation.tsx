"use client";
import Image from "next/image";
import pruthvi from "@/app/img/villain 3.jpg";
import nayan from '@/assets/Operation and Documentation Team/Nayan Tambave_Head Operation & Documentation.jpeg'
import shruti from '@/assets/Operation and Documentation Team/Shruti_DocumentationandOperation.jpg'
import sohan from '@/assets/Operation and Documentation Team/Sohan Operation and documentation.jpg'
import anish from '@/assets/Operation and Documentation Team/anish.jpg'
import varun from '@/assets/Operation and Documentation Team/varun.jpg'
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export default function OperationalTeamCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-20">
        OPERATIONAL TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}



const DummyContentOperational = ({ title, description ,secondaryPhoto }) => {
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
    category: "CO-ORDINATOR",
    title: "NAYAN THAMBAVE",
    src: nayan,
    content: <DummyContentOperational 
    description={"Hii, I am a TY-CSE student specializing in Mobile Applications, Java, Flutter and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in Android developement."}
    secondaryPhoto={nayan} title={"Hi, I'm Nayan Thambave"} />,
  },
  {
    category: "CO-ORDINATOR",
    title: "ARYA CHODANKAR",
    src: "",
    content: <DummyContentOperational title={"Hi, I'm Arya Chodankar"} />,
  },
  {
    category: "Efficiency",
    title: "ANISH BHOSALE",
    src: anish,
    content: <DummyContentOperational secondaryPhoto={anish} title={"Hi, I'm Anish Bhosle"}  />,
  },
  {
    category: "Efficiency",
    title: "Shruti",
    src: shruti,
    content: <DummyContentOperational secondaryPhoto={shruti} title={"Hi, I'm Shruti"} />,
  },
  {
    category: "Teamwork",
    title: "SOHAN KURALE",
    src: sohan,
    content: <DummyContentOperational secondaryPhoto={sohan} title={"Hi, I'm Sohan Kurale"} />,
  },
  {
    category: "Teamwork",
    title: "VARUN SANGEWAR",
    src: varun,
    content: <DummyContentOperational title={"Hi, I'm Varun Sangewar"}  secondaryPhoto={varun}/>,
  },
];
