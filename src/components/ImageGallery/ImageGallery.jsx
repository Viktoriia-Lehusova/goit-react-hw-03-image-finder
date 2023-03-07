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
          //   openModal={() => onOpenModal(largeImageURL, tags)}
        />
      ))}
    </StyledList>
  );
};

// class ImageGalleryItem extends Component {
//   state = {
//     image: null,
//     loading: false,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.imageValue !== this.props.imageValue) {
//       this.setState({ loading: true });
//       fetch(
//         `https://pixabay.com/api/?q=${this.props.imageValue}&page=1&key=32843972-0ea5b72fd9aa7da412e1885f6&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(resp => resp.json())
//         .then(console.log)
//         .finally(() => this.setState({ loading: false }));
//     }
//   }

//   render() {
//     return (
//       <li className="gallery-item">
//         {this.state.loading && <div>loading...</div>}
//         {this.state.image && (
//           <img src={this.state.image.webformatURL} alt="" width="300" />
//         )}
//       </li>
//     );
//   }
// }

export default ImageGallery;
