"use client";
import mahesh from "@/assets/Mahesh Patil_Co-Head.jpg";
import pru from "@/app/img/villain 3.jpg";
import Image from "next/image";
import shrey from "@/assets/shreyash.jpeg";
import mait from '@/assets/maitili.jpg'
import shubham from '@/assets/shubham.jpg'
import siman from '@/assets/coordiantor ds.jpg'
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Link from "next/link";


export default function ThreeDCardDemo() {
  return (
    
    <div className="flex flex-col items-center w-full px-4">
      <div className="text-[2rem]  md:text-[3rem] mt-20 flex space-x-2">
       Our <div className="text-blue-700 ml-4">Leads</div>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-14">
        {/* Card 1 */}
        <CardContainer className="inter-var ml-12 mr-5 ">
          <CardBody  className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              HEAD
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Shreyas Patil 
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={shrey}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
              <p className="text-[14px]">β -Microsoft Learn Student Ambassadors | Python | Machine Learning | Artificial Intelligence | Web Development </p>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://www.linkedin.com/in/shreypatil/?originalSubdomain=in"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white -mt-24 border-white border-2"
              >
                LinkedIn →
              </CardItem>
              
              {/* <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem> */}
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 2 */}
        <CardContainer className="inter-var ml-16 mr-5">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
             CO-HEAD
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              Mahesh Patil
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={mahesh}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
              <p className="text-[14px]"> IOT | Python | Machine Learning | Artificial Intelligence </p>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white -mt-24 border-white border-2"
              >
                LinkedIn →
              </CardItem>
              {/* <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem> */}
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 3 */}
        <CardContainer className="inter-var ml-16 mr-5">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              DEPT-CO (CSE)
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              MAITHILI GHATGE
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={mait}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
                 <p className="text-[14px]"> Python | Android Developer | Website Developer | </p>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white -mt-24 border-white border-2"
              >
                LinkedIn →
              </CardItem>
              {/* <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem> */}
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 4 */}
        <CardContainer className="inter-var ml-16 mr-5">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            DEPT-CO (DS)
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              SIMEEN PATHAN
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={siman}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
              <p className="text-[14px]">Microsoft Learn Student Ambassador (β)| Open Source Contributor | Cybersecurity | Data Science | Cloud Computing </p>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white -mt-24 border-white border-2"
              >
                LinkedIn →
              </CardItem>
              {/* <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem> */}
            </div>
          </CardBody>
        </CardContainer>

        {/* Card 5 */}
        <CardContainer className="inter-var ml-16 mr-5">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.9] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[18rem] h-[30rem] rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            DEPT-CO (AIML)
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
             SHUBHAM BABANVAR
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={shubham}
                height="1200"
                width="500"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl grayscale hover:grayscale-0 transition-all duration-300"
                alt="thumbnail"
              />
              <p className="text-[14px]"> Data Analytics | Python | Machine Learning | Artificial Intelligence </p>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href=""
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white -mt-24 border-white border-2"
              >
                LinkedIn →
              </CardItem>
              {/* <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                About
              </CardItem> */}
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}


