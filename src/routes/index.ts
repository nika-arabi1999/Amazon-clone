import React from "react";

const Home = React.lazy(() => import("../pages/home"));
const Products = React.lazy(() => import("../pages/products"));
const SingleProduct = React.lazy(() => import("../pages/singleProduct"));
const Cart = React.lazy(() => import("../pages/cart"));

//route arrays
export const homeRoutes = [
  { path: "/", element: Home },
  { path: "/singleProduct", element: SingleProduct },
  { path: "/cart", element: Cart},
  { path: "/products/:slug", element: Products }
];


