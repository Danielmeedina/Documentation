import React, { useContext, useState } from "react";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";
import ThemeContext from "../context/ThemeContext";
import "./layout.css";

const Layout = ({ topics, title, color, children }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme ? "window light" : "window"}>
      <main className="layout-container">
        <aside className="container-aside">
          <div className={open ? "menu-aside" : "menu-aside display-none"}>
            <ul>
              {topics.map((topic, i) => {
                let link = topic.toLowerCase().replace(/\s+/g, "");
                return (
                  <li key={i}>
                    <a onClick={() => setOpen(false)} href={`#${link}`}>
                      {topic}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="menu-up">
            <button
              className={open ? "animation-color" : undefined}
              onClick={() => setOpen(!open)}
            >
              {open ? <BiArrowFromBottom /> : <BiArrowFromTop />}
            </button>
          </div>
        </aside>
        <section className="content">
          <div className="title">
            <h1 style={{ color: `${color}` }}>{title}</h1>
          </div>
          {children}
        </section>
      </main>
    </div>
  );
};

export default Layout;
