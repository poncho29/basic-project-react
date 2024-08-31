import { Outlet } from 'react-router-dom';

import { Navabr } from '../../components';

import style from './root-layout.module.css';

export const RootLayout = () => {
  return (
    <main className={style.rootLayout}>
      <Navabr />

      <div className={style.content}>
        <Outlet />
      </div>
    </main>
  )
}
