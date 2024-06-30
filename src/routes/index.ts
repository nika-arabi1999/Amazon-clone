import React from "react";

const Home = React.lazy(() => import("../pages/home"));
export const homeRoutes = [{ path: "/", element: Home }];
