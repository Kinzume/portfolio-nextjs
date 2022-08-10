import ratingImg from "../public/assets/projects/rating-component.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const rating = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 20%"
          src={ratingImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 space-y-3">
          <h2>Interactive Rating Component</h2>
          <p>Apr 2022</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid items-center md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <p className="font-bold text-4xl">Overview</p>
          <p>
            This is a solution to the{" "}
            <a
              href="https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI"
              target="_blank"
              className="underline hover:text-[#93FF75]"
            >
              interactive rating component challenge on Frontend Mentor
            </a>
            . <br /> The user should be able to see hover states for the buttons
            and submit button, select and submit a number rating and see the
            "Thank you" card state after submitting the rating. <br /> I learnt
            how to use Google's{" "}
            <a
              href="https://developer.chrome.com/docs/devtools/"
              target="_blank"
              className="underline hover:text-[#93FF75]"
            >
              Chrome DevTools
            </a>{" "}
            to position elements on the page using Flexbox, built my own event
            listener for displaying the "Thank you" card and learnt how to style
            checked radio buttons using the <code>:checked</code> and{" "}
            <code>+</code> element selectors. <br /> I've included a snippet of
            the code for the event listener in the repo's readme file.
          </p>
          <div className="space-x-2">
            <a
              href="https://kinzume.github.io/interactive-rating-component-main/"
              target="_target"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kinzume/interactive-rating-component-main"
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
              <p>CSS Flexbox</p>
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

export default rating;
