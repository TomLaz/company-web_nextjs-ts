import styled from 'styled-components';

export const MobileHeaderContainer = styled.nav<any>`
  width: 100%;
  height: ${( props ): any => props.showMenu ? '100vh' : 'auto'};
  position: ${( props ): any => props.showMenu ? 'fixed' : 'unset'};
`;

export const MobileHeaderTopBar = styled.div`
  height: 6vh;
  display: flex;
  justify-content: flex-start;
  background-color: var(--color-primary-50);
  cursor: pointer;
  padding: 2px;
  margin: 4px 0 0 4px;
`;

export const MobileHeaderNavItems = styled.ul<any>`
  background-color: var(--color-primary-50);
  display: flex;
  flex-direction: column;
  height: 93vh;
  justify-content: space-around;
  position: absolute;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  display: ${( props ): any => props.showMenu ? 'flex' : 'none'};
`;

export const MobileHeaderNavItem = styled.li`
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;