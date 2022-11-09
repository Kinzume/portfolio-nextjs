import linkedInImg from "../public/assets/projects/linkedin-page.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const linkedinClone = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={linkedInImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 space-y-3">
          <h2>LinkedIn Clone</h2>
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
              href="https://www.youtube.com/watch?v=QaYts9sPmcY"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              Sonny Sangha
            </a>
          </p>
          <p>
            This app was built using React and Redux to build the UI which
            includes a Firebase backend to allow users to login, create and view
            posts. Other libraries used on this site include{" "}
            <a
              href="https://mui.com/material-ui/material-icons/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              Material Icons
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/joshwcomeau/react-flip-move"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              React Flip Move
            </a>{" "}
            to add animation to the posts.
          </p>{" "}
          <p>
            Whilst the guide shows how to build the site using the JavaScript
            version 8 Firebase SDK, I&apos;ve migrated the code to version 9
            using the{" "}
            <a
              href="https://firebase.google.com/docs/reference/js"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              docs
            </a>
            .
          </p>
          <p>
            I&apos;ve also added support for responsiveness by converting the
            style rules (which initially used pixels) to relative units and
            creating additional styling for smaller screens (e.g. tablet and
            mobile screens).
          </p>
          <div className="space-x-2">
            <a
              href="https://linkedin-clone-79b33.web.app/"
              target="_blank"
              rel="noreferrer"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kinzume/linkedin-clone"
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
              <p>React</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Redux</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Firebase Auth</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Firebase Firestore</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Mobile-first workflow</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Material Icons</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>React Flip Move</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default linkedinClone;
