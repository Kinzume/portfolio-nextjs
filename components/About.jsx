import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#93FF75]">
            About
          </p>
          <h2 className="py-2">Who I Am</h2>
          <p className="py-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            assumenda laudantium voluptatem saepe quasi delectus facilis dicta
            ratione iste reiciendis numquam, facere odio? Numquam incidunt natus
            minima cupiditate dignissimos corporis!
          </p>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit
            sunt consectetur earum officiis necessitatibus mollitia magni quod
            laborum ducimus!
          </p>
        </div>
        <img
          className="w-full h-auto m-auto shadow-md shadow-black hover:scale-105 ease-in duration-100"
          src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="/"
        />
      </div>
    </div>
  );
};

export default About;
