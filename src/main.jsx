import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import Volonteer from "./routes/Volonteer.jsx";
import WebDev from "./routes/WebDev";
import Services_m from "./routes/Services_m";
import Donate from "./routes/Donate";

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
				path: "contact",
				element: <Contact />,
			},
			{
				path: "services",
				element: <Services_m/>,
			},
			{
				path: "career/volunteer",
				element: <Volonteer />,
			},
			
			{
				path: "donate",
				element: <Donate />,
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