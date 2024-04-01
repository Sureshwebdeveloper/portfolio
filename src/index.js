import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Page from "./pages/Page";
// import Header from "./components/Header";
import Hero from "./components/Herocontainer/Hero";
import Project from "./components/ProjectContainer/Project";
import Contact from "./components/Contact/Contact";
import Cetrification from "./components/Certification/Cetrification";
import Skill from "./components/Skill_Container/Skill";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      { path: "/", element: <Hero /> },
      { path: "/skills", element: <Skill /> },
      { path: "/cetrification", element: <Cetrification /> },
      { path: "/projects", element: <Project /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
