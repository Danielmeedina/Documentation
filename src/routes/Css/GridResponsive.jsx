import React from "react";
import Precode from "../../components/Precode";

const GridResponsive = () => {
  return (
    <article id="gridresponsive">
      <h2>Grid responsive</h2>
      <Precode>
        {`
  <div class="grid-responsive">
    <div class="item">item 1</div>
    <div class="item">item 2</div>
    <div class="item">item 3</div>
    <div class="item">item 4</div>
    <div class="item">item 5</div>
    <div class="item">item 6</div>
    <div class="item">item 7</div>
    <div class="item">item 8</div>
    <div class="item">item 9</div>
    <div class="item">item 10</div>
  </div>          

  <style>
  .grid-responsive {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
  }
  
  .item {
    width: 100%;
    min-height: 200px;
  }
  </style>
          `}
      </Precode>
    </article>
  );
};

export default GridResponsive;
