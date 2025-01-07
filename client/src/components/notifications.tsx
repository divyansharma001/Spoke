// "use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  message: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      "name": "Priya Patel",
      "message": "Sent you the payment for our chai break! ☕️ Tomorrow at Chai Point?",
      "time": "15m ago",
      "icon": "👩🏽",
      "type": "friend",
      "color": "#00C9A7"
    },
    {
      "name": "Team Updates",
      "message": "Welcome @Arjun Sharma to the design team! 🎨 Excited to have you onboard!",
      "time": "12m ago",
      "icon": "👥",
      "type": "system",
      "color": "#FFB400"
    },
    {
      "name": "Meera Rajesh",
      "message": "Have you tried the new South Indian cafe in Indiranagar? 🥘 Their filter coffee is amazing! Let's go this weekend~",
      "time": "8m ago",
      "icon": "👩🏽‍🦰",
      "type": "friend",
      "color": "#00C9A7"
    },
    {
      "name": "Project Reminder",
      "message": "Client meeting with @Aditya Mehta scheduled for tomorrow at 2 PM IST 📊 Presentation is ready in Drive.",
      "time": "5m ago",
      "icon": "📅",
      "type": "work",
      "color": "#4285F4"
    },
    {
      "name": "Rohit Khanna",
      "message": "Bhai, just pushed the new UI changes ✨ Take a look when you're free? Added some cool animations!",
      "time": "3m ago",
      "icon": "👨🏽‍💻",
      "type": "work",
      "color": "#4285F4"
    },
    {
      "name": "Aarohi Sharma",
      "message": "Hi love! 🌼 Just wanted to remind you how much you mean to me 💖 You're my sunshine on cloudy days ☀️ Can't wait to hug you tight soon! 🫂💞",
      "time": "1m ago",
      "icon": "🌸",
      "type": "love",
      "color": "#FF69B4"
    }
  ]
  
  

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, message, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[600px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3 ">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">
            {message}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
