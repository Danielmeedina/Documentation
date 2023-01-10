import React from "react";
import Precode from "../../components/Precode";

const AnimateBackground = () => {
  return (
    <article id="animatebackground">
      <h2>Animated background</h2>
      <p>
        x amount of colors are chosen to put them in the background and that
        they move giving the impression that it is an animated gradient effect
      </p>
      <Precode>
        {`
  body {
    background: linear-gradient(-45deg, color1, color2, color3, color4);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;
    max-width: 1400px;
    margin: 0 auto;
  }        

  @keyframes gradient {
    0%{
      background-position: 0% 50%
    }
    50%{
      background-position: 100% 50%
    }
    100%{
      background-position: 0% 50%
    }
  }
          `}
      </Precode>
    </article>
  );
};

export default AnimateBackground;
