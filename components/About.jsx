import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-fit flex items-center pt-16">
      <div className="md:w-10/12 p-2 max-w-[1240px] m-auto md:grid items-center">
        <div className="flex flex-col">
          <h2 className="uppercase text-xl tracking-widest text-[#93FF75]">
            About
          </h2>
          <p className="py-2">
            My first experience with programming was in 2008 where I built games
            using the scripting language Lua in ROBLOX. Fast forward to 2019 at
            university, I made programs with C++ and Python to solve various
            problems in Calculus and Graph Theory. I really enjoyed my time
            coding and wanted to learn more. I then found freecodecamp&apos;s
            responsive web design course and started learning basic HTML.
          </p>
          <p className="py-2">
            When I graduated, I started my first job as a finance apprentice in
            a local authority. After successfully completing my course, I wanted
            to pursue a career as a web developer in the tech industry instead
            and started my self-taught journey. Since then, I&apos;ve been
            further developing my HTML, CSS and JavaScript skills. My biggest
            project to date is my Pokedex app which uses the Fetch API.
          </p>
          <p className="py-2">
            I&apos;m currently working on a portfolio website called Hamworks.
            I&apos;ll be posting more information on development in the near
            future!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
