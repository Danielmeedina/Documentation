import React from "react";
import Precode from "../../components/Precode";

const ResponsiveText = () => {
  return (
    <article id="responsivetext">
      <h2>Responsive Text</h2>
      <p>
        On this{" "}
        <a
          href="https://utopia.fyi/type/calculator/?c=320,16,1.2,1200,24,1.25,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l"
          target="_blank"
          rel="noopener noreferrer"
        >
          web
        </a>{" "}
        you will find a way to make your texts responsive more accurately, but
        you also have these other ways to do it:
      </p>
      <br />
      <h3>Clamp()</h3>
      <p>
        This function allows you to put 3 values (minimum value, preferred
        value, maximum value), these values will flow as they are reached
      </p>
      <Precode>
        {`
  .text {
    font-size: clamp(2rem, 1rem + 3vw, 50px)
  }        
          `}
      </Precode>
      <h3>Calc()</h3>
      <Precode>
        {`
  /*
   14 = smaller font size
   18 = bigger font size
   300 = larger viewport size
   1400 = smaller viewport size
  */

  .body {
    font-size: calc(14px + (18 -14)*((100vw - 300px)/(1400 - 300)));

  }        
          `}
      </Precode>
    </article>
  );
};

export default ResponsiveText;
