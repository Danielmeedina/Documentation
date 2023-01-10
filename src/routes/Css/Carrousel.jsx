import React from "react";
import Precode from "../../components/Precode";

const Carrousel = () => {
  return (
    <article id="carrousel">
      <h2>Carrousel</h2>
      <Precode>
        {`
  
  <section class="carrousel">
    <article class="item">item 1</article>
    <article class="item">item 2</article>
    <article class="item">item 3</article>
    <article class="item">item 4</article>
    <article class="item">item 5</article>
  </section>   
  
  <style>

  .carrousel {
    display: flex;
    flex-flow: row nowrap;
    scroll-behavior: auto;
    gap: 10px;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
  }

  .item {
    min-width: 100%;
    scroll-snap-align: start;
    background-color: rebeccapurple;
    height: 300px;
  }

  </style>
          `}
      </Precode>
    </article>
  );
};

export default Carrousel;
