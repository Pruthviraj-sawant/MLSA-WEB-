"use client";
import React, { useEffect, useState } from 'react';

interface CardData {
  id: number;
  imgSrc: string;
  header: string;
  paragraph: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    imgSrc: 'https://coek.dypgroup.edu.in/wp-content/uploads/2024/05/image187-300x225.jpg',
    header: 'General Committee interview',
    paragraph: 'MLSA DYPCET Chapter conducted General Committee interviews to select members and raise awareness about its objectives, targeting second and third-year students, led by Prof. A.S.Yadav.',
  },
  {
    id: 2,
    imgSrc: 'https://coek.dypgroup.edu.in/wp-content/uploads/2024/05/image189-300x271.png',
    header: 'GitHub & Copilot Challenge Date ',
    paragraph: 'The MLSA DYPCET Chapter organized a 10-day GitHub & Copilot Challenge online on Microsoft Learn platform to enhance coding skills for second and third-year students, coordinated by Mr. Aditya Marathe.No. of Participants – 30',
  },
  {
    id: 3,
    imgSrc: 'https://coek.dypgroup.edu.in/wp-content/uploads/2024/05/image191-300x298.jpg',
    header: '	AI Mastery Quest: Navigating Intelligent Realms Challenge',
    paragraph: 'MLSA DYPCET Chapter conducted a 14-day AI Mastery Quest online, focusing on navigating intelligent realms, on Microsoft Learn platform.No of Participants – 95 Winners –  Chandraprakash Maurya , Suhani Ingale',
  },
  {
    id: 4,
    imgSrc: 'https://coek.dypgroup.edu.in/wp-content/uploads/2024/05/image193-300x225.jpg',
    header: 'Orientation Of MLSA DYPCET Chapter at SY & TY CSE',
    paragraph: 'The MLSA DYPCET Chapter held a four-day orientation in various classrooms to introduce the club to 50-60 second and third-year students, coordinated by Mr. Aditya Marathe.',
  },
  {
    id: 5,
    imgSrc: 'https://coek.dypgroup.edu.in/wp-content/uploads/2024/05/image195-225x300.jpg',
    header: 'Tech Talk (Git & GitHub) Date : 24-01-2024',
    paragraph: 'MLSA DYPCET Chapter held a Tech Talk on Git & GitHub, featuring guest speaker Mr. Sambhaji Gade, aimed at second and third-year students, with 40 attendees.',
  },
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cardData.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider-container overflow-hidden relative w-full max-w-8xl h-[35rem] mx-auto ">
      <div
        className="slider flex transition-transform duration-1000 ease-linear "
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className="card w-full flex-shrink-0 p-4 flex justify-center items-center flex-col [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))] shadow-lg rounded-lg "
          >
            <img src={card.imgSrc} alt={card.header} className="mb-7 -mt-4 w-[30rem] h-[18rem] object-cover rounded border-cyan-600 border-[5px]" />
            <h3 className="text-xl font-bold mb-2">{card.header}</h3>
            <p className="text-gray-700">{card.paragraph}</p>
          </div>
        ))}
      </div>

      {/* Optional Dots for navigation */}
      <div className="absolute -bottom-0 mt-10 left-1/2 transform -translate-x-1/2 flex space-x-7 ">
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
