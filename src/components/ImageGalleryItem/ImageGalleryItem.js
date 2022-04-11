import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({smallImg, id, openModal})=> {
    return(
        <li className={styles.galleryItem} onClick={()=>openModal(id)}>
            <img className={styles.galleryItemImg} src={smallImg} alt="" />
        </li>
    )
};

export default ImageGalleryItem;