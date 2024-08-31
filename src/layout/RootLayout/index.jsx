import { Outlet } from 'react-router-dom';

import style from './root-layout.module.css';

export const RootLayout = () => {
  return (
    <main className={style.rootLayout}>
      <nav className={style.nav}>
        <h2>Logo</h2>
      </nav>

      <div className={style.content}>
        <Outlet />
      </div>
    </main>
  )
}
