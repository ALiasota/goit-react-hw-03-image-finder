// import { render } from '@testing-library/react';
import React, {Component} from 'react';
import imagesApi from "../servises/images-api";
import Searchbar from './Searchbar';

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery:'',
    isLoading: false,
    error: null
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
        this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      images: [],
      currentPage: 1,
      searchQuery: query,
      isLoading: false,
      error: null
    })
  }

  fetchImages () {
    const {currentPage, searchQuery} = this.state;
    const options = {currentPage, searchQuery};

    this.setState({isLoading: true});

    imagesApi
    .fetchImages(options)
    .then(images =>{
      this.setState( prevState =>({
        images: [...prevState.images, images],
        currentPage: prevState.currentPage + 1
      }));
    })
    .catch(error => this.setState({error}))
    .finally(this.setState({isLoading: true}));
}



  render() {
    return(
      <Searchbar onSubmit={this.onChangeQuery}/>
    )
  }
};

export default App;