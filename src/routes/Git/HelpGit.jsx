import React from "react";

const HelpGit = () => {
  return (
    <article id="githelp">
      <h2>Git Help</h2>
      <ul>
        <li>
          <span>.git config -h</span>: depending on the command you have passed
          <span>(config)</span> helps you to see what the flags are and a
          summary of what each one does.
        </li>
        <li>
          <span>.git help config</span>: the same as the one above 👆🏻 only that
          this one shows you the help in a more complete way in the browser.
        </li>
      </ul>
    </article>
  );
};

export default HelpGit;
