import React from "react";
import "./rond.css";

function Rond({ children, className = "", textSize, style, ...props }) {
  const defaultClasses =
    "flex justify-center items-center bg-blue-500 rounded-2xl shadow-lg text-white font-semibold px-1 py-3 sm:px-2 sm:py-3 md:px-3 md:py-3 min-w-0 flex-1 max-w-xs hover:bg-blue-600 transition-colors duration-200 shadow-b";

  const combinedStyle = {
    fontSize: textSize || undefined,
    ...style,
  };

  return (
    <div
      className={`${defaultClasses} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  );
}
export default Rond;
