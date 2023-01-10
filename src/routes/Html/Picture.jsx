import React from "react";
import Precode from "../../components/Precode";

const Picture = () => {
  return (
    <article id="mediaqueryimg">
      <h2>Media query img</h2>
      <p>
        It is used to put several images depending on the width of the screen,
        it is like a media query but only for images, example:
      </p>
      <Precode>
        {`
  <Picture>
    <source media="(min-width: 1024px)" srcset="imgLarge.jpg">
    <source media="(min-width: 600px)" srcset="imgMedium.jpg">
    <img src="imgLarge.jpg"> //small img 
  </Picture>        
          `}
      </Precode>
    </article>
  );
};

export default Picture;
