import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
        <div className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className=" mt-40 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-slate-200 via-slate-500 to-slate-700 [text-shadow:0_0_rgba(0,0,0,0.1)] font-bold ">
            <div className="text-[4rem] text-center">MICROSOFT LEARN <p>STUDENT AMBASSDORS</p></div>
          </div>
          <div className=" bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <p className="text-[12rem] text-center font-extrabold ">MLSA</p>
          </div>
        </div>
     
    </BackgroundBeamsWithCollision>
  );
}
