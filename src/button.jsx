import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex gap-2 border border-blue-500 border-2 hover:underline hover:bg-blue-500 bg-transparent px-4 py-2 transition-colors duration-200">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-move-up-right-icon lucide-move-up-right"
      >
        <path d="M13 5H19V11" />
        <path d="M19 5L5 19" />
      </svg>
    </button>
  );
};
export default Button;
