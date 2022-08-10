import calculatorImg from "../public/assets/projects/calculator.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const calculator = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
          src={calculatorImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 space-y-3">
          <h2>Calculator App</h2>
          <p>Apr 2022</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid items-center md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <p className="font-bold text-4xl">Overview</p>
          <p>
            This calculator was built with HTML, CSS and JavaScript (no
            frameworks). <br /> The user can add, subtract, multiply and divide
            numbers and display the final answer. <br /> I've added a copy of my
            first attempt at programming the buttons with JavaScript called{" "}
            <code>main.js</code>. <br /> My second attempt called{" "}
            <code>main2.js</code> uses{" "}
            <a
              href="https://www.youtube.com/watch?v=j59qQ7YWLxw&ab_channel=WebDevSimplified"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              Web Dev Simplified's video
            </a>{" "}
            as a guide. <br /> I learnt how to organise the code into a class
            with different functions (methods) for displaying and computing the
            answer by manipulating the Document Object Model (DOM).
          </p>
          <div className="space-x-2">
            <a
              href="https://kinzume.github.io/calculator-javascript/"
              target="_target"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kinzume/calculator-javascript"
              target="_target"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Code
            </a>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer hover:text-[#93FF75] w-fit">
              Back to projects
            </p>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 bg-[#0F1E35] rounded-xl p-3 space-y-3">
          <p className="text-center font-bold">Technologies</p>
          <ul className="grid grid-cols-3 md:grid-cols-1 space-y-1">
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>HTML</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>CSS Grid</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>JavaScript</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default calculator;
