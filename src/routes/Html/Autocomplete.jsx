import React from "react";
import Precode from "../../components/Precode";

const Autocomplete = () => {
  return (
    <article id="autocomplete">
      <h2>Autocomplete</h2>
      <p>
        in a text input it gives you an autocomplete of the values that you pass
        to it
      </p>
      <small>unfortunately this autocomplete can't be styled with css</small>
      <Precode>
        {`
  <label>
   choose the best framework:
   <input list="frameworks" type="text"/>
  </label>        

  <datalist id="frameworks">
    <option value="React"></option>
    <option value="Vue"></option>
    <option value="Svelte"></option>
    <option value="Angular"></option>
  </datalist>
          `}
      </Precode>
    </article>
  );
};

export default Autocomplete;
