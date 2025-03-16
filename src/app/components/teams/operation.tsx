"use client";
import Image from "next/image";
import arya from "@/app/img/B612_20241025_172303_558.jpg";
import nayan from '@/assets/Operation and Documentation Team/Nayan Tambave_Head Operation & Documentation.jpeg'
import shruti from '@/assets/Operation and Documentation Team/Shruti_DocumentationandOperation.jpg'
import sohan from '@/assets/Operation and Documentation Team/Sohan Operation and documentation.jpg'
import anish from '@/assets/Operation and Documentation Team/anish.jpg'
import varun from '@/assets/Operation and Documentation Team/varun.jpg'
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

interface DummyContentProps {
  title?: string;
  description?: string;
  secondaryPhoto: string; // Adjust if using StaticImageData
}
export default function  OperationalTeamCarouselDemo() {
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
        OPERATION TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

 const DummyContentOperational: React.FC<DummyContentProps> = ({ title = "Hello, I am XYZ!!!", description = "Hii, I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program.", secondaryPhoto }) => {
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
    title: "NAYAN THAMBAVE",
    src: nayan,
    content: <DummyContentOperational 
    description={"Hii, I am a TY-CSE student specializing in Mobile Applications, Java, Flutter and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in Android developement."}
    secondaryPhoto={nayan.src} title={"Hi, I'm Nayan Thambave"} />,
  },
  {
    category: "CSE",
    title: "ARYA CHODANKAR",
    src: arya,
    content: <DummyContentOperational title={"Hi, I'm Arya Chodankar"} secondaryPhoto={arya.src}/>,
  },
  {
    category: "CSE",
    title: "ANISH BHOSALE",
    src: anish,
    content: <DummyContentOperational secondaryPhoto={anish.src} title={"Hi, I'm Anish Bhosle"}  />,
  },
  {
    category: "CSE",
    title: "Shruti",
    src: shruti,
    content: <DummyContentOperational secondaryPhoto={shruti.src} title={"Hi, I'm Shruti"} />,
  },
  {
    category: "CSE",
    title: "SOHAN KURALE",
    src: sohan,
    content: <DummyContentOperational secondaryPhoto={sohan.src} title={"Hi, I'm Sohan Kurale"} />,
  },
  {
    category: "CSE",
    title: "VARUN SANGEWAR",
    src: varun,
    content: <DummyContentOperational title={"Hi, I'm Varun Sangewar"}  secondaryPhoto={varun.src}/>,
  },
];
