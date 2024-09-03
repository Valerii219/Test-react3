import { Component } from 'react';
import css from '../styles.css';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
export class App extends Component {
  state = {
    inputName:''
  }

  onSubmit = (name) => {
    this.setState(prevState => {
      console.log(name);
    })
  }
  
  render(){

    return (
      <div className={css.App}>
        <Searchbar inputName={ this.onSubmit} />
        {/* <ImageGallery />
        <ImageGalleryItem />
        <Loader />
        <Button />
        <Modal></Modal> */}
      </div>
    );
  };
  }
  
