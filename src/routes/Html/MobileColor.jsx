import React from "react";
import Precode from "../../components/Precode";

const MobileColor = () => {
  return (
    <article id="mobilecolor">
      <h2>Mobile color</h2>
      <p>
        with this line you can put a color to the header of the web in mobile
        version
      </p>
      <Precode>
        {`
  <head>
    <meta name="theme-color" content="#FF6600"/>
  </head>        
          `}
      </Precode>
    </article>
  );
};

export default MobileColor;
