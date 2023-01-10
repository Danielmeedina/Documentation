import React from "react";
import Precode from "../../components/Precode";

const TextRotateEffect = () => {
  return (
    <article id="textrotateeffect">
      <h2>Text rotate effect</h2>
      <a
        href="https://codepen.io/Danielmedinah/pen/wvxJaXB?editors=0100"
        target="_blank"
        rel="noopener noreferrer"
      >
        to see a preview
      </a>
      <Precode>
        {`
  
  <div class="container-text">
    <span>Text</span>
    <div class="rotate">
      <span>Thing</span>
      <span>Other</span>
      <span>Help</span>
    </div>
  </div>   
  
  <style>
  .container-text {
    letter-spacing: 2px;
    font-size: 28px;
    text-align: center;
    font-weight: 600;
    display: flex;
    justify-content: center;
    gap: 10px;
    height: 25px;
    overflow: hidden;
  }

  .rotate {
    position: relative;
    animation: change 3s ease-in-out infinite alternate;
    -webkit-animation: change 3s ease-in-out infinite alternate;
  }

  .rotate:hover {
    animation-play-state: paused;
  }

  .rotate span {
    display: block;
    color: white;
  }
  @keyframes change {
    0%,
    5% {
      top: -2px;
    }
    10%,
    25% {
      top: -35px;
    }
    30%,
    35% {
      top: -70px;
    }
    40%,
    45% {
      top: -35px;
    }
    50%,
    100% {
      top: -2px;
    }
  }

  </style>
          `}
      </Precode>
    </article>
  );
};

export default TextRotateEffect;
