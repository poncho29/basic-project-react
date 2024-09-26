import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RootLayout } from "../layout/RootLayout";

import {
  LoginPage,
  DetailGamePage,
  HomePage,
  NotFoundPage,
  ProfilePage,
} from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />

          {/* Auth routes */}
          <Route path='auth/login' element={<LoginPage />} />

          <Route path='detail/:id' element={<DetailGamePage />} />

          {/* Profile routes */}
          <Route path='profile' element={<ProfilePage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
