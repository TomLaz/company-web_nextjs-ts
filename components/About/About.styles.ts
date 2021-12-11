import styled from 'styled-components';

export const AboutContainer = styled.section`
  background-color: var(--color-primary-50);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 100%;
  height: 100vh;

  h2,
  p {
    margin: 0;
  }

  @media (min-width: 980px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const AboutImage = styled.div`
  height: 40vh;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;

  span {
    height: 30vh!important;
    top: 50%!important;
    left: 50%!important;
    transform: translate(-50%, -50%)!important;
    width: 100%!important;
  }

  @media (min-width: 980px) {
    width: 50%;
    height: 50vh;

    span {
      height: initial!important;
      top: 0!important;
      left: 0!important;
      transform: none!important;
      width: initial!important;
    }
  }
`;

export const AboutText = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  width: 100%;

  @media (min-width: 980px) {
    justify-content: space-around;
    height: 45vh;
    text-align: left;
    align-items: flex-start;
    width: 50%;
  }
`;

export const AboutTextTitle = styled.h2`
  color: var(--color-grey-900);
  font-size: var(--size-4);
  letter-spacing: 5px;

  @media (min-width: 980px) {
    font-size: var(--size-6);
  }
`;

export const AboutTextDescription = styled.p`
  line-height: 19px;
  letter-spacing: .5px;
  font-size: var(--size-3);
  color: var(--color-grey-500);

  @media (min-width: 980px) {
    line-height: 23px;
    letter-spacing: 1px;
    font-size: var(--size-4);
  }
`;

export const AboutReadMoreBox = styled.div`
  font-weight: 500;
  letter-spacing: 4px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--color-grey-900);
`;

export const AboutReadMoreText = styled.p`
  border: 2px solid var(--color-grey-900);
  padding: 7px;
  border-radius: 2px;
  transition: border-color .3s ease;
  font-size: var(--size-3);

  &:hover {
    border: 2px solid var(--color-grey-900);
  }

  @media (min-width: 980px) {
    border: 2px solid var(--color-primary-50);
    font-size: var(--size-4);
  }
`;