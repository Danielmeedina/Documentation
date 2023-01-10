import React from "react";
import Precode from "../../components/Precode";

const BackgroundText = () => {
  return (
    <article id="backgroundtext">
      <h2>Background text</h2>
      <a
        href="https://codepen.io/Danielmedinah/pen/YzjNWpX"
        target="_blank"
        rel="noopener noreferrer"
      >
        to see a preview
      </a>
      <Precode>
        {`
  
  <div class="container">
    <div class="content">Tokyo</div>
  </div>        

  <style>
  .container {
    width: 100%;
    height: 100vh;
    background: url(img.jpg) center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    padding: 80px;
    font-size: 80px;
    display: grid;
    place-items: center;
    /* -webkit-text-stroke: 2px red; */ /*property to consider*/
    font-weight: 600;
    background-color: white;
    mix-blend-mode: lighten;
  }
  </style>

          `}
      </Precode>
      <h3>Another way to do it</h3>

      <a
        href="https://codepen.io/Danielmedinah/pen/vYagGoY?editors=1100"
        target="_blank"
        rel="noopener noreferrer"
      >
        to see a preview
      </a>
      <Precode>
        {`
  
  <h5>Welcome</h5>        

  <style>
  h5{{
  color: transparent;
  font-size: 80px;
  font-weight: 600;
  letter-spacing: -0.015em;
  background-image: url(img.jpg);
  background-position: center;
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
  }
  </style>        
          `}
      </Precode>
    </article>
  );
};

export default BackgroundText;
