import React from 'react';
// import PropTypes from 'prop-types';
import { StyledItem, StyledImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ src, alt, openModal }) => {
  return (
    <StyledItem onClick={openModal} className="gallery-item">
      <StyledImage src={src} alt={alt} />
    </StyledItem>
  );
};
