import styled from 'styled-components';

export const LatestNewsContainer = styled.section`
  background-color: var(--color-primary-50);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

export const LatestNewsBox = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3% 10% 0 10%;
  align-items: center;

  h2 {
    color: var(--color-grey-800);
    font-size: 33px;
  }

  .category-selected {
    color: var(--color-grey-800);
  }

  @media only screen and (max-width: 980px) {
    h2 {
      color: var(--color-grey-800);
      font-size: 25px;
    }
  }

  @media only screen and (max-width: 840px) {
    flex-direction: column;
    justify-content: unset;
  }

  @media only screen and (max-width: 460px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const GalleryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media only screen and (max-width: 600px) {
    flex-wrap: wrap;
    gap: 5px 20px;
    text-align: center;
    justify-content: center;
  }
`;

export const GalleryItem = styled.div`
  color: var(--color-grey-300);
  list-style-type: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: var(--color-grey-800);
  }

  @media only screen and (max-width: 980px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 460px) {
    font-size: 13px;
  }
`;

export const LatestNewsGallery = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const LatestNewsMore = styled.div`
  height: 20vh;
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto auto 30px auto;
  font-weight: 500;
  letter-spacing: 7px;
  cursor: pointer;
  transition: all ease 0.3s;
  font-size: var(--size-4);
  color: var(--color-primary-350);

  &:hover {
    letter-spacing: 8px;
  }

  @media only screen and (max-width: 700px) {
    height: 10vh;
  }

  @media only screen and (max-width: 500px) {
    font-size: var(--size-3);
  }
`;