import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Dive in", className, ...props }, ref) => {
  return (
    <Link href={'/signup'}>
    <button
      ref={ref}
      className={cn(
        "group relative w-36 cursor-pointer overflow-hidden rounded-full border border-gray-700 bg-transparent p-3 text-center font-semibold text-gray-300 hover:border-transparent",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-blue-500 transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-blue-600"></div>
    </button>
    </Link>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export default InteractiveHoverButton;