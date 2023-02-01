import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-content: space-between;
  justify-content: center;
  align-items: center;
  background: #cfa78b;
  width: 270px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
