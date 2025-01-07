import React from "react";
import { RiChatAiLine } from "react-icons/ri";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdOutlineMissedVideoCall } from "react-icons/md";
import { RiFileShredLine } from "react-icons/ri";

interface FeatureCardProps {
  title: string;
  icon: React.ElementType;
  description: string;
}

const data: FeatureCardProps[] = [
    {
      title: "Realtime Chat",
      icon: RiChatAiLine,
      description: "Stay connected with instant, seamless, and engaging messaging."
    },
    {
      title: "Voice Calls",
      icon: FaMicrophoneAlt,
      description: "Enjoy crystal-clear conversations with unmatched quality."
    },
    {
      title: "Video Calls",
      icon: MdOutlineMissedVideoCall,
      description: "Connect face-to-face with smooth and reliable video calls."
    },
    {
      title: "File Sharing",
      icon: RiFileShredLine,
      description: "Effortlessly share files with speed and security."
    }
];

const FeaturesCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-6 md:px-8">
      {data.map((item, index) => (
        <div key={index}>
          <div className="group relative h-auto sm:h-44 md:h-48 rounded-xl sm:rounded-2xl backdrop-blur-sm bg-[#19368f] bg-opacity-10 transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer border border-blue-500/10 hover:border-blue-500/30">
            {/* Background gradient effect */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content container */}
            <div className="relative h-full p-4 sm:p-5 md:p-6 flex flex-col">
              {/* Icon and title section */}
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-[#8ec4ff] bg-opacity-10 rounded-full transition-all duration-300 group-hover:bg-opacity-20 group-hover:scale-110">
                  <item.icon size={24} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-200 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>

              {/* Subtle decorative element */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-400/10 transition-all duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesCard;