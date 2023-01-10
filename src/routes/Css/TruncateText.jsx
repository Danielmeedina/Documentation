import React from "react";
import Precode from "../../components/Precode";

const TruncateText = () => {
  return (
    <article id="truncatetext">
      <h2>Truncate a text</h2>
      <p className="truncate-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        dignissimos accusantium reprehenderit deleniti accusamus sapiente quis?
        Laborum amet doloribus corporis maxime tempore qui asperiores cupiditate
        sit in nam. Ipsum, doloremque!
      </p>
      <Precode>
        {`
  <h4>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
    provident ab facilis, recusandae magnam delectus in quasi odio quis,
    corporis facere libero ea illo mollitia accusantium? Ab in rem placeat?
  </h4>      
  
  <style>
  h4 {
    width: 500px;
    border: 1px solid red;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h4:hover {
    white-space: normal;
  }
  </style>
          `}
      </Precode>
    </article>
  );
};

export default TruncateText;
