import React, { useState } from "react";
import "./btnNav.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { info } from "../services/info";

const BtnNav = () => {
  const [btnVisible, setBtnVisible] = useState(false);

  return (
    <>
      <button onClick={() => setBtnVisible(!btnVisible)}>
        <RxHamburgerMenu />
      </button>
      {btnVisible && (
        <div className="container-language">
          <ul>
            <li className="links">
              <Link to={"/"}>Home</Link>
            </li>
            {info.map((e, i) => {
              return (
                <li key={i} className="links">
                  <Link to={`/${e.title}`}>{e.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default BtnNav;
