import styled from 'styled-components';

export const PresentationContainer = styled.section`
  background-color: var(--color-primary-50);
  height: 93vh;
  width: 100%;
  position: relative;
`;

export const PresentationTextWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: var(--color-grey-800);
  background: var(--color-grey-125);
  padding: 15px;
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-direction: column;

  @media (min-width: 480px) {
    height: 125px;
  }

  @media (min-width: 980px) {
    height: 150px;
  }
`;

export const PresentationTextTitle = styled.p`
  font-weight: 800;
  letter-spacing: 3px;
  font-size: var(--size-6);
  margin: 0;

  @media (min-width: 480px) {
    font-size: var(--size-8);
  }

  @media (min-width: 980px) {
    font-size: var(--size-12);
  }
`;

export const PresentationTextDescription = styled.p`
  font-size: var(--size-3);
  margin: 0;

  @media (min-width: 480px) {
    font-size: var(--size-4);
  }

  @media (min-width: 980px) {
    font-size: var(--size-5);
  }
`;