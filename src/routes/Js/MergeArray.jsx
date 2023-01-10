import React from "react";
import Precode from "../../components/Precode";

const MergeArray = () => {
  return (
    <article id="mergearray">
      <h2>Merge/copy array</h2>
      <p>some ways to merge array:</p>
      <h3>concat()</h3>
      <Precode>
        {`
  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const array3 = array1.concat(array2);

  console.log(array3);
  // expected output: Array ["a", "b", "c", "d", "e", "f"]        
          `}
      </Precode>
      <h3>Spread operator</h3>
      <Precode>
        {`
  // Merge Array
  const result = [...array1, ...array2]        
          `}
      </Precode>
      <h3>flat()</h3>
      <p>
        if when you merge the arrays they get nested, you can use this method to
        flatten the array
      </p>
      <Precode>
        {`
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [6, 7, [8, 9, 10, [11, 12, 13, 14]]];

  const result = [...arr1, ...arr2].flat(Infinity);

  console.log(result);      
          `}
      </Precode>
    </article>
  );
};

export default MergeArray;
