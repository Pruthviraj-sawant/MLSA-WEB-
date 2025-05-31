"use client";
import Image from "next/image";
// import pruthvi from "@/app/img/villain 3.jpg"
import pradeep from "@/app/img/Pradeep Singh_Outreach & Comms memeber.jpg"
import anuksha from '@/assets/Outreach & Communication Team/Anuksha_OutreachandCommunication.jpg'
import anuksha2 from '@/assets/Outreach & Communication Team/Anuksha2.jpg'
import siddhant from '@/assets/Outreach & Communication Team/Siddhant Rahul Kirte - Outreach & Communications Coordinator copy.png'
import siddhant2 from '@/assets/Outreach & Communication Team/siddhant2.png'
import samruddhi from '@/assets/Outreach & Communication Team/samruddhi.jpg'
import suhana from '@/assets/Outreach & Communication Team/suhana.jpg'
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import userprofile from "@/app/img/image.png";
interface DummyContentProps {
  title?: string;
  description?: string;
  secondaryPhoto: string; // Adjust if using StaticImageData
}
export default function  Outreach() {
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
        OUTREACH TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

 const DummyContent: React.FC<DummyContentProps> = ({ title = "Hello, I am XYZ!!!", description = "Hii, I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program.", secondaryPhoto }) => {
   return (
     <div className="bg-neutral-800 p-4 md:p-14 rounded-3xl mb-4">
       <p className="text-neutral-200 text-base md:text-2xl font-sans max-w-3xl mx-auto">
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
    category: "Artificial Intelligence",
    title: "SIDDHANT KIERTE",
    src: siddhant,
  content: <DummyContent title={"Hey!, I'm Siddhant kierte"} secondaryPhoto={siddhant2.src} />,
  },
  {
    category: "Product",
    title: "Anuksha",
    src: anuksha,
    content: <DummyContent title={"Hey!, I'm Anuksha"} secondaryPhoto={anuksha2.src} />,
  },
  {
    category: "Productivity",
    title: "SAMRUDDHI PATIL",
    src: samruddhi,
    content: <DummyContent title={"Hey!, I'm Samruddhi"} secondaryPhoto={samruddhi.src}  />,
  },
  {
    category: "Product",
    title: "SUHANA PATEL",
    src: suhana,
    content: <DummyContent title={"Hey!, I'm Suhana Patel"} secondaryPhoto={suhana.src} />,
  },

  {
    category: "Product",
    title: "SNEHA GAIKWAD",
    src: userprofile,
    content: <DummyContent title={"Hey!, I'm Sneha Gaikwad"} secondaryPhoto={""}/>,
  },

  {
    category: "Product",
    title: "PRADEEP SINGH",
    src: pradeep,
    content: <DummyContent title={"Hey!, I'm Pradeep Singh"} secondaryPhoto={""}/>,
  },
 
];
