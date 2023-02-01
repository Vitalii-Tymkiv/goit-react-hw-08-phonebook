import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: #728697;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-left: auto;
  }
`;

export const Name = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  align-items: center;
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
