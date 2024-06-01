import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Details from "./routes/details.tsx";
import ErrorPage from "./routes/error.tsx";
import Home from "./routes/home.tsx";
import Layout from "./components/layout.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tvShow/:tvShowId",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
