import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./routes/Layout.tsx";
import "normalize.css";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About.tsx";
import Resume from "./routes/Resume.tsx";
import Projects from "./routes/Projects.tsx";
import Home from "./routes/Home.tsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "projects/",
        element: <Projects />,
      },
      {
        path: "resume/",
        element: <Resume />,
      },
      {
        path: "about/",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
