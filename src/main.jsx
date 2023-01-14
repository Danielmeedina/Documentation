import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Css from "./routes/Css/Css";
import Git from "./routes/Git/Git";
import Pruebas from "./Pruebas";
import Home from "./routes/Home/Home";
import Html from "./routes/Html/Html";
import Javascript from "./routes/Js/Javascript";
import { ThemeProvider } from "./context/ThemeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h2>Error</h2>,
  },
  {
    path: "/html",
    element: <Html />,
    errorElement: <h2>Error</h2>,
  },
  {
    path: "/css",
    element: <Css />,
    errorElement: <h2>Error</h2>,
  },
  {
    path: "/javascript",
    element: <Javascript />,
    errorElement: <h2>Error</h2>,
  },
  {
    path: "/git",
    element: <Git />,
    errorElement: <h2>Error</h2>,
  },
  {
    path: "/p",
    element: <Pruebas />,
    errorElement: <h2>Error</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </>
);
