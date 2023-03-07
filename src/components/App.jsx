import { React, Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    imageValue: '',
    imageGallery: [],
    loading: false,
    page: 1,
    error: null,
  };

  handleFormSubmit = imageValue => {
    this.setState({ imageValue });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageValue !== this.state.imageValue) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.imageValue}&page=${this.state.page}&key=32843972-0ea5b72fd9aa7da412e1885f6&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => resp.json())
        .then(image => this.setState({ imageGallery: [...image.hits] }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  // imgGalleryList = async (searchQuery, page) => {
  //   this.setState({ isLoader: true });
  //   try {
  //     const { hits, total } = await fetch(
  //       `https://pixabay.com/api/?q=${this.props.imageValue}&page=1&key=32843972-0ea5b72fd9aa7da412e1885f6&image_type=photo&orientation=horizontal&per_page=12`
  //     );

  //     if (hits.length === 0) {
  //       this.setState({ isEmpty: true });
  //     }
  //     this.setState(prev => ({
  //       imageGallery: [...prev.imageGallery, ...hits],
  //       isVisible: page < Math.ceil(total / hits.length),
  //     }));
  //   } catch (error) {
  //     this.setState({ error: error.message });
  //   } finally {
  //     this.setState({ isLoader: false });
  //   }
  // };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.error && <h2>error</h2>}
        {this.state.loading && <div>loading...</div>}
        {this.state.imageGallery && (
          <ImageGallery imageGallery={this.state.imageGallery} />
        )}

        <ToastContainer />
      </div>
    );
  }
}

export default App;
