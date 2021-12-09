import styled from 'styled-components';

export const ImageBoxContainer = styled.div`
  width: 20%;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover .image-description {
    transform: translateY(0);
  }

  @media only screen and (max-width: 980px) {
    width: 25%;
  }

  @media only screen and (max-width: 600px) {
    width: 33%;
  }

  @media only screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const ImageDescription = styled.div`
  position: absolute;
  bottom: 0;
  background-color: var(--color-primary-10);
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  transform: translateY(100%);
`;

export const DescriptionTitle = styled.h3`
  color: var(--color-grey-800);
  letter-spacing: 5px;
  font-size: 14px;
`;

export const DescriptionText = styled.p`
  color: var(--color-grey-600);
  font-weight: 500;
  letter-spacing: 5px;
  font-size: 12px;
  padding: 0 10px;
  margin: 0;
  text-align: center;
`;