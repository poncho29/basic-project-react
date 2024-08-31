import { useParams } from 'react-router-dom';

import styles from './detail-game.module.css';

export const DetailGamePage = () => {
  const { id } = useParams();

  return (
    <div className={styles.detailGame}>DetailGamePage id: {id}</div>
  )
}
