import tourismImg from "../public/assets/projects/space-tourism.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const tourism = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={tourismImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 space-y-3">
          <h2>Space Tourism Website</h2>
          <p>May 2022 - Jun 2022</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid items-center md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <p className="font-bold text-4xl">Overview</p>
          <p>
            This is a solution to the{" "}
            <a
              href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              space tourism website challenge on Frontend Mentor.
            </a>
            <br />
            This is a fully responsive website which has various hover states
            and different pages with toggles between tabs to see new information
            about space tourism. <br /> Some of my learnings include CSS{" "}
            <code>.class1.class2</code> selectors, feature queries, various
            Flexbox and Grid properties, local undefined custom properties,
            ARIA, building interactive elements with JavaScript and WAI-ARIA
            roles and semantic HTML practices.
          </p>
          <div className="space-x-2">
            <a
              href="https://kinzume.github.io/space-tourism-website-main/"
              target="_blank"
              rel="noreferrer"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kinzume/space-tourism-website-main"
              target="_blank"
              rel="noreferrer"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Code
            </a>
          </div>
          <Link href="/..">
            <p className="underline cursor-pointer hover:text-[#93FF75] w-fit">
              Back to projects
            </p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 bg-[#0F1E35] rounded-xl p-3 space-y-3">
          <p className="text-center font-bold">Technologies</p>
          <ul className="grid grid-cols-3 md:grid-cols-1">
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Semantic HTML</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>CSS custom properties</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Flexbox</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Grid</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Mobile-first workflow</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>JavaScript (ES6)</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default tourism;
