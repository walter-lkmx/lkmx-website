import React from "react";
import styles from './image-carousel.module.scss';

function Carousel(props) {
    return (
        <div className={styles.carousel}>
            <div style={
                { background: `url('/projects/${props.proyjectName}/${props.images[0]}.png')` }
            }/>

            <div className={styles.carousel__list}>
                {
                    props.images.map(img => {
                        return (
                            <img src={`/projects/${props.proyjectName}/${img}.png`} alt={img} key={img}/>
                        )
                    })
                }
                <div>
                    <a><img src="/chevron-right--blue.png" alt="chevron-right"/></a>
                </div>
            </div>
        </div>
    );
}

export default Carousel;