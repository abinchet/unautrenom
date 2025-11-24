import React from "react";

const Box = ({ children, className = "", ...props }) => {
  const defaultClasses =
    "border border-gray-400 backdrop-blur-md shadow-2xl bg-black/30 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 text-center ";
  return (
    <div className={`${defaultClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};
export default Box;
