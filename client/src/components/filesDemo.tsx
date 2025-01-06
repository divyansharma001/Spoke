import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const files = [
    {
      name: "vacation-photos.zip",
      body: "Shared photo album from our summer trip to Greece. Contains 24 high-resolution images from Athens and Santorini.",
    },
    {
      name: "project-schedule.pdf",
      body: "Team meeting schedule and project milestones for Q1 2024. Includes important deadlines and team assignments.",
    },
    {
      name: "group-selfie.jpg",
      body: "Group photo from last weekend's team building event at Central Park. Perfect for your profile picture!",
    },
    {
      name: "party-invite.png",
      body: "Digital invitation for Sarah's birthday celebration next Saturday. RSVP needed by Wednesday.",
    },
    {
      name: "voice-message.mp3",
      body: "Audio message from the team brainstorming session. Duration: 2:45 minutes. Important action items discussed.",
    },
  ];

const firstRow = files.slice(0, files.length / 2);
const secondRow = files.slice(files.length / 2);

const ReviewCard = ({
  name,
  body,
}: {
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* <img className="rounded-full" width="32" height="32" alt="" src={img} /> */}
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((files) => (
          <ReviewCard key={files.name} {...files} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((files) => (
          <ReviewCard key={files.body} {...files} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
