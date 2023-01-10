import React from "react";
import Precode from "../../components/Precode";

const Grid = () => {
  return (
    <article id="grid">
      <h2>Grid</h2>
      <p>some grid properties to remember:</p>
      <Precode>
        {`
  .box {
    display: grid;
    /*fills in the gaps left by giving specific measurements to the grid elements*/
    grid-auto-flow: dense;

    /* with this you can give measures to the implicit grids (width), these are the ones that are generated automatically.*/
    grid-auto-rows: 100px;

    /*with this you can give measures to the implicit grid (height), these are the ones that are generated automatically.*/
    grid-auto-columns: 100px; 

    /*fill grid with dynamically generated tracks*/
    grid-template-columns: repeat(auto-fill, minmax(min-content, 300px))

    /*adjust the grid with existing tracks*/
    grid-template-columns: repeat(auto-fit, minmax(min-content, 300px))
  }
          `}
      </Precode>
    </article>
  );
};

export default Grid;
