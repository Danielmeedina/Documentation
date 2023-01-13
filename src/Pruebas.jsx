import React, { useState } from "react";

const dictionary = [
  {
    en: {
      title: "css",
      topics: {
        formColor: {
          title: "Form color",
          text: {
            p: "Text english",
            small: "text small",
          },
        },
        pauseAnimation: {
          title: "Pause animation",
          text: {
            p: "Text english",
            small: "text small",
          },
        },
      },
    },
    es: {
      title: "css",
      topics: {
        formColor: {
          title: "Color a formularios",
          text: {
            p: "Texto en español de este articulo",
            small: "texto de small",
          },
        },
        pauseAnimation: {
          title: "Pausar animacion",
          text: {
            p: "Texto en español de este articulo",
            small: "texto de small",
          },
        },
      },
    },
  },
];

const Pruebas = () => {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState(dictionary[0][language]);

  const handleLanguage = () => {
    if (language === "es") {
      setLanguage("en");
      setText(dictionary[0].en);
    } else {
      setLanguage("es");
      setText(dictionary[0].es);
    }
  };

  return (
    <div>
      <button onClick={handleLanguage}>change language</button>
      <h2>{text.title}</h2>
      <h2>{text.topics.formColor.title}</h2>
      <p>{text.topics.formColor.text.p}</p>
    </div>
  );
};

export default Pruebas;
