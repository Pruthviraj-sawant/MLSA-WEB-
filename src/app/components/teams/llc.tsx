"use client";
import Image from "next/image";
import kaif from '@/assets/SY Liberal Learning Course Team/kaif.jpeg'
import sayali from '@/assets/SY Liberal Learning Course Team/sayali.jpg'
import ashana from '@/assets/SY Liberal Learning Course Team/ashana.jpg'
import omGaikwad from '@/assets/SY Liberal Learning Course Team/Om_Gaikwad_co-head.jpg'
import sana from '@/assets/SY Liberal Learning Course Team/Sana_LLC_Cordinator.jpg'
import siddharth from '@/assets/SY Liberal Learning Course Team/SIDDHARTHAMANE_LLCHEAD.jpg'
import siddharth2 from '@/assets/SY Liberal Learning Course Team/SIDDHARTHAMANE_LLC_HEAD.jpg'
// import pulkeet from '@/assets/SY Liberal Learning Course Team/IMG_20240828_181946.jpg'
import pri from "@/assets/SY Liberal Learning Course Team/Snapchat-26817218.jpg"
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import userprofile from "@/app/img/image.png";
interface DummyContentProps {
  title?: string;
  description?: string;
  secondaryPhoto: string; // Adjust if using StaticImageData
}
export default function LLCTeamCarouselDemo() {
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
        LLC TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

 const DummyContentLLC: React.FC<DummyContentProps> = ({ title = "Hello, I am XYZ!!!", description = "Hii, I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program.", secondaryPhoto }) => {
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
    category: "CSE, LLC HEAD",
    title: "SIDDHARTH AMANE",
    src: siddharth,
    content: <DummyContentLLC 
    description={"I am a [degree/program] student specializing in CSE and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in [specific interest area, e.g., development, AI, data science]."}
    title={"Hello, I am Siddharth Amane"} secondaryPhoto={siddharth2.src} />,
  },
  {
    category: "CSE , LLC CO-HEAD",
    title: "OM GAIKWAD",
    src: omGaikwad,
    content: <DummyContentLLC 
    description={"I am a CSE student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in [specific interest area, e.g., development, AI, data science]."}
    title={"Hello, I am Om Gaikwad"} secondaryPhoto={omGaikwad.src}  />,
  },
  {
    category: "CSE",
    title: "KAIF DARWAJKAR",
    src: kaif,
    content: <DummyContentLLC 
    description={"From the world of circuits to the realm of code, I’ve transitioned from electronics to CSE with confidence and charisma. Now diving into Python, machine learning, and the dynamics of the stock market, I balance my studies with a strong knack for communication and human networking. Known for my energy, I aim to connect, inspire, and excel in this exciting journey."}
    title={"Hello, I am Kaif Darwajkar"} secondaryPhoto={kaif.src} />,
  },
  {
    category: "CSE",
    title: "PULKEET SAWANT",
    src: userprofile,
    content: <DummyContentLLC 
    description={"I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in [specific interest area, e.g., development, AI, data science]."}
    title={"Hello, I am Pulkeet Sawant"} secondaryPhoto={omGaikwad.src} />,
  },
  {
    category: "CSE",
    title: "PRIYANKA UTTURE",
    src: pri,
    content: <DummyContentLLC 
    description={"I am a AI/ML student specializing in Machine Learning and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in pyhton, numpy, tensorflow."}
    title={"Hello, I am Priyanka Utture"} secondaryPhoto={omGaikwad.src} />,
  },
  {
    category: "CSE",
    title: "ASHANA CHAVAN",
    src: ashana,
    content: <DummyContentLLC 
    description={"I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in [specific interest area, e.g., development, AI, data science]."}
    title={"Hello, I am Ashana Chavan"} secondaryPhoto={ashana.src} />,
  },
  {
    category: "CSE",
    title: "SAYALI PATIL",
    src: sayali,
    content: <DummyContentLLC 
    description={"I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in [specific interest area, e.g., development, AI, data science]."}
    title={"Hello, I am Sayali Patil"} secondaryPhoto={sayali.src} />,
  },
  {
    category: "CSE",
    title: "SANA MUJAWAR",
    src: userprofile,
    content: <DummyContentLLC 
    description={"I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program. I am passionate about technology and actively work to enhance my skills in [specific interest area, e.g., development, AI, data science]."}
    title={"Hello, I am Sana Mujawar"} secondaryPhoto={sana.src} />,
  },
 
];
