import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({images, openModal}) => {
    
    return(
        <ul className={styles.gallery}>
            {images.map( (image) => <ImageGalleryItem 
                                        key={image.id} 
                                        openModal={openModal}
                                        id={image.id} 
                                        smallImg={image.webformatURL}
                                        />)}
        </ul>
    )
}

export default ImageGallery;