import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./routes/home.tsx";
import ErrorPage from "./routes/error-page.tsx";
import Root from "./routes/root.tsx";
import ProductDetailPage from "./routes/productDetail.tsx";
import Protein from "./routes/Protein.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/product",
            element: <ProductDetailPage />,
            errorElement: <ErrorPage />,
            // loader: async ({ params }) => {
            //   const { productId } = params;
            //   const response = await fetch(`/api/products/${productId}`);
            //   if (!response.ok) throw new Error("Failed to load product data");
            //   return response.json();
            // },
          },
          {
            path: "/protein",
            element: <Protein />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
