import React from "react";
import Precode from "../../components/Precode";

const TextColumn = () => {
  return (
    <article id="textcolumn">
      <h2>Text column</h2>
      <p>Allows you to put text and lists in the columns you want</p>
      <small>
        not to be confused with grid or flex, this is only for text.
      </small>
      <Precode>
        {`
  .text-column {
    list-style-position: inside;
    column-count: 4; /*N° column*/
    column-gap: 1rem;
    column-rule: 1px solid red; /*separation line*/ 
    column-width: 100px; /*minimum column size*/
  }        
          `}
      </Precode>
    </article>
  );
};

export default TextColumn;
