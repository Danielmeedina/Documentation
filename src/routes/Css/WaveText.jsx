import React from "react";
import Precode from "../../components/Precode";

const WaveText = () => {
  return (
    <article id="wavetextanimation">
      <h2>Wave Text Animation</h2>

      <div className="wave-text-container">
        <div className="wave-text">
          <h2>welcome</h2>
          <h2>welcome</h2>
        </div>
      </div>
      <Precode>
        {`
  
  <div class="box">
    <div class="prueba">
      <h2>Welcome</h2>
      <h2>Welcome</h2>
    </div>
  </div>      

  <style>
  .box {
    display: flex;
    background: white;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
  }

  .prueba {
    position: relative;
  }

  .prueba h2 {
    color: red;
    font-size: 8em;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .prueba h2:nth-child(1) {
    color: transparent;
    -webkit-text-stroke: 2px #03a9f4;
  }

  .prueba h2:nth-child(2) {
    color: #03a9f4;
    animation: animate 4s ease-in-out infinite;
  }

  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0% 45%,
        16% 44%,
        33% 50%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }

    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }
  </style>
          `}
      </Precode>
    </article>
  );
};

export default WaveText;
