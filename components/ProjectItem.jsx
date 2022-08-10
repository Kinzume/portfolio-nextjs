import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  title,
  backgroundImg,
  projectDate,
  projectSkills,
  projectUrl,
}) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full group shadow-md shadow-black  hover:bg-[#93FF75] ease-in duration-300">
        <Image
          className="group-hover:opacity-10 "
          src={backgroundImg}
          alt="/"
        />
        <div className="text-[#000C1F] hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:space-y-4 text-center">
          <h3 className=" text-base md:text-2xl tracking-wider ">{title}</h3>
          <p className="text-sm md:text-xl">{projectDate}</p>
          <p className="text-sm md:text-xl">{projectSkills}</p>
          <Link href={projectUrl}>
            <p className="text-center md:py-3 rounded-lg bg-white text-gray-700 font-bold md:text-lg cursor-pointer">
              More Info
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
