
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RootLayout } from '../layout/RootLayout';

import { DetailGamePage, HomePage, NotFoundPage, ProfilePage } from '../pages';
import { Login } from '../components';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="detail/:id" element={<DetailGamePage />} />

          {/* Private Routes */}
          <Route path="profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
