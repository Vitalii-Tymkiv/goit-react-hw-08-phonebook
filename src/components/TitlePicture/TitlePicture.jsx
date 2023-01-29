import PropTypes from 'prop-types';
import { ImageThumb, Img, Wrapper } from './TitlePicture.styled';

export const TitlePicture = ({ titlePicture }) => {
  return (
    <Wrapper>
      <ImageThumb>
        <Img src={titlePicture} alt={titlePicture}></Img>
      </ImageThumb>
    </Wrapper>
  );
};

TitlePicture.propTypes = {
  titlePicture: PropTypes.string.isRequired,
};
