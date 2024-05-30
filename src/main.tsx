import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Details from "./routes/details.tsx";
import Home from "./routes/home.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
