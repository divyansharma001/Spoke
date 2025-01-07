'use client';
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
    <div className="flex flex-wrap gap-6">
      {data.map((item, index) => (
        <div key={index} className="p-6">
          <div className="group relative h-48 w-72 rounded-2xl backdrop-blur-sm bg-[#19368f] bg-opacity-10 transition-all duration-300 hover:bg-opacity-20 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer border border-blue-500/10 hover:border-blue-500/30">
            {/* Background gradient effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content container */}
            <div className="relative h-full p-6 flex flex-col">
              {/* Icon and title section */}
              <div className="flex items-center space-x-3 mb-4 ">
                <div className="p-3 bg-[#8ec4ff] bg-opacity-10 rounded-full transition-all duration-300 group-hover:bg-opacity-20 group-hover:scale-110">
                  <item.icon size={28} className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-xl text-gray-200 group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {item.description}
              </p>

              {/* Subtle decorative element */}
              <div className="absolute bottom-4 right-4 w-16 h-16 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-400/10 transition-all duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>
   
  );
};

export default FeaturesCard;
