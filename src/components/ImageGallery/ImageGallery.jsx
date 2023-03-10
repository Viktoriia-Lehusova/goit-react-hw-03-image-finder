import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types';
import { StyledList } from './ImageGallery.styled';

export const ImageGallery = ({ imageGallery, onOpenModal }) => {
  return (
    <StyledList className="gallery">
      {imageGallery.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          src={webformatURL}
          alt={tags}
          openModal={() => onOpenModal(largeImageURL, tags)}
        />
      ))}
    </StyledList>
  );
};

export default ImageGallery;
