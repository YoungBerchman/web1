import Page from "@/page/Page";
import Layout from "@/layout/Layout";
import { createBrowserRouter } from "react-router-dom";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Page />,
      },
    ],
  },
]);
