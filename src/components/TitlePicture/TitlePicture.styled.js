import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const ImageThumb = styled.div`
  margin-bottom: 16px;
  width: 100%;
  height: 700px;
  flex-grow: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
  opacity: 0.8;
  height: 100%;
`;
