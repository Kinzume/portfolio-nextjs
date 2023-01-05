import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SkillsTag } from "./SkillsTag";

const ProjectItem = ({
  title,
  backgroundImg,
  projectDate,
  projectSkillsTag,
  projectUrl,
}) => {
  return (
    <div>
      <Link href={projectUrl}>
        <div className="relative flex flex-col items-center justify-center h-auto w-full group cursor-pointer  ">
          <Image
            priority={true}
            className="group-hover:scale-110 transition-transform duration-300"
            src={backgroundImg}
            alt="/"
          />
          <div className="bg-[#0f1e35] md:bg-transparent text-white flex flex-col p-4 md:p-8 w-full ">
            <div className="flex flex-col space-y-8">
              <h3
                className="text-xl md:text-3xl font-bold tracking-wider 
                bg-size-y-200 bg-white-to-green bg-position-y-0 group-hover:bg-position-y-100
                 text-transparent transition-all bg-clip-text"
              >
                {title}
              </h3>
              <div className="flex gap-x-2 text-white flex-wrap">
                {projectSkillsTag?.map((item, i) => (
                  <SkillsTag
                    item={item}
                    key={i}
                  />
                ))}
              </div>
            </div>
            <p className="p-4 md:p-0 text-sm md:text-xl self-end">
              {projectDate}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
