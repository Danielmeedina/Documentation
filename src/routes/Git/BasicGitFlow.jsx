import React from "react";

const BasicGitFlow = () => {
  return (
    <article id="basicgitflow">
      <h2>Basic git flow</h2>
      <p>steps to follow: </p>
      <ul>
        <li>make any changes to your project</li>
        <li>
          to view the status of the files we use the command{" "}
          <span>git status </span>
        </li>
        <li>
          we use the command <span>git add</span> to "save" the change you have
          made
        </li>
        <li>
          we use the command <span>git commit -m "first commit"</span> so that
          the changes you have made are the changes you have made in the
          repository history.
        </li>
        <li>
          we use the command <span>git push</span> to upload all the changes we
          made to the remote repository in github
        </li>
        <li>
          <span>if you want</span> to download the latest changes or the latest
          version of the project we use the command <span>git pull</span>
        </li>
      </ul>
    </article>
  );
};

export default BasicGitFlow;
