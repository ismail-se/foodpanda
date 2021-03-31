import { Avatar } from "@material-ui/core";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/images/pandahead.svg" alt="" />
        <img src="/images/foodpanda.svg" alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.container}>EN</div>
        <div className={styles.container}>
          <Avatar className={styles.avatar} />
          LOGIN
        </div>
        <div className={styles.container}>
          <a className={styles.link} href="#"><img src="/icons/basket.svg" alt="" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
