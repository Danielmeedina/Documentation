import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./inputNav.css";

const InputNav = ({ topics }) => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setShow(true);
    if (e.target.value == "") {
      setShow(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const reset = () => {
    setShow(false);
    setQuery("");
  };

  let result = [];
  if (!query) {
    result = topics;
  } else {
    result = topics.filter((topic) =>
      topic.toLowerCase().includes(query.toLocaleLowerCase())
    );
  }

  return (
    <form className="search-nav" onSubmit={handleSubmit}>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          type="text"
          value={query}
          className="input"
          onChange={handleChange}
          placeholder="Search: card, input, text, etc...."
          autoComplete="off"
        />
      </div>
      {show && (
        <div className="box-search">
          <ul>
            {result.map((item, i) => {
              let link = item.toLowerCase().replace(/\s+/g, "");
              return (
                <li key={i}>
                  <a onClick={reset} href={`#${link}`}>
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </form>
  );
};

export default InputNav;
