import { Outlet } from "react-router-dom";

import { ProtectedRoute } from "../../router/ProtectedRoute";
import { Navbar } from "../../components";

import style from "./root-layout.module.css";

export const RootLayout = () => {
  return (
    <main className={style.rootLayout}>
      <ProtectedRoute>
        <Navbar />

        <div className={style.content}>
          <Outlet />
        </div>
      </ProtectedRoute>
    </main>
  );
};
