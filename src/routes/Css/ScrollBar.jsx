import React from "react";
import Precode from "../../components/Precode";

const ScrollBar = () => {
  return (
    <article id="scrollbar">
      <h2>Scroll bar</h2>
      <p>
        In this way you can interact and modify the scroll bars of each part of
        the page
      </p>
      <Precode>
        {`
  body::-webkit-scrollbar {
    height: 10px;
    background-color: transparent
  }        

  body::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 10px;
  }
          `}
      </Precode>
    </article>
  );
};

export default ScrollBar;
