import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.barContainer}>
      <div className={styles.topBar}><p className={styles.topBurger}>|||</p></div>
      <ul className={styles.navItems}>
        <li className={styles.navItem}><a href='#item1'>Primero</a></li>
        <li className={styles.navItem}><a href='#item2'>Segundo</a></li>
        <li className={styles.navItem}><a href='#item3'>Tercero</a></li>
        <li className={styles.navItem}><a href='#item4'>Cuarto</a></li>
        <li className={styles.navItem}><a href='#item5'>Quinto</a></li>
        <li className={styles.navItem}><a href='#item6'>Sexto</a></li>
        <li className={styles.navItem}><a href='#item7'>Séptimo</a></li>
        <li className={styles.navItem}><a href='#item8'>Octavo</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;