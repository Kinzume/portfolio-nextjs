import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import playerSearchImg from "../public/assets/projects/XIV-API-player-character-search.png";

const ffxivPlayerSearch = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={playerSearchImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 space-y-3">
          <h2>FFXIV Player Character Search Tool</h2>
          <p>Dec 2022 - Jan 2023</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid items-center md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <p className="font-bold text-4xl">Overview</p>
          <p>
            This website allows users to search and view player character
            profiles from the critically acclaimed MMORPG, Final Fantasy XIV.
            This is a simpler version of the character search tool which can be
            found on the{" "}
            <a
              href="https://eu.finalfantasyxiv.com/lodestone/character/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              Lodestone
            </a>
            .
          </p>
          <div className="space-x-2">
            <a
              href="https://kinzume.github.io/ffxiv-player-character-search-tool/"
              target="_blank"
              rel="noreferrer"
              className="text-lg tracking-wider px-8 py-2 rounded-xl uppercase bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200"
            >
              Demo
            </a>
            <a
              href="https://github.com/Kinzume/ffxiv-player-character-search-tool"
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
              <p>Fetch API</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>XIVAPI</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Material UI</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>ViteJS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ffxivPlayerSearch;
