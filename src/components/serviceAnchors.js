import React, { useEffect } from "react";
import styles from "@/components/serviceAnchors.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";


export default function ServiceAnchors({anchorsData}) {
    useEffect(() => {
        document.addEventListener('scroll', function () {
            var i = 0;
            var span = "";
            var image = "";
            anchorsData.forEach(element => {
                if(document.getElementById(element.title)) {
                    const item = document.getElementById(element.title);
                    const rect = item.getBoundingClientRect();
                    const isInViewport = rect.top <= 56 && rect.top > -350;
    
                    if (isInViewport){
                        span = document.getElementById("span" + i);
                        span.style.color = "#0B0E29";
                        image = document.getElementById("img" + i);
                        image.srcset = "/services/white-line.svg";    
                        image.style.width = "50px"                
                    }                    
                    else
                    {
                        span = document.getElementById("span" + i);
                        span.style.color = "#93949E";
                        image = document.getElementById("img" + i);
                        image.srcset = "/services/menu-line.svg";   
                        image.style.width = "25px"  
                    }                        
                    i++; 
                }                
            });
        }, {
            passive: true
        });
    })
    
    return(
        <Column mode="normal" modeL="slim" className={styles.anchors__sections}>
            <Block className={styles.anchors__sections__block}>  
                <div className={styles.anchors__sections__block__wrapper}>
                    <nav className={styles.anchors__sections__block__wrapper__aside}> 
                    {anchorsData.map((data, index) => {
                        return(
                            <a className={styles.anchors__sections__block__wrapper__aside__anchor} href={`#${data.title}`} key={index}>
                                <span id={`span${index}`}>{data.title}</span>
                                <img
                                src="/services/menu-line.svg"
                                alt="Menu marker"      
                                id={`img${index}`}                              
                                />
                            </a>                       
                        );
                        })}     
                        </nav>  
                </div>                                                                                               
                <section className={styles.anchors__sections__block__black}>        
                    {anchorsData.map((data, index) => {
                        return(
                        <article className={styles.anchors__sections__block__black__item} key={index} id={data.title}>
                            <div  className={styles.anchors__sections__block__black__item__content}>
                            <h2>{data.title}</h2>
                            <p>{data.par1}<br/>{data.par2}<br/>{data.par3}</p> 
                            </div>
                            <div className={styles.anchors__sections__block__black__item__image}>
                                <Image
                                fill
                                src={`/services/${data.image}`}
                                alt="Rapid Prototyping"
                                />
                            </div>
                        </article>
                        )
                    })}                
                </section>
            </Block>
        </Column>
    );
}