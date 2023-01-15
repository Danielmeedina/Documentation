import React from "react";
import "./card.css";

const Card = ({ title, img, color }) => {
  return (
    <div className="card" style={{ color: `${color}` }}>
      {img}
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
