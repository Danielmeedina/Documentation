import React from "react";

const FirstConfiguration = () => {
  return (
    <article id="firstconfiguration">
      <h2>First time configuration</h2>
      <p>
        With these commands you will be able to configure your git in a quick
        and easy way:
      </p>
      <ul>
        <li>git config --global user.name "ur name"</li>
        <li>git config --global user.mail urmail@gmail.com</li>
        <li>
          git config --global core.editor "code --wait"{" "}
          <span>to set vs as your default catch editor</span>
        </li>
        <li>git config --global core.autocrlf true</li>
      </ul>
    </article>
  );
};

export default FirstConfiguration;
