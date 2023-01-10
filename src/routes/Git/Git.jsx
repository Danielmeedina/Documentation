import React, { useEffect } from "react";
import "./git.css";
import Nav from "../../components/Nav";
import { getTopics } from "../../services/info";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import InitialCommands from "./InitialComands";
import FirstConfiguration from "./FirstConfiguration";
import InitializeRepository from "./InitializeRepository";
import BasicGitFlow from "./BasicGitFlow";
import HelpGit from "./HelpGit";
import BranchManagement from "./BranchManagement";
import MergeBranch from "./MergeBranch";
import PullRequest from "./PullRequest";
import AlternativeCommands from "./AlternativeCommands";

const Git = () => {
  const data = getTopics(3);
  useEffect(() => {
    document.title = "Tricks web | GIT";
  }, []);

  return (
    <>
      <Nav data={data} />
      <Layout topics={data} title="GIT" color="#f15233">
        <InitialCommands />
        <FirstConfiguration />
        <InitializeRepository />
        <BasicGitFlow />
        <HelpGit />
        <BranchManagement />
        <MergeBranch />
        <PullRequest />
        <AlternativeCommands />
      </Layout>
      <Footer />
    </>
  );
};

export default Git;
