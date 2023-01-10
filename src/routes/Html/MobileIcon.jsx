import React from "react";
import Precode from "../../components/Precode";

const MobileIcon = () => {
  return (
    <article id="mobileicon">
      <h2>Mobile Icon</h2>
      <p>
        With this line you can put a logo so that when they save your page on
        mobile, said logo can be seen
      </p>
      <Precode>
        {`
  <head>
    <link rel="apple-touch-icon" href="urlImage"/>
  </head>        
          `}
      </Precode>
    </article>
  );
};

export default MobileIcon;
