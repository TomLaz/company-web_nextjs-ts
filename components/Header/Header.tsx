import type { NextPage } from 'next';
import React from 'react';
import DesktopHeader from './DesktopHeader/DesktopHeader';
import { HeaderContainer } from './Header.styles';
import MobileHeader from './MobileHeader/MobileHeader';

const Header: NextPage = () => {
  const [renderedComponent, setRenderedComponent] = React.useState(<></>);

  React.useEffect(() => {
    setRenderedComponent(window.innerWidth < 980 ?
      <MobileHeader /> :
      <DesktopHeader />
    );
  },[]);

  return (
    <HeaderContainer>
      {renderedComponent}
    </HeaderContainer>
  );
};

export default Header;