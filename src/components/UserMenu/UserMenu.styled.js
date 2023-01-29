import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 16px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #728697;
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`;

export const Button = styled.button`
  align-self: center;
  width: 90px;
  height: 30px;

  font-weight: 700;

  color: #b1c8dd;
  background-color: #728697;
  border: transparent;
  border-radius: 6px;
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
