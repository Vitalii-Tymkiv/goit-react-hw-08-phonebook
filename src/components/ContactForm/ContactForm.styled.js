import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  margin-left: 16px;
  height: 60%;
  cursor: pointer;
  color: #b1c8dd;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #728697;
  border: transparent;
  transition: all 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  cursor: pointer;
  transition: all 250ms ease-out;
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 8px;

    align-self: center;
  }
  @media screen and (min-width: 768px) {
    margin-top: 9px;
  }

  :hover {
    color: #fff;
    background-color: #515e69;
  }
`;

export const Form = styled.form`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    ailgn-items: baseline;
  }
`;

export const InputWrapper = styled.div`
  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 9px;
  }
  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
`;
