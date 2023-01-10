import React from "react";
import Precode from "../../components/Precode";

const GradientText = () => {
  return (
    <article id="gradienttext">
      <h2>Gradient text</h2>
      <Precode>
        {`
  <h5>Welcome</h5>        

  <style>
  h5{
    color: transparent;
    font-size: 148px;
    font-weight: 600;
    letter-spacing: -0.015em;
    background-image: linear-gradient(180deg, red, blue);
    background-clip: text;
    -webkit-background-clip: text;
  }
  </style>
          `}
      </Precode>
    </article>
  );
};

export default GradientText;
