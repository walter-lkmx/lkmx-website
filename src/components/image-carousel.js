import React, { useState } from "react";
import styles from './image-carousel.module.scss';

function Carousel(props) {
    let [currentImage, setCurrentImage] = useState(props.images[0]);
    let [images, setImages] = useState([...props.images]);

    function nextImage() {
        setImages(previousState => (
            [...[previousState.pop()], ...previousState]
        ));
    }

    function previousImage() {
        setImages(previousState => (
            [...previousState.slice(1, previousState.length), ...[previousState.shift()]]
        ));
    }

    function selectImage(img) {
        setCurrentImage(img);
    }

    return (
        <div className={styles.carousel}>
            <div className={styles['carousel__selected-image']}>
                <img src={`/projects/${props.proyjectName}/${currentImage}.png`}/>
            </div>
            <div className={styles.carousel__list}>
                <div className={styles.carousel__list__previous}>
                    <a onClick={() => previousImage()}><img src="/chevron-right--blue.png" alt="chevron-right"/></a>
                </div>
                <div className={styles.carousel__list__images}>
                    {
                        images.map(img => {
                            return (
                                <a onClick={() => selectImage(img)} key={`image-key-${img}`} className={`${img == currentImage ? styles.selected : ''}`}>
                                    <img src={`/projects/${props.proyjectName}/${img}.png`} alt={img}/>
                                </a>
                            )
                        })
                    }
                </div>
                <div className={styles.carousel__list__next}>
                    <a onClick={() => nextImage()}><img src="/chevron-right--blue.png" alt="chevron-right"/></a>
                </div>
            </div>
        </div>
    );
}

export default Carousel;