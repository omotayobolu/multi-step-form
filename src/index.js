import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Personal from "./components/Personal";
import App from "./App";
import "./styles.css";
import Plan from "./components/Plan";
import AddOns from "./components/Add_ons";
import Summary from "./components/Summary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "personal",
        element: <Personal />,
      },
      {
        path: "plans",
        element: <Plan />,
      },
      {
        path: "add-ons",
        element: <AddOns />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
