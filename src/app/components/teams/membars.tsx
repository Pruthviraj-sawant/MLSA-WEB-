// "use client";
// import Image from "next/image";
// import pruthvi from "@/app/img/PRUTHVI.jpg"
// import React from "react";
// import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

// export default function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-[3rem] md:text-5x text-neutral-800 dark:text-neutral-200 font-extrabold">
//         MLSA TEAM'S
//       </h2>
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-20">TECH TEAM</h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(1).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 PRUTHVI SAWANT
//               </span>{" "}
//               📚 Currently, I am furthering my education at D.Y. Patil College of Engineering, Kolhapur, where I am pursuing a Bachelor's degree in Computer Science and Engineering.

// 💻 In addition to my engineering skills, I am proficient in programming languages like C , C++, Java , HTML, CSS, Tailwind , JS , React.js which provide me with a strong foundation in software development.

//             </p>
//             <Image
//               src=""
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };
// const DummContentt = () => {
//   return (
//     <>
//       {[...new Array(1).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//               yoooooooooooooooooooooooooooooooooooooooooo
//               </span>{"  "}
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error harum commodi reprehenderit, aperiam atque architecto perspiciatis sunt consectetur adipisci quisquam porro nulla ex non cupiditate facilis officiis ratione provident.
//               Tenetur voluptatem quia sint omnis amet quaerat et similique. Saepe consequatur adipisci laborum molestias quo quae quisquam. Voluptas saepe ipsa dicta esse? Repellendus dolorem possimus laborum et tenetur, libero necessitatibus?
//               Aliquid earum aperiam itaque consequatur id, quia doloremque, cupiditate error distinctio eligendi dolore mollitia in libero quasi voluptatibus aliquam iure dicta fuga minus ab ipsa minima similique? Tempore, alias minima!
//             </p>
//             <Image
//               src={""}
//               alt="Macbook mockup from Aceternity UI"
//               height="200"
//               width="200"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const DummContent = () => {
//     return (
//       <>
//         {[...new Array(1).fill(1)].map((_, index) => {
//           return (
//             <div
//               key={"dummy-content" + index}
//               className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//             >
//               <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//                 <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                  hiiiiiiiiiiiiiiiiiiii prithvi
//                 </span>{"  "}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque error harum commodi reprehenderit, aperiam atque architecto perspiciatis sunt consectetur adipisci quisquam porro nulla ex non cupiditate facilis officiis ratione provident.
//                 Tenetur voluptatem quia sint omnis amet quaerat et similique. Saepe consequatur adipisci laborum molestias quo quae quisquam. Voluptas saepe ipsa dicta esse? Repellendus dolorem possimus laborum et tenetur, libero necessitatibus?
//                 Aliquid earum aperiam itaque consequatur id, quia doloremque, cupiditate error distinctio eligendi dolore mollitia in libero quasi voluptatibus aliquam iure dicta fuga minus ab ipsa minima similique? Tempore, alias minima!
//               </p>
//               <Image
//                 src={""}
//                 alt="Macbook mockup from Aceternity UI"
//                 height="200"
//                 width="200"
//                 className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//               />
//             </div>
//           );
//         })}
//       </>
//     );
//   };
// const data = [
//   {
//     category: "WEBSITE DEVLOPER",
//     title: "PRUTHVI SAWANT",
//     src: pruthvi,
//   content: <DummyContent />,
//   },
//   {
//     category: "WEBSITE DEVLOPER",
//     title: "YASH AINAPURE",
//     src: "",
//     content: <DummContent />,
//   },
//   {
//     category: "WEBSITE DEVLOPER",
//     title: "SAMI BHADGOANKAR",
//     src: "",
//     content: <DummContentt />,
//   },

//   {
//     category: "WEBSITE DEVLOPER",
//     title: "PRATHMESH SARGAR",
//     src: "",
//     content: <DummyContent />,
//   },

 
// ];
"use client";
import Image from "next/image";
import pruthvi from "@/app/img/PRUTHVII.jpg";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src || index} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-[3rem] md:text-5xl text-neutral-800 dark:text-neutral-200 font-extrabold">
        MLSA TEAM'S
      </h2>
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-20">
        TECH TEAM
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        PRUTHVI SAWANT
      </span>{" "}
      📚 Currently, I am furthering my education at D.Y. Patil College of Engineering, Kolhapur, pursuing a Bachelor's degree in Computer Science and Engineering.
      💻 I am proficient in programming languages like C, C++, Java, HTML, CSS, Tailwind, JS, and React.js, providing me with a strong foundation in software development.
    </p>
    <Image
      src={pruthvi}
      alt="Pruthvi Sawant"
      height="500"
      width="500"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const DummContentt = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Yoooooo!
      </span>{" "}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error harum commodi reprehenderit, architecto perspiciatis sunt consectetur adipisci...
    </p>
    <Image
      src=""
      alt="Placeholder"
      height="200"
      width="200"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const DummContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Hi Pruthvi
      </span>{" "}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error harum commodi reprehenderit, architecto perspiciatis sunt consectetur adipisci...
    </p>
    <Image
      src=""
      alt="Placeholder"
      height="200"
      width="200"
      className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
    />
  </div>
);

const data = [
  {
    category: "WEBSITE DEVELOPER",
    title: "PRUTHVI SAWANT",
    src: pruthvi,
    content: <DummyContent />,
  },
  {
    category: "WEBSITE DEVELOPER",
    title: "YASH AINAPURE",
    src: "",
    content: <DummContent />,
  },
  {
    category: "FULLStack WEBDEV",
    title: "SAMI BHADGOANKAR",
    src: "",
    content: <DummContentt />,
  },
  {
    category: "WEBSITE DEVELOPER",
    title: "PRATHMESH SARGAR",
    src: "",
    content: <DummyContent />,
  },
];
