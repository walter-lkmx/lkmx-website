import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/discovery.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image"
import Link from "next/link"

export default function DiscoveryPage() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return(
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
                <Column mode="normal">
                    <Block className={styles.discovery__goBack}>
                        <Link href="/services"><Image src="/icons/arrow-left--white.svg" alt="go back" width={24} height={24}/></Link>
                        
                        <span>{$t.discovery.goBack}</span>
                    </Block>                    
                </Column>
                <Column modeL="normal" number="2" numberS="1" weight="right"  className={styles.discovery__hero}>
                    <img src="/triangles/triangle-waves--right.svg"  className={styles.discovery__hero__triangle}/>
                    <Block className={styles.discovery__hero__phases}>
                        <div className={styles.discovery__hero__phases__arrow}>
                            <div></div>
                        </div>
                        <img src="/discovery-big.svg" className={styles.discovery__hero__phases__svg}/>
                        <img src="/discovery-medium.svg" className={styles.discovery__hero__phases__svgMed}/>    
                        <img src="/vertical-line.svg" className={styles.discovery__hero__phases__svgLine}/>
                        <img src="/discovery-small.svg" className={styles.discovery__hero__phases__svgMobile}/>                      
                    </Block>
                    <Block className={styles.discovery__hero__blue} >
                        <div className={styles.discovery__hero__blue__content}>
                            <p>{$t.discovery.hero[0]} {$t.discovery.hero[1]} {$t.discovery.hero[2]}</p>
                        </div>
                        
                    </Block>
                </Column>
                <Column className={styles.discovery__banner}>
                <h2>{$t.discovery.bannerTitle[0] }</h2>
                <h2>{$t.discovery.bannerTitle[1]}</h2>
                </Column>
                <Column className={styles.discovery__summary} number="2" numberS="1" >
                    <Block className={styles.discovery__summary__left}>
                        <h3>{$t.discovery.prototype.summary.title}</h3>
                        <p>{$t.discovery.prototype.summary.paragraph[0]} {$t.discovery.prototype.summary.paragraph[1]} {$t.discovery.prototype.summary.paragraph[2]} {$t.discovery.prototype.summary.paragraph[3]} {$t.discovery.prototype.summary.paragraph[4]}</p>
                    </Block>
                    <Block className={styles.discovery__summary__right}>
                        <div className={styles.discovery__summary__right__element}>
                            <h3>{$t.discovery.prototype.rapid.title}</h3>
                            <p>{$t.discovery.prototype.rapid.paragraph[0]} {$t.discovery.prototype.rapid.paragraph[1]} {$t.discovery.prototype.rapid.paragraph[2]}</p>
                        </div>
                        <div className={styles.discovery__summary__right__element}>
                            <h3>{$t.discovery.prototype.adhoc.title}</h3>
                            <p>{$t.discovery.prototype.adhoc.paragraph[0]} {$t.discovery.prototype.adhoc.paragraph[1]} {$t.discovery.prototype.adhoc.paragraph[2]} {$t.discovery.prototype.adhoc.paragraph[3]}</p>
                        </div>
                    </Block>
                </Column>
                <Column className={styles.discovery__next} number="1" modeM="full" modeL="full">
                    <Block className={styles.discovery__next}>
                        <span>{$t.discovery.span.text}</span>
                        <Link href="/services/agileDevelopment"><img src="/icons/arrow-right--pink.svg" alt="Pink arrow right"/></Link>
                        
                    </Block>
                </Column>
            </Page>
            
        </BaseLayout>
    );
}