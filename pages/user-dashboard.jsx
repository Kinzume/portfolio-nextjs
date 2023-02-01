import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import userdashboardImg from "../public/assets/projects/user-dashboard.png";

const userDashboard = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          src={userdashboardImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-10 p-2 space-y-3">
          <h2>User Dashboard</h2>
          <p>Jan 2023</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid items-center md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 space-y-5">
          <p>Project</p>
          <p className="font-bold text-4xl">Overview</p>
          <p>
            This is a clone of the{" "}
            <a
              href="https://minimals.cc/dashboard/app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              dashboard app
            </a>{" "}
            from minimals.cc.
          </p>
          <p>
            Data is fetched from{" "}
            <a
              href="https://random-data-api.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#93FF75]"
            >
              Random Data API
            </a>
            .
          </p>
          <div>
            <p>SVG Sources:</p>
            <ul>
              <li>
                <a
                  href="https://undraw.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#93FF75]"
                >
                  https://undraw.co/
                </a>
              </li>
              <li>
                <a
                  href="https://www.svgrepo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#93FF75]"
                >
                  https://www.svgrepo.com/
                </a>
              </li>
            </ul>
          </div>
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
              <p>TypeScript</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Vite</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Material UI</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>Axios</p>
            </li>
            <li className="flex items-center gap-1">
              <RiRadioButtonFill />
              <p>ApexCharts</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default userDashboard;
