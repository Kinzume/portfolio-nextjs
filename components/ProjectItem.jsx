import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full group shadow-md shadow-black  hover:bg-[#93FF75] ease-in duration-300">
        <Image
          className="group-hover:opacity-10 "
          src={backgroundImg}
          alt="/"
        />
        <div className="text-[#000C1F] hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl  tracking-wider text-center">{title}</h3>
          <p className="pb-4 pt-2">React JS</p>
          <Link href={projectUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
