import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid items-center grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#93FF75]">
            About
          </p>
          <h2 className="py-2">Who I Am</h2>
          <p className="py-2">
            My name&apos;s Leander, I&apos;ve been learning front-end
            technologies since early 2022.
          </p>
          <p className="py-2">
            My first experience with programming came from tinkering in game
            development in 2008 where I built games using the scripting language
            Lua in a popular video game called ROBLOX. Fast forward to
            university in 2019, I gained working knowledge of C++ and Python to
            solve mathematical problems in Calculus and Graph Theory. It was
            around this time I stumbled upon freecodecamp&apos;s responsive web
            design course where I studied some basic HTML. After graduating I
            worked in finance at a local authority for 18 months.
          </p>
          <p className="py-2">
            I wanted to transition into the tech industry and tackle real world
            challenges with programming. I&apos;ve dedicated time to completing
            freecodecamp&apos;s responsive web design and JavaScript data
            structures and algorithms courses and completed various projects
            such as a personal portfolio, calculator and fully responsive space
            tourism website.
          </p>
          <p className="py-2">
            I&apos;m currently learning how to use a popular front-end framework
            called React to build more complex applications. I&apos;m currently
            open to full-time employment opportunities for front-end
            development.
          </p>
        </div>
        <picture>
          <source
            srcSet="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            type="image/webp"
          />
          <img
            className="w-full h-auto m-auto shadow-md shadow-black hover:scale-105 ease-in duration-100"
            src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
          />
        </picture>
      </div>
    </div>
  );
};

export default About;
