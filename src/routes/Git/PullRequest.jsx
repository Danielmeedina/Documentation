import React from "react";

const PullRequest = () => {
  return (
    <article id="pullrequest">
      <h2>Pull request</h2>
      <p>
        following these steps you can make a collaboration to a repository, or
        what is also known as a pull request
      </p>
      <ul>
        <li>
          We go to the repository to which we want to contribute and do a fork
        </li>
        <li>
          The repository that we have just forked, we clone it to our pc{" "}
          <span>git clone https://github.com/user/reposiorioFork.git</span>
        </li>
        <li>
          we rename the remote of our cloned origin repository to fork{" "}
          <span>git remote rename origin fork</span>
        </li>
        <li>
          we add the remote from the original repository{" "}
          <span>
            git remote add origin https://github.com/usuario/repositorio.git
          </span>
        </li>
        <li>
          in our cloned repository we create a new branch and make the changes
          or support as appropriate <span>git checkout -b support_branch</span>
        </li>
        <li>
          we make the respective <span> git add</span> and{" "}
          <span>git commit</span> to later upload it to the cloned repository
          <span>git push fork support_branch</span>
        </li>
        <li>
          request the pull request via github and wait for it to be accepted.
        </li>
        <li>
          once the pull request is accepted by the original repository owner, we
          switch to the main branch to download the the original repository, we
          switch to the main branch to download the changes the changes they
          have made <span>git checkout main</span> <span>pull origin main</span>
        </li>
        <li>
          we save the changes we brought from the original repository and push
          it to our clone repository <span>git push fork main</span>
        </li>
        <li>
          we delete the branch we created to contribute to this repository{" "}
          <span>git branch -d support_branch</span>
        </li>
        <li>
          we remove the remote branch{" "}
          <span>git push fork --delete support_branch</span>
        </li>
      </ul>
    </article>
  );
};

export default PullRequest;
