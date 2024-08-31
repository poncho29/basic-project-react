import { ProtectedRoute } from '../../router/ProtectedRoute';

import styles from './profile.module.css';

export const ProfilePage = () => {
  return (
    <ProtectedRoute>
      <div className={styles.profile}>Profile Page</div>
    </ProtectedRoute>
  )
}
