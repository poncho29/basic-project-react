import { useNavigate } from "react-router-dom";
import styles from "./profile.module.css";

export const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.profile}>
      <h1>Profile Page</h1>

      <button onClick={() => navigate("/auth/login")}>login</button>
    </div>
  );
};
