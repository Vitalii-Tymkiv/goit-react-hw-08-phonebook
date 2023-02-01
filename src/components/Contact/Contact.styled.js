import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  width: 100%;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.span`
  width: 250px;
  color: #728697;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #b1c8dd;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #728697;
  border: none;
  transition: all 250ms ease-out;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;

  &:hover {
    color: #fff;
    background-color: #515e69;
  }
`;
