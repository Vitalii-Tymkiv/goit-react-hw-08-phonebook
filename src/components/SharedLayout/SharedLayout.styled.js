import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
