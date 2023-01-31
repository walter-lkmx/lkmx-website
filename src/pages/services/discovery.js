import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/discovery.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import GoBackBar from "../../components/goBackBar";
import Services from "../../components/services"
export default function DiscoveryPage() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return (
        <BaseLayout>
            <HeadSeo
                title={$t.discovery.title}
                description={`Descripción de AboutUsPage`}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={"https://iili.io/H9S6dIj.jpg"}
                ogTwitterImage={`https://iili.io/H9S6dIj.jpg`}
                ogType={siteMetadata.ogType}
            />
            <Page>  
                <GoBackBar destiny={"/services"}/>              
                <Column className={styles.discovery__hero__column}>
                    <Block className={styles.discovery__hero__column__text}>
                        <span className={styles.discovery__hero__column__text__pinkSpan}>{$t.discovery.section}</span>
                        <h1>{$t.discovery.title}</h1>
                        <span className={styles.discovery__hero__column__text__graySpan}>{$t.discovery.hero[0]} <br/>{$t.discovery.hero[1]} <br/>{$t.discovery.hero[2]}</span>
                    </Block>
                    <Block className={styles.discovery__hero__column__img}>
                        <div className={styles.discovery__hero__column__img__container}>
                            <Image
                            fill
                            src={"/services/discovery-hero.jpg"}
                            alt="Organized post-it cards"
                            />
                        </div>
                        
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim" className={styles.discovery__content__column}>
                    <Block>
                        <p>{$t.discovery.intro}</p>
                    </Block>
                    <Block>
                        <h2>{$t.discovery.methodologies.title}</h2>
                        <p>{$t.discovery.methodologies.content}</p>
                    </Block>
                    <Block>
                        <h3>{$t.discovery.prototyping.title}</h3>
                        <p>{$t.discovery.prototyping.content}</p>
                    </Block>
                    <Block>
                        <div className={styles.discovery__content__column__imgContainer}>
                            <Image
                            fill
                            src={"/services/discovery-prototyping.jpg"}
                            alt="Figma image"
                            />
                        </div>
                    </Block>
                    <Block>
                        <h3>{$t.discovery.adhoc.title}</h3>
                        <p>{$t.discovery.adhoc.p1}</p>
                    </Block>
                    <Block>
                        <div className={`${styles.discovery__content__column__imgContainer} ${styles.discovery__content__column__imgContainer2}`}>
                            <Image
                            fill
                            src={"/services/discovery-adhoc.jpg"}
                            alt="Figma image"
                            />
                        </div>
                    </Block>
                    <Block>
                        <p>{$t.discovery.adhoc.p2}</p>
                    </Block>
                    <Block>
                        <div className={`${styles.discovery__content__column__imgContainer} ${styles.discovery__content__column__imgContainer3}`}>
                            <Image
                            fill
                            src={"/services/discovery-adhoc2.jpg"}
                            alt="Figma image"
                            />
                        </div>
                    </Block>
                    <Block>
                        <p>{$t.discovery.adhoc.p3}</p>
                    </Block>                    
                </Column>
                <Services/>
            </Page>            
        </BaseLayout>
    );
}