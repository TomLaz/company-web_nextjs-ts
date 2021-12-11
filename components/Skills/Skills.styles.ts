import styled from 'styled-components';

export const SkillsContainer = styled.section`
  width: 100%;
  background-color: var(--color-primary-10);
  min-height: 60vh;
  display: flex;
  gap: 15px;
  padding: 0 10%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    color: var(--color-grey-800);
    font-size: 33px;
  }

  @media only screen and (max-width: 680px) {
    padding: 0 10% 10%;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;
  gap: 40px;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
  }
`;

export const SkillBox = styled.div`
  width: 46%;

@media only screen and (max-width: 680px) {
  width: 100%;
}
`;