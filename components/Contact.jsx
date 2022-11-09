import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-min pt-32 pb-5">
      <div className="max-w-[1240px] m-auto px-2 w-full ">
        <div className="flex items-center justify-center py-4 gap-4">
          <a
            href="https://www.linkedin.com/in/leanderabaya/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#0F1E35] p-3 cursor-pointer hover:text-[#93FF75] hover:bg-[#1F2E45] ease-in duration-200"
          >
            <FaLinkedinIn size="2rem" />
          </a>
          <a
            href="https://github.com/Kinzume"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#0F1E35] p-3 cursor-pointer hover:text-[#93FF75] hover:bg-[#1F2E45] ease-in duration-200"
          >
            <FaGithub size="2rem" />
          </a>
        </div>
      </div>
      <footer className="md:w-10/12 w-8/12 m-auto">
        <p className="text-center">
          Built with{" "}
          <a
            className="underline hover:text-[#93FF75] ease-in duration-200"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="underline hover:text-[#93FF75] ease-in duration-200"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS
          </a>
          . Find the repo{" "}
          <a
            className="underline hover:text-[#93FF75] ease-in duration-200"
            href="https://github.com/Kinzume/portfolio-nextjs"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Contact;
