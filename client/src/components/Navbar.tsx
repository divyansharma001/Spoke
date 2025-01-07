import logo from "@/assets/talk.png";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import InteractiveHoverButton from "./ui/interactive-hover-button";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white flex justify-between p-16 pt-9 bg-grid-small-white/[0.2]">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#2979FF"
      />
        <div className="pl-10 flex items-center space-x-1">
          <div className="text-white">
            <Image
              alt="logo"
              src={logo}
              height={30}
              width={30}
              style={{ filter: "invert(1) brightness(2)" }}
            />
          </div>
          <div className="text-xl font-semibold">Sp<span className="underline underline-offset-2 decoration-solid decoration-[#8ec4ff]">oke</span></div>
        </div>
        <InteractiveHoverButton/>
      </div>
    </>
  );
};

export default Navbar;
