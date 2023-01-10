import React from "react";
import Precode from "../../components/Precode";

const MinMaxNumber = () => {
  return (
    <article id="minmaxnumber">
      <h2>Min Max number</h2>
      <p>get the maximum and minimum number of an array quickly</p>
      <Precode>
        {`
  
  const number = [5, 7, 9, 3, 1, 5, 4, 8, 0, 23, 46, 98, -5, -20];
  
  const resultMax = Math.max(...number);
  const resultMin = Math.min(...number);

  console.log(resultMax); // 98
  console.log(resultMin); // -20        
          `}
      </Precode>
    </article>
  );
};

export default MinMaxNumber;
