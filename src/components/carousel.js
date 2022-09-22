import React, { useState } from "react";
import styles from './carousel.module.scss'
import { CSSTransition } from 'react-transition-group';

function Carousel(props) {
    let [currentIndex, setCurrentIndex] = useState(0);
    let [enterClass, setEnterClass] = useState('fadeInLeft');

    const childrens = props.children;
    const childrenCount = React.Children.count(childrens);

    function nextChildren() {
        setEnterClass('fadeInRight')
        let newIndex = currentIndex + 1;
        if(newIndex >= childrenCount) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(newIndex);
        }
    }

    function previousChildren() {
        setEnterClass('fadeInLeft')
        let newIndex = currentIndex - 1;
        if(newIndex < 0) {
            setCurrentIndex(childrenCount - 1);
        } else {
            setCurrentIndex(newIndex);
        }
    }

    return (
        <div className={styles.carousel}>
            <a onClick={() => previousChildren()}><img src="/chevron.png" alt="chevron"/></a>
            <div className={styles.carousel__content}>
                {
                    React.Children.map(props.children, (child, index) => {
                        return (
                            <CSSTransition timeout={400} in={index == currentIndex}
                                classNames={{enter: `animated faster ${enterClass}`}} key={index}>
                                {index == currentIndex ? child : <></>}
                            </CSSTransition>
                        )
                    })
                }
            </div>
            <a onClick={() => nextChildren()}><img src="/chevron.png" alt="chevron"/></a>
        </div>
    );
}

export default Carousel;