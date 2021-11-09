import type { NextPage } from 'next';
import styles from './DesktopHeader.module.css';
import menuItems from '../HeaderItems';

const DesktopHeader: NextPage = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.navItems}>
        {
          menuItems.map(item => (
            <li
              key={item.value}
              className={styles.navItem}>
              <a
                className={styles.item}
                href={item.ref}>
                {item.value}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default DesktopHeader;