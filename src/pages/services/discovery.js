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
                <GoBackBar/>              
                <Column modeL="normal" number="2" numberS="1" className={styles.discovery__hero}>                    
                    <Block className={styles.discovery__hero__blue} >
                        <div className={styles.discovery__hero__phases}></div>
                        <div className={styles.discovery__hero__blue__before}>
                            <Image
                            fill
                            src={"/discovery-hero-blue-triangle.svg"}
                            alt="triangle"
                            />
                        </div>
                        
                        <div className={styles.discovery__hero__blue__content}>
                            <h1>{$t.discovery.title}</h1>                            
                        </div>
                        <div className={styles.discovery__hero__blue__pink}>
                            <Image
                            fill
                            src={"/discovery-hero-diagonal.svg"}
                            alt="diagonal"
                            />
                        </div>
                    </Block>
                    <Block className={styles.discovery__hero__paragraph}>
                        <p>{$t.discovery.hero[0]} <br/>{$t.discovery.hero[1]} <br/>{$t.discovery.hero[2]}</p>
                        <div className={styles.discovery__hero__triangleContainer}>
                            <Image fill src="/triangles/triangle-waves--right.svg" alt="LKMX - Hero"/>
                        </div>
                    </Block>
                </Column>
                <Column className={styles.discovery__summary} number="1" mode="slim" modeM="normal" >
                    <Block className={styles.discovery__summary__first}>
                        <h3>{$t.discovery.bannerTitle[0]} {$t.discovery.bannerTitle[1]}</h3>
                        <p>{$t.discovery.prototype.summary.paragraph[0]} {$t.discovery.prototype.summary.paragraph[1]} {$t.discovery.prototype.summary.paragraph[2]} {$t.discovery.prototype.summary.paragraph[3]} {$t.discovery.prototype.summary.paragraph[4]}</p>
                    </Block>
                    <Block className={styles.discovery__summary__second}>
                        <div className={styles.discovery__summary__second__element}>
                            <h4>{$t.discovery.prototype.rapid.title}</h4>
                            <p>{$t.discovery.prototype.rapid.paragraph[0]} {$t.discovery.prototype.rapid.paragraph[1]} {$t.discovery.prototype.rapid.paragraph[2]}</p>
                        </div>
                        <div className={styles.discovery__summary__second__element}>
                            <h4>{$t.discovery.prototype.adhoc.title}</h4>
                            <p>{$t.discovery.prototype.adhoc.paragraph[0]} {$t.discovery.prototype.adhoc.paragraph[1]} {$t.discovery.prototype.adhoc.paragraph[2]} {$t.discovery.prototype.adhoc.paragraph[3]}</p>
                        </div>
                    </Block>
                    <Block className={styles.discovery__summary__third}>
                        <div className={styles.discovery__summary__third__image}>
                            <Image
                            src={"/prototype-img.png"}
                            layout="fill"
                            priority={true}
                            alt="LKMX - Prototype"
                            />
                        </div>
                    </Block>
                </Column>
                <Column className={styles.discovery__next} number="1" modeM="full" modeL="full">                    
                    <Block className={styles.discovery__next}>
                        <Link href="/services/agileDevelopment" legacyBehavior>
                            <div>
                                <span>{$t.discovery.span.text}</span>
                                <div className={styles.discovery__next__icon}>
                                <Image fill src="/icons/arrow-right--pink.svg" alt="Pink arrow right"/> 
                                </div>
                            </div>
                        </Link>                   
                    </Block>                  
                </Column>
            </Page>
            
        </BaseLayout>
    );
}