import styled from 'styled-components';

export const DesktopHeaderContainer = styled.nav`
  width: 100%;
`;

export const DesktopHeaderNavItems = styled.ul`
  background: var(--color-primary-50);
  display: flex;
  flex-direction: row;
  height: 8vh;
  justify-content: space-around;
  padding: 0 10%;
  text-align: center;
  width: 100%;
`;

export const DesktopHeaderNavItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  list-style: none;
`;

export const DesktopHeaderLink = styled.a`
  font-weight: 700;
  font-size: var(--size-3);

  &:before {
    content: "";
    display: block;
    height: 4px;
    margin-top: 15px;
  }

  &:after {
    transition: all ease-in-out .2s;
    background: none repeat scroll 0 0 var(--color-primary-350);
    content: "";
    display: block;
    height: 4px;
    margin-top: 15px;
    width: 0;
  }

  &:hover:after {
    padding-right: 35px;
    width: 50%;
  }
`;