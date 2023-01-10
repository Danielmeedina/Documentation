import React from "react";
import Precode from "../../components/Precode";

const TypewriterEffect = () => {
  return (
    <article id="typewritereffect">
      <h2>Typewriter effect</h2>
      <Precode>
        {`
  <span>Hello world</span> 

  <style>
  span{
    display: block;
    white-space: nowrap;
    border-right: 4px solid;
    width: 13ch; /*number of characters of the label span + 1*/
    animation: typing 2s steps(13), blink .5s infinite step-end alternate ;
    overflow: hidden;
  }

  @keyframes typing {
    from { 
      width: 0;
    }
  }
    
  @keyframes blink {
    50% { 
      border-color: transparent;
    }
  }
  </style>
          `}
      </Precode>
    </article>
  );
};

export default TypewriterEffect;
