import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import About from "./routes/About.jsx";
import WebDesign from "./routes/WebDev.jsx";
import WebDev from "./routes/WebDev";

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Care/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services/web-design",
        element: <WebDesign />,
      },
      {
        path: "services/web-dev",
        element: <WebDev />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
