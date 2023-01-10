import React from "react";
import Precode from "../../components/Precode";

const GradientBorders = () => {
  return (
    <article id="gradientborders">
      <h2>Gradient borders</h2>
      <Precode>
        {`
  <div class="gradientcard">
    <div class="gradientcard-body">
      Welcome
    </div>
  </div>  
  
  <style>

  .gradientcard {
    background: linear-gradient(to right, tomato 0%, gold 100%);
    aspect-ratio: 10/16;
    width: 200px;
    padding: 5px;
    border-radius: 16px;
    position: relative
  }
  .gradientcard-body {
    background: #222;
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }

  </style>
          `}
      </Precode>
    </article>
  );
};

export default GradientBorders;
