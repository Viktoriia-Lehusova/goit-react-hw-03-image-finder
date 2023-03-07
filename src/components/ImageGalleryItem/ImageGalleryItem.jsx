import React from 'react';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ src, alt, openModal }) => {
  return (
    <li className="gallery-item">
      <img src={src} alt={alt} />
    </li>
  );
};
