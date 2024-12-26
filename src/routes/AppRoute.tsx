
import React from "react";
import { Outlet } from "react-router-dom";
import ReactLoading from "react-loading";

function AppRoute({ Layout }: any) {
  return (
    <Layout>
      <React.Suspense fallback={<div className="products-Loading">
              <ReactLoading type="spin" color="#ffd000" height={70} width={70} />
            </div>}>
        <Outlet />
      </React.Suspense>
    </Layout>
  );
}

export default AppRoute;
