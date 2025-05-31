"use client";
import Image from "next/image";
// import pruthvi from "@/assets/Tech Team/pruthvi.jpg"
import pru from "@/assets/Tech Team/image.png"
import sami from "@/assets/Tech Team/Sami_TechTeam.jpg"
import yash from "@/assets/Tech Team/yash.jpeg"
import prathamesh from "@/assets/Tech Team/prathmesh.jpg"
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";
import userprofile from "@/app/img/image.png";
interface DummyContentProps {
  title?: string;
  description?: string;
  secondaryPhoto: string; // Adjust if using StaticImageData
}
export default function TechTeamCards() {
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
        TACHNICAL TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

 const DummyContent: React.FC<DummyContentProps> = ({ title = "Hello, I am XYZ!!!", description = "Hii, I am a [degree/program] student specializing in [field, e.g., CSE, AI/ML, DS] and a proud member of the Microsoft Learn Student Ambassador (MLSA) program.", secondaryPhoto }) => {
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
    title: "PRUTHVIRAJ SAWANT",
    src: pru,
    content: <DummyContent title={"I am Pruthvi"}
      description={"Once a mechanical mind, now breaking into the world of code! From gears to algorithms,MERN STACK DEVLOPER, tackling DSA in Java and web development alongside some of the best (and most competitive) minds. Disciplined by habit, funny by choice—let the code games begin!"}
      secondaryPhoto={pru.src} />,
  }, {
    category: "DS",
    title: "PRATHMESH SARGAR",
    src: prathamesh,
    content: <DummyContent
    description={"Im Prathamesh from Data Science Department, Only thing I believe in is consistency, thats the key to achive the greatest things!Btw Im a tech enthusist. MERN Stack Prof. and now learning data engineering."}
    title={"And I am Prathamesh"} secondaryPhoto={prathamesh.src} />,
  },
  {
    category: "CSE",
    title: "YASH SANJAY AINAPURE",
    src: yash,
    content: <DummyContent title={"I'm Yash"}
      description={"Ohayo!! Im third year computer science student, intrested in  Web-developement, love playing chess and remove bugs, currently developing my future."}
      secondaryPhoto={yash.src} />,
  },
  {
    category: "CSE",
    title: "SAMI BHADGOANKAR",
    src: sami,
    content: <DummyContent title={"Sami desu!!"} secondaryPhoto={sami.src} description={"Tech enthusiast by day, anime binge-watcher by night. I'm a Linux-loving, full-stack web wizard and knows Python, JavaScript, TypeScript, and Java. When I’m not coding, you’ll find me immersed in the world of comics and anime!"} />,
  },




];
