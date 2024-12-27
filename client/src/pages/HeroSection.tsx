import { useEffect, useState } from "react";
import { FirstHeading } from "@/components/Heading";

const HeroSection = () => {
  const [FirstHeadingComponent, setFirstHeadingComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const loadFirstHeading = async () => {
      const component = await FirstHeading();
      setFirstHeadingComponent(component);
    };
    loadFirstHeading();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
    <div>{FirstHeadingComponent}</div>
    <div className="bg-black text-white flex flex-col items-center justify-center p-10  space-y-6">
      <div className="text-4xl font-normal space-y-4">
        <div className="flex items-center gap-3">
          <span>From Chats to</span>
          <span className="bg-gradient-to-r from-[#ffffea] via-[#ffffea] to-[#e29400] text-transparent bg-clip-text font-bold animate-shiny-text">
            Connections
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <span>We've Got You</span>
          <span className="bg-gradient-to-r from-[#ffffea] via-[#ffffea] to-[#e29400] text-transparent bg-clip-text font-bold animate-shiny-text">
            Covered
          </span>
          <span>!</span>
        </div>
      </div>
    </div>

    </div>
  );
};

export default HeroSection;