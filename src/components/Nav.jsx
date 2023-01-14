import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InputNav from "./InputNav";
import "./nav.css";
import BtnNav from "./BtnNav";
import ThemeContext from "../context/ThemeContext";

const Nav = ({ search = true, data }) => {
  const [visible, setVisible] = useState(search);
  const { theme } = useContext(ThemeContext);
  return (
    <header
      className={
        visible
          ? `search ${theme ? "light" : ""}`
          : `nosearch ${theme ? "light" : ""}`
      }
    >
      <nav className={visible ? "grid-search" : "flex-nosearch"}>
        <div className={visible ? "text flex1" : "text"}>
          <div className="container-text">
            <div className="rotate">
              <Link to="/">
                <h2>DOCUMENTATION</h2>
              </Link>
              <Link to="/">
                <span>TRICKS WEB</span>
              </Link>
              <Link to="/">
                <span>HELPERS</span>
              </Link>
            </div>
          </div>
        </div>
        {visible && <InputNav topics={data} />}
        <div className={visible ? "menu flex1" : "menu"}>
          <BtnNav />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
