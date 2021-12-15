import styled from 'styled-components';

export const ContactContainer = styled.section`
  background-color: var(--color-primary-50);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 10%;
  min-height: 100vh;
  width: 100%;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContactTitle = styled.h2`
  color: var(--color-grey-900);
  font-size: var(--size-10);
  letter-spacing: 5px;

  @media (max-width: 980px) {
    font-size: var(--size-8);
  }
`;

export const ContactDescription = styled.p`
  line-height: 30px;
  letter-spacing: .5px;
  font-size: var(--size-4);
  color: var(--color-grey-400);
  width: 60%;
  margin: 0 auto;


  @media (max-width: 980px) {
    font-size: var(--size-3);
  }
`;

export const ContactBody = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 80px;

  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 40px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-right: 10px;

  @media (max-width: 1100px) {
    flex-direction: row;
    width: 100%;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
    padding-right: 0;
    text-align: center;
  }

  @media (max-width: 540px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h3 {
    margin: 0;
  }

  p {
    color: var(--color-grey-400);
    margin: 10px 0 0 0;
  }

  @media (max-width: 1100px) {
    align-items: center;
    width: 33%;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;
    width: 47%;

    p {
      margin: 0;
    }
  }
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;