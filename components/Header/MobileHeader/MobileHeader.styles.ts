import styled from 'styled-components';

export const MobileHeaderContainer = styled.nav<any>`
  width: 100%;
  height: ${( props ): any => props.showMenu ? '100vh' : 'auto'};
  position: ${( props ): any => props.showMenu ? 'fixed' : 'unset'};
`;