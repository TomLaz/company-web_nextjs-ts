import type { NextPage } from 'next';
import styles from './DesktopHeader.module.css';
import { DesktopHeaderContainer, DesktopHeaderNavItems, DesktopHeaderNavItem, DesktopHeaderLink } from './DesktopHeader.styles';
import menuItems from '../HeaderItems';

const DesktopHeader: NextPage = () => {
  return (
    <DesktopHeaderContainer>
      <DesktopHeaderNavItems>
        {
          menuItems.map(item => (
            <DesktopHeaderNavItem key={item.value}>
              <DesktopHeaderLink href={item.ref}>
                {item.value}
              </DesktopHeaderLink>
            </DesktopHeaderNavItem>
          ))
        }
      </DesktopHeaderNavItems>
    </DesktopHeaderContainer>
  );
};

export default DesktopHeader;