import React from "react";

const InitialCommands = () => {
  return (
    <article id="initialcommands">
      <h2>Initial commands </h2>
      <p>before starting with git I recommend to know these commands:</p>
      <ul>
        <li>
          <span>ls</span>: is used to display a list of documents
        </li>
        <li>
          <span>ls -a</span>: displays hidden documents
        </li>
        <li>
          <span>pwd</span>: it is used to know the current location
        </li>
        <li>
          <span>cd file</span>: allows you to access a folder
        </li>
        <li>
          <span>cd ..</span>: allows you to leave wherever you are, to go one
          folder back
        </li>
        <li>
          <span>mkdir</span>: allows you to create a folder
        </li>
        <li>
          <span>mv name newname</span>: allows you to rename a file
        </li>
        <li>
          <span>rm archivo</span>:allows you to delete the given file
        </li>
        <li>
          <span>code .</span>: open your established code editor
        </li>
        <li>
          <span>cat</span>: shows us the content of our file
        </li>
      </ul>
    </article>
  );
};

export default InitialCommands;
