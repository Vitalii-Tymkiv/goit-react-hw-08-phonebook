import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

export const LabelName = styled.span`
  padding-bottom: 4px;
  font-size: 16px;
  /* font-weight: 500; */
  color: #728697;
`;

export const Input = styled.input`
  height: 40px;
  padding: 8px;
  font-size: 18px;
  color: #212121;
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
`;
