import React from "react";

const Home = React.lazy(() => import("../pages/home"));
const Products = React.lazy(() => import("../pages/products"));

//route arrays
export const homeRoutes = [{ path: "/", element: Home }];
export const productsRoutes = [{ path: "/products", element: Products }];
