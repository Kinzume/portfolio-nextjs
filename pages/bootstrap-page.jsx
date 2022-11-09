import bootstrapImg from "../public/assets/projects/bootstrap-page.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const bootstrap = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={bootstrapImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 space-y-3">
          <h2>Bootcamp Landing Page</h2>
          <p>Oct 2022</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid items-center md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <p className="font-bold text-4xl">Overview</p>
          <p>
            Credit to{" "}
            <a
              href="https://www.youtube.com/watch?v=4sosXZsdy-s"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              Traversy Media
            </a>
          </p>
          <p>
            This app was built using Bootstrap 5. Once I was comfortable with
            the framework, I made adjustments to the original project by
            changing the colours, remaking the hero section and adding a courses
            section, taking inspiration from the &quot;available programs&quot;
            section from the website{" "}
            <a
              href="https://codeworks.me/london/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              https://codeworks.me/london/
            </a>
            .
          </p>

          <p>
            The website is fully responsive and has features such as cards, an
            accordion and modal.
          </p>
          <div className="space-x-2">
            <a
              href="https://kinzume.github.io/landing-page-bootstrap/"
              target="_blank"
              rel="noreferrer"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kinzume/landing-page-bootstrap"
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
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Fetch API</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>PokeAPI</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Document Object Model</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default bootstrap;
