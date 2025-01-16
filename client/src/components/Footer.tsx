import React from 'react';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-950 px-4 py-6 md:px-16 md:py-8 mt-5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        
        <Link href={'/'}>
        
        <div className="text-xl font-semibold text-white md:text-2xl">
          Sp<span className="underline decoration-[#8ec4ff] decoration-solid underline-offset-2">oke</span>
        </div>

        </Link>


        <p className="text-center text-sm text-[#8ec4ff] md:text-base">
          Copyright © {new Date().getFullYear()} Spoke. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link 
            href="https://x.com/Divyansharma001"
            className="text-[#8ec4ff] transition-colors hover:text-white"
          >
            <BsTwitterX className="h-5 w-5" />
          </Link>
          <Link 
            href="https://github.com/divyansharma001/spoke" 
            className="text-[#8ec4ff] transition-colors hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;