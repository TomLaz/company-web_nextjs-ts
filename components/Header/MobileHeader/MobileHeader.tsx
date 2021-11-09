import { useContext, useState } from 'react';
import type { NextPage } from 'next';
import styles from './MobileHeader.module.css';
import menuItems from '../HeaderItems';
import Hamburger from '../../../assets/svg/Hamburger';
import { GlobalContext } from '../../../context/Global.provider';

const MobileHeader: NextPage = () => {
  const { data: { showMenu }, updateShowMenu } = useContext( GlobalContext );

  const onBurgerClickHandler = () => {
    updateShowMenu(!showMenu);
  }

  return (
    <nav className={showMenu ? styles.containerFixed : styles.container}>
      <div className={styles.topBar}>
        <div onClick={onBurgerClickHandler}>
          <Hamburger />
        </div>
      </div>
      <ul className={showMenu ? styles.navItems : styles.navItemsHidden}>
        {
          menuItems.map(item => (
            <li
              key={item.value}
              className={styles.navItem}
              onClick={() => updateShowMenu(false)}>
              <a href={item.ref}>
                {item.value}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default MobileHeader;