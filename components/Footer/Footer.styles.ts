import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: var(--color-primary-500);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  width: 100%;

  .input-email {
    &:active,
    &:focus {
      outline: none;
    }
  }
`;

export const FooterTitle = styled.h2`
  border: 4px solid #fff;
  padding: 8px;
  color: #fff;
  width: fit-content;
  font-weight: 700;
`;

export const FooterDescription = styled.p`
  max-width: 550px;
  text-align: center;
  color: var(--color-primary-50);
  font-size: 13px;
  font-weight: 100;
  letter-spacing: 2px;
`;

export const FooterInputBox = styled.div`
  max-width: 540px;
  margin: 30px 0;
  background-color: #00000026;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  & label {
    color: #fff;
    font-weight: 700;
    padding: 0 10px 0 20px;
  }


`;