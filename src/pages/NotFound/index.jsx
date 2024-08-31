import { Link } from 'react-router-dom';

import style from './not-found.module.css';

export const NotFoundPage = () => {
  return (
    <div className={style.notFound}>
      <h2>Not Found Page 404</h2>
      
      <Link to={'/'}>Go Home</Link>
    </div>
  )
}
