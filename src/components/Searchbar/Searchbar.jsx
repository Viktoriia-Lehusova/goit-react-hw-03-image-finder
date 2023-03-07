import React, { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    imageValue: '',
  };

  handleSearchValueChange = evt => {
    this.setState({ imageValue: evt.currentTarget.value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.imageValue.trim() === '') {
      toast.error('no image');
      return;
    }

    this.props.onSubmit(this.state.imageValue);
    this.setState({ imageValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="imageValue"
            value={this.state.imageValue}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearchValueChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
