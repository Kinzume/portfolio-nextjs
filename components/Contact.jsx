import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-min">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#93FF75] text-center">
          Contact
        </p>
        <h2 className="py-4 text-center">Get In Touch</h2>
        <div className="flex items-center justify-center py-4 gap-4">
          <a
            href="https://www.linkedin.com/in/leanderabaya/"
            target="_blank"
            className="rounded-full bg-[#0F1E35] p-6 cursor-pointer hover:text-[#93FF75] hover:bg-[#1F2E45] ease-in duration-200"
          >
            <FaLinkedinIn size="2rem" />
          </a>
          <a
            href="https://github.com/Kinzume"
            target="_blank"
            className="rounded-full bg-[#0F1E35] p-6 cursor-pointer hover:text-[#93FF75] hover:bg-[#1F2E45] ease-in duration-200"
          >
            <FaGithub size="2rem" />
          </a>
        </div>
      </div>
      <footer>
        <p className="text-center">
          Built with{" "}
          <a
            className="underline hover:text-[#93FF75] ease-in duration-200"
            href="https://nextjs.org/"
            target="_blank"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            className="underline hover:text-[#93FF75] ease-in duration-200"
            href="https://tailwindcss.com/"
            target="_blank"
          >
            Tailwind CSS
          </a>
          . Check out the source code{" "}
          <a
            className="underline hover:text-[#93FF75] ease-in duration-200"
            href="https://github.com/Kinzume/portfolio-nextjs"
            target="_blank"
          >
            here
          </a>
        </p>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full  bg-[#0F1E35] text-[#E0E0E0] p-4 cursor-pointer hover:text-[#93FF75] hover:bg-[#1F2E45] ease-in duration-200">
              <HiOutlineChevronDoubleUp size={30} />
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
