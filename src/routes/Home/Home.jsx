import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import home from "../../img/backImg.png";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import Card from "./Card";
import "./home.css";

const Home = () => {
  useEffect(() => {
    document.title = "Tricks web";
  }, []);
  return (
    <>
      <Nav search={false} />
      <section className="home-container">
        <div className="home">
          <main className="home-text">
            <h1>Tricks web</h1>
            <p>Components. Design. Things you don't know. And more...</p>
          </main>
          <div className="home-img">
            <img src={home} alt="Home" preload="true" />
          </div>
        </div>
      </section>
      <section className="info-container">
        <div className="info">
          <p>
            here you will find a variety of tricks. Learn new things. Discover
            things you didn't know, all this done for the <span>❤</span> of
            frontend
          </p>
        </div>
      </section>
      <section className="cards-container">
        <h2>Do you want know more?</h2>
        <div className="cards-content">
          <Link to="/html">
            <Card title="Html" img={<IoLogoHtml5 />} color="#e44d25" />
          </Link>
          <Link to="/css">
            <Card title="css" img={<IoLogoCss3 />} color="#264de4" />
          </Link>
          <Link to="/javascript">
            <Card title="javascript" img={<SiJavascript />} color="#f7e01d" />
          </Link>
          <Link to="/git">
            <Card title="Git" img={<FaGitAlt />} color="#f15233" />
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
