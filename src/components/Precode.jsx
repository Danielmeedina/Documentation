import React from "react";
import "./precode.css";

const Precode = ({ children }) => {
  return (
    <div className="code">
      <pre className="precode">
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default Precode;
