import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Personal from "./components/Personal";
import App from "./App";
import "./styles.css";
import Plan from "./components/Plan";
import AddOns from "./components/Add_ons";
import Summary from "./components/Summary";
import { FormProvider } from "./store/FormContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/personal" replace />,
      },
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
    <FormProvider>
      <RouterProvider router={router} />
    </FormProvider>
  </React.StrictMode>
);
