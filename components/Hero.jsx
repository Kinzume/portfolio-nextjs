import React from "react";
import data from "../data/data";

const Hero = () => {
  const heroIntro = data?.hero_intro;

  return (
    <section className="w-fit text-center mx-auto mt-16 space-y-4">
      <h1 className="text-[#93FF75]">Leander</h1>
      <p className="text-xl font-medium">Web Developer</p>
      <p className="max-w-md">{heroIntro}</p>
    </section>
  );
};

export default Hero;
