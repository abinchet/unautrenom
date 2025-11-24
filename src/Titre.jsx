import React from "react";
import "./Titre.css";

function Titre({
  children,
  className = "",
  level = "h1",
  style = {},
  ...props
}) {
  // Créer dynamiquement l'élément de titre (h1, h2, h3, etc.)
  const TitleElement = level;

  return (
    <TitleElement
      className={className}
      style={{ fontFamily: "Sansation Bold", ...style }}
      {...props}
    >
      {children}
    </TitleElement>
  );
}

export default Titre;
