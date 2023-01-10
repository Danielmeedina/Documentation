import React from "react";

const MergeBranch = () => {
  return (
    <article id="mergebranch">
      <h2>Merge branch</h2>
      <p>steps to follow</p>
      <ul>
        <li>
          we place ourselves in the branch where we want that it will be the
          fusion, generally it will be the main
          <span>git checkout main</span>
        </li>
        <li>
          we use the command <span>git merge branch_secondary</span>
        </li>
        <li>
          in order to update our repository with the latest upload and not
          generate conflicts we use the following command command{" "}
          <span>git push -u origin main</span>
        </li>
        <li>
          <span>(optional)</span>: If you are sure that you will no longer need
          the branches, you can delete them with the command
          <span>git push origin --delete branch_secondary</span>
        </li>
      </ul>
    </article>
  );
};

export default MergeBranch;
