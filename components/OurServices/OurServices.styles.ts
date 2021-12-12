import styled from 'styled-components';

export const OurServicesContainer = styled.section`
  background-color: var(--color-primary-25);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 980px) {
    height: 150vh;
  }
`;

export const OurServicesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  align-items: center;

  h2,
  p {
    margin: 0;
  }

  @media (max-width: 980px) {
    flex-direction: column;
    height: 150vh;
  }
`;

export const OurServicesImage = styled.div`
  height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 50%;

  span {
    height: initial!important;
    top: 0!important;
    left: 0!important;
    transform: none!important;
    width: initial!important;
    filter: grayscale(1)!important;
  }

  @media (max-width: 980px) {
    width: 100%;
    height: 80vh;

    span {
      height: 80vh!important;
      top: 50%!important;
      left: 50%!important;
      transform: translate(-50%, -50%)!important;
      width: 100%!important;
    }
  }
`;

export const OurServicesImageOverlay = styled.div`
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-950);

  @media (max-width: 980px) {
    height: 80vh;
  }
`;

export const OurServicesImageText = styled.div`
  border: 5px solid var(--color-primary-10);
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  color: var(--color-primary-10);
  flex-direction: column;
  padding: 5%;
  text-align: center;
  gap: 20px;

  h2 {
    font-size: var(--size-10);
    font-size: var(--size-8);
  }

  p {
    line-height: 27px;
    font-size: var(--size-4);
    letter-spacing: 1px;
  }

  @media (max-width: 980px) {
    height: 55vh;
    width: 80%;

    p {
      line-height: 21px;
      font-size: var(--size-3);
    }

    h2 {
      font-weight: 700;
    }
  }
`;

export const OurServicesOptionsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: left;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 50%;
  height: 85vh;
  padding: 5% 10%;

  @media (max-width: 980px) {
    width: 100%;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    padding: 0;
    height: auto;
  }
`;

export const OurServicesOptionItem = styled.div<any>`
  transform: scale(.5);
  height: 25vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: ${( props ): any => props.active ? 'var(--color-grey-900)' : 'var(--color-grey-500)'};
  cursor: pointer;

  p {
    font-size: var(--size-6);
    margin-top: 35px;
  }

  path {
    fill: ${( props ): any => props.active ? 'var(--color-grey-900)' : 'var(--color-grey-500)'};
  }

  @media (max-width: 980px) {
    height: 23vh;
  }
`;