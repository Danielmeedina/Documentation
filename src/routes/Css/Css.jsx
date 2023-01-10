import React, { useEffect } from "react";
import "./css.css";
import Nav from "../../components/Nav";
import { getTopics } from "../../services/info";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import ImgResponsive from "./ImgResponsive";
import AnimationPause from "./AnimationPause";
import ScrollBar from "./ScrollBar";
import AnimateBackground from "./AnimateBackground";
import ResponsiveText from "./ResponsiveText";
import ImgInList from "./ImgInList";
import TextColumn from "./TextColumn";
import Grid from "./Grid";
import WaveText from "./WaveText";
import Animation from "./Animation";
import GradientBorders from "./GradientBorders";
import VideoTextBackground from "./VideoTextBackground";
import TypewriterEffect from "./TypewriterEffect";
import TruncateText from "./TruncateText";
import BackgroundText from "./BackgroundText";
import GridResponsive from "./GridResponsive";
import GradientText from "./GradientText";
import SeparateImgEffect from "./SeparateImgEffect";
import Carrousel from "./Carrousel";
import TextRotateEffect from "./TextRotateEffect";
import FormColor from "./FormColor";

const Css = () => {
  const data = getTopics(1);
  useEffect(() => {
    document.title = "Tricks web | CSS";
  }, []);

  return (
    <>
      <Nav data={data} />
      <Layout topics={data} title="CSS" color="#264de4">
        <Animation />
        <AnimateBackground />
        <VideoTextBackground />
        <BackgroundText />
        <AnimationPause />
        <ImgResponsive />
        <ResponsiveText />
        <ScrollBar />
        <ImgInList />
        <TextColumn />
        <Grid />
        <GridResponsive />
        <WaveText />
        <GradientBorders />
        <GradientText />
        <TypewriterEffect />
        <TruncateText />
        <SeparateImgEffect />
        <Carrousel />
        <TextRotateEffect />
        <FormColor />
      </Layout>
      <Footer />
    </>
  );
};

export default Css;
