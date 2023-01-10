import React from "react";

const InitializeRepository = () => {
  return (
    <article id="initializerepository">
      <h2>Initialize repository</h2>
      <p>steps to follow: </p>
      <ul>
        <li>
          create a folder using the following command{" "}
          <span>mkdir name_file</span>
        </li>
        <li>
          move to the folder with the command <span>cd name_file</span>
        </li>
        <li>
          create the readme with the command <span>touch README.md</span>
        </li>
        <li>
          create the gitignore with the command <span>touch .gitignore</span>
        </li>
        <li>
          we initialize the project with git with this command{" "}
          <span>git init</span>
        </li>
        <li>
          we enter our code editor with the command <span>code .</span>
        </li>
      </ul>
    </article>
  );
};

export default InitializeRepository;
