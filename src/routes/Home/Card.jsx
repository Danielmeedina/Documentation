import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./card.css";

const Card = ({ title, img, color }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={theme ? "card light" : "card"}
      style={{ color: `${color}` }}
    >
      {img}
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
