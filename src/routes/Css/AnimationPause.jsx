import React from "react";
import Precode from "../../components/Precode";

const AnimationPause = () => {
  return (
    <article id="pauseanimation">
      <h2>Pause animation</h2>
      <p>Stop an animation in a fancy way using the hover pseudoclass</p>
      <Precode>
        {`
  .animation:hover {
    animation-play-state: paused;
  }        
          `}
      </Precode>
    </article>
  );
};

export default AnimationPause;
