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
        <Column mode="normal" modeL="slim" modeXxxl="slim" modeM="full" className={styles.anchors__sections}>
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
                            <h2>{data.title}</h2>
                            <p>{data.par1}</p>
                            {data.par2 !== "" ? <p>{data.par2}</p> : "" }
                            {data.img !== "" ? 
                            <figure>
                                <div>
                                    <Image
                                    fill
                                    src={data.image}
                                    alt={data.alt}
                                    />
                                </div>
                                <figcaption>{data.caption}</figcaption>
                            </figure>
                            : "" }
                        </article>
                        )
                    })}                
                </section>
            </Block>
        </Column>
    );
}   