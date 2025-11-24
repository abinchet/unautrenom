import React from "react";

const SoftBadge = ({
  iconSrc,
  label,
  bgColor = "#fff",
  borderColor = "#e5e7eb",
  textColor = "#111827",
}) => (
  <div
    className="flex items-center gap-2 px-4 py-2 rounded-full border text-base font-medium"
    style={{
      backgroundColor: bgColor,
      borderColor: borderColor,
      color: textColor,
      borderWidth: "2px",
      display: "inline-flex",
    }}
  >
    {iconSrc && (
      <img
        src={iconSrc}
        alt={label}
        className="w-6 h-6"
        style={{ borderRadius: "10%" }}
      />
    )}
    <span>{label}</span>
  </div>
);

export default SoftBadge;
