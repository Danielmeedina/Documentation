import React from "react";

const BranchManagement = () => {
  return (
    <article id="branchmanagement">
      <h2>Branch management</h2>
      <ul>
        <li>
          <span>git branch name_branch</span>: Create new branch
        </li>
        <li>
          <span>git branch</span>: shows us all the branches of the repository
        </li>
        <li>
          <span>git branch --no-merged</span>: lists the branches not merged
          with the current branch
        </li>
        <li>
          <span>git branch --merged</span>: lists the branches merged with the
          current branch
        </li>
        <li>
          <span>git checkout -b name_branch</span>: is used to create a new
          branch and changes you directly
        </li>
        <li>
          <span>git checkout name_branch</span>: is used to change branches
        </li>
        <li>
          <span>git checkout hash</span>: hash = code shown in the log e.g.:
          ca7csa90, this is used to go to a previous version of the project
        </li>
        <li>
          <span>git branch -d name_branch</span>: delete branch
        </li>
        <li>
          <span>git branch -D name_branch</span>: we delete a branch by force
        </li>
        <li>
          <span>git revert</span>: reverts the last commit and creates a new one
          with the reverted new one with the reverted changes, but does not
          delete them.
        </li>
        <li>
          <span>git merge name_branch</span>: being in the main branch, we use
          it to bring changes made in other branches to bring us the changes
          made in other branches and join them to the main branch.
        </li>
      </ul>
    </article>
  );
};

export default BranchManagement;
