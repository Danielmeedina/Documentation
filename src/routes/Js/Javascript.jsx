import React, { useEffect } from "react";
import "./javascript.css";
import Nav from "../../components/Nav";
import { getTopics } from "../../services/info";
import Layout from "../../components/Layout";
import MergeArray from "./MergeArray";
import Footer from "../../components/Footer";
import MinMaxNumber from "./MinMaxNumber";

const Javascript = () => {
  useEffect(() => {
    document.title = "Tricks web | Javascript";
  }, []);

  const data = getTopics(2);
  return (
    <>
      <Nav data={data} />
      <Layout topics={data} title="Javascript" color="#f7e01d">
        <MergeArray />
        <MinMaxNumber />
      </Layout>
      <Footer />
    </>
  );
};

export default Javascript;
