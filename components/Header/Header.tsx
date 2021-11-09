import React from 'react';
import type { NextPage } from 'next';
import styles from './Header.module.css';
import MobileHeader from './MobileHeader/MobileHeader';
import DesktopHeader from './DesktopHeader/DesktopHeader';

const Header: NextPage = () => {
  const [renderedComponent, setRenderedComponent] = React.useState(<></>);

  React.useEffect(() => {
    setRenderedComponent(window.innerWidth < 980 ?
      <MobileHeader /> :
      <DesktopHeader />
    );
  },[]);

  return (
    <header className={styles.header}>
      {renderedComponent}
    </header>
  );
};

export default Header;