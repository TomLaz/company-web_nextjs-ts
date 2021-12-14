import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
`;

export const FormField = styled.input`
  display: flex;
  width: 47%;
  border: none;
  background-color: var(--color-primary-10);
  padding: 20px 25px;
`;

export const FormTextArea = styled.textarea`
  display: flex;
  background-color: var(--color-primary-10);
  width: 100%;
  border: none;
  padding: 20px 25px;
`;

export const FormButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FormButton = styled.p`
  color: var(--color-grey-700);
  font-weight: 500;
  letter-spacing: 7px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    color: var(--color-grey-1000);
    font-weight: 600;
  }
`;

export const FormErrorMessage = styled.div`
  margin: 5px 0;
  color: var(--color-error-500);
  text-align: left;
`;