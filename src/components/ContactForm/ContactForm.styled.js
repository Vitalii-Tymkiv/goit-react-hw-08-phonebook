import styled from 'styled-components';

export const Button = styled.button`
  align-items: center;
  margin-left: 16px;
  margin-top: 9px;
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

  :hover {
    color: #fff;
    background-color: #515e69;
  }
`;
