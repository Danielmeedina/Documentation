import React from "react";
import Precode from "../../components/Precode";

const ImgResponsive = () => {
  return (
    <article id="imageresponsive">
      <h2>Responsive image</h2>
      <p>Makes images responsive to any screen size</p>
      <Precode>
        {`
  img {
    max-width: 100%;
    height: auto
  }        
          `}
      </Precode>
    </article>
  );
};

export default ImgResponsive;
