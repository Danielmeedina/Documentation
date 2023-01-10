import React from "react";
import Precode from "../../components/Precode";

const SeparateImgEffect = () => {
  return (
    <article id="separateimageeffect">
      <h2>Separate image effect</h2>
      <p>
        Separate the image you choose into 4 parts giving an incredible effect
      </p>
      <a
        href="https://codepen.io/Danielmedinah/pen/vYaxBKz?editors=0100"
        target="_blank"
        rel="noopener noreferrer"
      >
        to see a preview
      </a>
      <Precode>
        {`
  <div class="content">
    <img
      src="img.jpg"
      alt="img1"
    />
  </div>        

  <style>
  .content img {
    --e: 10% / 45% 45% no-repeat linear-gradient(#000 0 0);
    --m: left var(--i, 0%) top var(--e), bottom var(--i, 0%) left var(--e),
      top var(--i, 0%) right var(--e), right var(--i, 0%) bottom var(--e);
    -webkit-mask: var(--m);
    mask: var(--m);
    filter: grayscale(0);
    -webkit-filter: grayscale(1);
    transition: 0.3s linear;
    -webkit-transition: 0.3s linear;
    -moz-transition: 0.3s linear;
    -ms-transition: 0.3s linear;
    -o-transition: 0.3s linear;
  }

  .content img:hover {
    --i: 10%;
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
  }
  
  </style>
          `}
      </Precode>
    </article>
  );
};

export default SeparateImgEffect;
