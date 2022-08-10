import { BsArrowRightShort } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div className=" space-y-5">
          <h1 className="py-4">
            Hi, I&apos;m <span className="text-[#93FF75]">Leander</span>
          </h1>
          <p className=" text-lg py-4 max-w-[70%] m-auto">
            A self-motivated and determined first-class honours graduate with a
            passion for programming and problem-solving. Seeking an entry-level
            role in front-end development.
          </p>
          <Link href="/#projects">
            <p className="flex items-center mx-auto w-fit gap-1 tracking-wider py-4 px-8 rounded-xl uppercase cursor-pointer bg-[#1F2E45] text-[#93FF75] hover:bg-[#93FF75] hover:text-[#000C1F] ease-in duration-200">
              Projects
              <BsArrowRightShort />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
