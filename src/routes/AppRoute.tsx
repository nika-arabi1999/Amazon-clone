// import Loading from '@components/common/Loading/Loading';
import React from "react";
import { Outlet } from "react-router-dom";

function AppRoute({ Layout }: any) {
  return (
    <Layout>
      <React.Suspense fallback={"loading"}>
        <Outlet />
      </React.Suspense>
    </Layout>
  );
}

export default AppRoute;
