import React from "react";
import Precode from "../../components/Precode";

const ImgInList = () => {
  return (
    <article id="imageinlist">
      <h2>Image in list</h2>
      <p>
        It allows you to put the image you want as vignettes in the li tags of
        the lists
      </p>
      <Precode>
        {`
 <ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
 </ul>

 <style>
 
 .list li {
   list-style-type: none;
  }

 .list li:before {
   content: "";
   display: inline-block;
   width: 10px;
   height: 10px;
   margin-right: 5px;
   border-radius: 50%;
   background-image: url(imgvignettes);
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
  }        
  
  </style>
          `}
      </Precode>
    </article>
  );
};

export default ImgInList;
