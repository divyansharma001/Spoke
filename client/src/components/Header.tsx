import logo from "@/assets/talk.png";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import InteractiveHoverButton from "./ui/interactive-hover-button";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between p-4 sm:p-8 md:p-16 md:pt-9 bg-grid-small-white/[0.2]">
        <Spotlight
          className="-top-32 left-96 "
          fill="#2979FF"
        />
        <div className="flex items-center space-x-1 pl-2 sm:pl-6 md:pl-10">
          <div className="text-white">
            <Image
              alt="logo"
              src={logo}
              height={24}
              width={24}
              className="sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px]"
              style={{ filter: "invert(1) brightness(2)" }}
            />
          </div>
          <div className="text-lg sm:text-xl font-semibold">
            Sp<span className="underline underline-offset-2 decoration-solid decoration-[#8ec4ff]">oke</span>
          </div>
        </div>
        <InteractiveHoverButton />
      </div>
    </>
  );
};

export default Navbar;