import type { NextPage } from 'next';
import { useContext } from 'react';
import Hamburger from '../../../assets/svg/Hamburger';
import { GlobalContext } from '../../../context/Global.provider';
import menuItems from '../HeaderItems';
import { MobileHeaderContainer, MobileHeaderNavItem, MobileHeaderNavItems, MobileHeaderTopBar } from './MobileHeader.styles';

const MobileHeader: NextPage = () => {
  const { data: { showMenu }, updateShowMenu } = useContext( GlobalContext );

  const onBurgerClickHandler = () => {
    updateShowMenu(!showMenu);
  }

  return (
    <MobileHeaderContainer>
      <MobileHeaderTopBar>
        <div onClick={onBurgerClickHandler}>
          <Hamburger />
        </div>
      </MobileHeaderTopBar>
      <MobileHeaderNavItems showMenu={showMenu}>
        {
          menuItems.map(item => (
            <MobileHeaderNavItem
              key={item.value}
              onClick={() => updateShowMenu(false)}>
              <a href={item.ref}>
                {item.value}
              </a>
            </MobileHeaderNavItem>
          ))
        }
      </MobileHeaderNavItems>
    </MobileHeaderContainer>
  );
};

export default MobileHeader;