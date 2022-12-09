import styles from "./Navigation.module.css";

// Importing UI
import Button from "../../UI/Button/Button";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation_container}>
        <div className={styles.nav_logo_container}>
          <img src='/ui_pack/folio.png' className={styles.navigation_logo} />
        </div>
        <ul className={styles.nav_items}>
          <li className={styles.nav_item + " " + styles.nav_user_container}>
            <img className={styles.nav_user} src='/images/user.png' />{" "}
            <span>Welcome, Himanshu!</span>
          </li>
          <li className={styles.nav_item}>
            <Button theme='light' label='logout' />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
