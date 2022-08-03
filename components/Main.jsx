import { BsArrowRightShort } from "react-icons/bs";
import React from "react";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div className=" space-y-5">
          <h1 className="py-4">
            Hi I'm <span className="text-[#93FF75]">Leander</span>
          </h1>
          <p className="py-2">A Front-End Web Developer</p>
          <p className="py-4max-w-[70%] m-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ea
            consequatur voluptates esse. Quod soluta cum officiis voluptate,
            consectetur, pariatur distinctio ducimus maiores officia nesciunt
            delectus, facere perferendis error beatae.
          </p>
          <button className="flex items-center m-auto gap-1">
            Projects
            <BsArrowRightShort />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
