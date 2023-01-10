import React from "react";

const AlternativeCommands = () => {
  return (
    <article id="alternativecommands">
      <h2>Alternative commands</h2>
      <ul>
        <li>
          <span>git fetch</span>: it's as if we were downloading the changes
          from the changes from the central repository but it doesn't do a
          merge.
        </li>
        <li>
          <span>git status -s</span>: shows you the status of the files in a
          more in a more orderly way
        </li>
        <li>
          <span>git mv archivo new_name</span>: allows you to change the the
          files and they are ready to be committed.
        </li>
        <li>
          <span>git diff</span>: allows us to see graphically all the changes
          that are going to be made but have not yet passed to the staged stage.
        </li>
        <li>
          <span>gif diff --staged</span>: graphically shows us the changes that
          will be changes that are going to be made but that are in the staged
          stage.
        </li>
        <li>
          <span>git commit --amend</span>: allows us to add more things to the
          last commit in case we forgot to change or remove something.
        </li>
        <li>
          <span>git commit --amend --no-edit</span>: does the same as the above
          but it is not necessary to write a new comment, it keeps the one you
          have
        </li>
        <li>
          <span>git reset --hard HEAD~1</span>: allows us to delete the last
          commit
        </li>
        <li>
          <span>git rm archivo</span>: deletes a file and it is ready to be
          committed
        </li>
        <li>
          <span>git restore --staged archivo</span>: restores files that are in
          a staged state
        </li>
        <li>
          <span>git restore archivo</span>:restore a deleted file
        </li>
        <li>
          <span>git log</span>:shows us the history of all changes made
        </li>
        <li>
          <span>git log --oneline</span>: shows us the history of all the
          changes made changes made but in a more orderly and summarized way.
        </li>
      </ul>
    </article>
  );
};

export default AlternativeCommands;
