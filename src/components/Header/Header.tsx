import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>ECS1PLE SHOP</h1>
      <nav>
        <NavLink to="/" className={styles.navLink}>
          Главная
        </NavLink>
        <NavLink to="/products" className={styles.navLink}>
          Продукты
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
