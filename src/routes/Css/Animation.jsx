import React from "react";

const Animation = () => {
  return (
    <article id="animation">
      <h2>Animation</h2>
      <p>Animation Properties</p>
      <ul>
        <li>
          <span>animation-name</span>: name of the animation (it must be the
          same as the one that is in the @keyframe)
        </li>
        <li>
          <span>animation-duration</span>: control the animation duration
        </li>
        <li>
          <span>animation-iteration-count</span>: infinite or any numerical
          numerical value to iterate
        </li>
        <li>
          <span>animation-direction</span>: alternate, this is the most used and
          most attractive one
        </li>
        <li>
          <span>animation-delay</span>: gives a specified time before start the
          animation
        </li>
        <li>
          <span>animation-timing-function</span>:defines the acceleration curve
          of the animation, i.e. the speed at which the animation will run.
        </li>
        <li>
          <span>animation-fill-mode</span>:
          <ul>
            <li>
              <span>forwards</span>:will keep the styles at the end of the
              animation
            </li>
            <li>
              <span>backwards</span>: the elements will have the initial styles
              initial styles of the animation when the animation starts, if or
              if it has to be to be accompanied with animation-delay
            </li>
            <li>
              <span>both</span>: is the mixture of the two previous ones
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
};

export default Animation;
