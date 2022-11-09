import React from "react";

const Main = () => {
  return (
    <div id="home" className="md:w-7/12 h-fit text-center m-auto mt-14 p-2">
      <div
        className="max-w-[1240px] w-full h-full mx-auto space-y-4
      flex flex-col justify-center items-center"
      >
        <h1 className="">
          <span className="text-[#93FF75]">Leander</span>
        </h1>
        <p className="text-xl font-medium">Web Developer</p>
        <p className="lg:w-8/12">
          I&apos;m a First-Class Honours Mathematics graduate and have been
          teaching myself web development since early 2022. Currently open to
          full-time employment opportunities.
        </p>
      </div>
    </div>
  );
};

export default Main;
