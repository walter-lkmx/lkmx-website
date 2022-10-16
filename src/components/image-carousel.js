import React, { useState } from "react";
import styles from './image-carousel.module.scss';

function Carousel(props) {
    let [images, setImages] = useState([...props.images]);

    function nextImage() {
        setImages(previousState => (
            [...[previousState.pop()], ...previousState]
        ));
    }


    return (
        <div className={styles.carousel}>
            <div className={styles['carousel__selected-image']}>
                <img src={`/projects/${props.proyjectName}/${images[2]}.png`}/>
            </div>
            <div className={styles.carousel__list}>
                {
                    images.map((img, index) => {
                        return (
                            <img src={`/projects/${props.proyjectName}/${img}.png`} alt={img} className={`${index == 2 ? styles.selected : ''}`} key={`image-key-${img}-${index}`}/>
                        )
                    })
                }
                <div>
                    <a onClick={() => nextImage()}><img src="/chevron-right--blue.png" alt="chevron-right"/></a>
                </div>
            </div>
        </div>
    );
}

export default Carousel;