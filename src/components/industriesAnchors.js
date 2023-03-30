import React, { useEffect } from "react";
import styles from "@/components/industriesAnchors.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";


export default function IndustriesAnchors({anchorsData}) {
    useEffect(() => {
        document.addEventListener('scroll', function () {
            var i = 0;
            var span = "";            
            anchorsData.forEach(element => {
                if(document.getElementById(element.title)) {
                    const item = document.getElementById(element.title);
                    const rect = item.getBoundingClientRect();
                    const isInViewport = rect.top <= 56 && rect.top > -350;
    
                    if (isInViewport){
                        span = document.getElementById("span" + i);
                        span.style.color = "#0B0E29";                                    
                    }                    
                    else
                    {
                        span = document.getElementById("span" + i);
                        span.style.color = "#93949E";                        
                    }                        
                    i++; 
                }                
            });
        }, {
            passive: true
        });
    })
    
    return(
        <Column mode="normal" modeL="slim" modeXxxl="normal"  className={styles.anchors__sections}>
            <Block className={styles.anchors__sections__block}>  
                <div className={styles.anchors__sections__block__wrapper}>
                    <nav className={styles.anchors__sections__block__wrapper__aside}> 
                    {anchorsData.map((data, index) => {
                        return(
                            <a className={styles.anchors__sections__block__wrapper__aside__anchor} href={`#${data.title}`} key={index}>
                                <span id={`span${index}`}>{data.title}</span>                            
                            </a>                       
                        );
                        })}     
                        </nav>  
                </div>                                                                                               
                <section className={styles.anchors__sections__block__black}>        
                    {anchorsData.map((data, index) => {
                        return(
                        <article className={styles.anchors__sections__block__black__item} key={index} id={data.title}>
                            <div className={styles.anchors__sections__block__black__item__image}>
                                <Image
                                fill
                                src={data.img}
                                alt="Industry icon"
                                />
                            </div>                            
                            <div  className={styles.anchors__sections__block__black__item__content}>                                
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <span>{data.capabilitiesTitle}</span> 
                                <div className={styles.anchors__sections__block__black__item__content__capabilities}>
                                    {data.capabilities.map((capability, index) => {
                                        return(
                                            <a href={capability.ref} key={index} className={capability.ref === "" ? `${styles.anchors__sections__block__black__item__content__capabilities__disabled}` : `${styles.anchors__sections__block__black__item__content__capabilities__enabled}`}>
                                                {capability.name[0]}
                                                <br/>
                                                {capability.name[1]}
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </article>
                        )
                    })}                
                </section>
            </Block>
        </Column>
    );
}   