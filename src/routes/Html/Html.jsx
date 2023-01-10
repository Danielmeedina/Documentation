import React, { useEffect } from "react";
import "./html.css";
import Nav from "../../components/Nav";
import { getTopics } from "../../services/info";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import SendEmail from "./SendEmail";
import MobileIcon from "./MobileIcon";
import MobileColor from "./MobileColor";
import FlipCard from "./FlipCard";
import Picture from "./Picture";
import FeatureQuery from "./FeatureQuery";
import Autocomplete from "./Autocomplete";

const Html = () => {
  const data = getTopics(0);
  useEffect(() => {
    document.title = "Tricks web | HTML";
  }, []);

  return (
    <>
      <Nav data={data} />
      <Layout topics={data} color="#e44d25" title="HTML">
        <SendEmail />
        <MobileIcon />
        <MobileColor />
        <FlipCard />
        <Picture />
        <FeatureQuery />
        <Autocomplete />
      </Layout>
      <Footer />
    </>
  );
};

export default Html;
