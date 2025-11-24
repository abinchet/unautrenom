import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex gap-2 items-center justify-center border border-blue-500 border-2 hover:underline hover:bg-blue-500 bg-transparent px-3 py-2 md:px-4 md:py-2 transition-colors duration-200 text-sm md:text-base whitespace-nowrap">
      <span className="flex-shrink-0">{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-move-up-right-icon lucide-move-up-right flex-shrink-0 md:w-[18px] md:h-[18px]"
      >
        <path d="M13 5H19V11" />
        <path d="M19 5L5 19" />
      </svg>
    </button>
  );
};
export default Button;
