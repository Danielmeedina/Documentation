import React from "react";
import Precode from "../../components/Precode";

const FormColor = () => {
  return (
    <article id="formcolor">
      <h2>Form color</h2>
      <p>allows you to change the color of the checkboxes, radios and so on</p>
      <small>doesn't refer to the color of the text</small>
      <Precode>
        {`
  <style>
  
  form {
    accent-color: green;
  }

  </style>
          `}
      </Precode>
    </article>
  );
};

export default FormColor;
