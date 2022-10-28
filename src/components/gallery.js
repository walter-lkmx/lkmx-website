import React, { useState } from "react";
import styles from './gallery.module.scss';

function Gallery(props) {
    let [currentImage, setCurrentImage] = useState(props.images[0]);
    let [images, setImages] = useState([...props.images]);
    let [touchStart, setTouchStart] = React.useState(0);
    let [touchEnd, setTouchEnd] = React.useState(0);
    let [isOpenImage, setIsOpenImage] = React.useState(false);

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

    function showImage() {
        setIsOpenImage(true);
        document.body.style.overflow = 'hidden';
    }

    function hideImage() {
        setIsOpenImage(false);
        document.body.style.overflow = 'unset';
    }

    function selectImage(img) {
        setCurrentImage(img);
    }

    function handleTouchStart(e) {
        if (e && e.targetTouches[0]) {
            setTouchStart(e.targetTouches[0].clientX);
        }
    }

    function handleTouchMove(e) {
        if (e && e.targetTouches[0]) {
            setTouchEnd(e.targetTouches[0].clientX);
        }
    }

    function handleTouchEnd() {
        let currentIndex = images.indexOf(currentImage);
        let imageSize = images.length - 1;

        if(touchEnd == 0) {
            showImage();
        } else if (touchStart < touchEnd) {
            currentIndex--;
            let newIndex = currentIndex < 0 ? imageSize : currentIndex;
            setCurrentImage(images[newIndex]);
        } else {
            currentIndex++;
            let newIndex = currentIndex > imageSize ? 0 : currentIndex;
            setCurrentImage(images[newIndex]);
        }

        setTouchStart(0);
        setTouchEnd(0);
    }

    return (
        <div className={`${styles.gallery} ${isOpenImage ? styles.fullScreen : ''}`}>
            <div className={styles.gallery__close}>
                <a onClick={() => hideImage()}>
                    <img src="/icon-close--white.png" alt="close" style={{width: '24px', height: '24px'}}/>
                </a>
            </div>
            <div className={styles['gallery__selected-image']} onTouchStart={e => handleTouchStart(e)} onTouchMove={e => handleTouchMove(e)} onTouchEnd={() => handleTouchEnd()}>
                <img src={`/projects/${props.proyjectName}/${currentImage}.png`} alt="current-image"/>
            </div>
            <div className={styles.gallery__list}>
                <div className={styles.gallery__list__previous}>
                    <a onClick={() => previousImage()}><img src="/chevron-right--blue.png" alt="chevron-right"/></a>
                </div>
                <div className={styles.gallery__list__images}>
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
                <div className={styles.gallery__list__next}>
                    <a onClick={() => nextImage()}><img src="/chevron-right--blue.png" alt="chevron-right"/></a>
                </div>
            </div>
        </div>
    );
}

export default Gallery;