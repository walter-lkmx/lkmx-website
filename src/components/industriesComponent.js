import React, { useEffect, useState } from "react";
import styles from "@/components/industriesComponent.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";
import Link from "next/link";
import getLang from '@/lang';
import { useRouter } from "next/router";

export default function IndustriesComponent() {
    const { locale } = useRouter();
    const $t = getLang(locale);
    const industriesCat = $t.industries.catalogItems

    return (
        <Column className={styles.industries}>
            <Block className={styles.industries__block}>
                <h2>{$t.industriesComponent.title}</h2>
                <p>{$t.industriesComponent.par[0]} <br/>{$t.industriesComponent.par[1]} <br/>{$t.industriesComponent.par[2]}</p>
                <div className={styles.industries__block__grid}>
                    {/* <div className={styles.industries__block__grid__firstRow}> */}
                        {industriesCat.map((data, index)=>{
                            return(
                                // index <=4 ?
                                <div className={styles.industries__block__grid__item} key={index}>
                                    <div className={styles.industries__block__grid__item__image}>
                                        <Image
                                        fill
                                        src={data.img}
                                        alt="Industry icon"
                                        />
                                    </div>
                                    {data.title1 ? <span>{data.title1[0]} <br/>{data.title1[1]}</span> : <span>{data.title}</span>}                                    
                                </div>
                                // : ''
                            )
                        })}
                    {/* </div> */}
                    {/* <div className={styles.industries__block__grid__secondRow}>
                        {industriesCat.map((data, index)=>{
                            return(
                                index > 4 ?
                                <div className={styles.industries__block__grid__secondRow__item} key={index}>
                                    <div className={styles.industries__block__grid__secondRow__item__image}>
                                        <Image
                                        fill
                                        src={data.img}
                                        alt="Industry icon"
                                        />                                        
                                    </div>
                                    {data.title1 ? <span>{data.title1[0]} <br/>{data.title1[1]}</span> : <span>{data.title}</span>}    
                                </div>
                                : ''
                            )
                        })}
                    </div> */}
                </div>
                <Link href="/industries" legacyBehavior>
                    <div className={styles.industries__block__btn} >{$t.industriesComponent.btn}</div>
                </Link>
            </Block>
        </Column>
    );
}