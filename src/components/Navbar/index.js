import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"


function Navbar() {
  return (
  <div className={styles.container}>
    <nav className={styles.navbar}>
      <div>
        <h1 className={styles.navbar__brand}>Covid ID</h1>
      </div>
      <div>
        <ul className={styles.navbar__list}>
          <li className={styles.navbar__item}><NavLink to="/">Global</NavLink></li>
          <li className={styles.navbar__item}><NavLink to="/indonesia">Indonesia</NavLink></li>
          <li className={styles.navbar__item}><NavLink to="/provinsi">Provinsi</NavLink></li>
          <li className={styles.navbar__item}><NavLink to="/about">About</NavLink></li>
        </ul>
      </div>
    </nav>
  </div>
  );
}

export default Navbar;
