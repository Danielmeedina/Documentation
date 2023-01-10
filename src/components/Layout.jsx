import React, { useState } from "react";
import "./layout.css";
import { BiArrowFromBottom, BiArrowFromTop } from "react-icons/bi";

const Layout = ({ topics, title, color, children }) => {
  const [open, setOpen] = useState(false);

  return (
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
  );
};

export default Layout;
