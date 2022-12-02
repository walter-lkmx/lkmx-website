import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/agileDevelopment.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image"
import Link from "next/link"

export default function AgileDevelopment() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return(
        <BaseLayout>
            <HeadSeo
                title={$t.agile.title}
                description={`Descripción de AboutUsPage`}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={"https://iili.io/H9S6dIj.jpg"}
                ogTwitterImage={`https://iili.io/H9S6dIj.jpg`}
                ogType={siteMetadata.ogType}
            />
            <Page>
            <Column mode="normal">
                <Block className={styles.agile__goBack}>
                    <Link href="/services"><Image src="/icons/arrow-left--white.svg" alt="go back" width={24} height={24}/></Link>                    
                    <span>{$t.agile.goBack}</span>
                </Block>                    
            </Column>
            <Column modeL="normal" number="2" numberS="1" weight="right"  className={styles.agile__hero}>
                <img src="/triangles/triangle-code--cyan--right.svg"  className={styles.agile__hero__triangle}/>
                <Block className={styles.agile__hero__phases}>
                    <img src="/horizontal-line.svg" className={styles.agile__hero__phases__svgLine}></img>
                    <img src="/agile-development-large.svg" className={styles.agile__hero__phases__svg}/>
                    <img src="/agile-development-medium.svg" className={styles.agile__hero__phases__svgMed}/>    
                    <img src="/agile-development-small.svg" className={styles.agile__hero__phases__svgMobile}/>                      
                </Block>
                <Block className={styles.agile__hero__blue} >
                    <div className={styles.agile__hero__blue__content}>
                        <p>{$t.agile.hero[0]} {$t.agile.hero[1]} {$t.agile.hero[2]}</p>
                    </div>
                </Block>
            </Column>
            <Column className={styles.agile__navigation} number="1" modeM="full" modeL="normal">
                <Block className={styles.agile__navigation__block}>
                    <div className={styles.agile__navigation__block__back}>
                    <Link href="/services/discovery"><img src="/icons/arrow-left--pink.svg" alt="Pink arrow left"/></Link> 
                    <span>{$t.agile.span.back}</span>                        
                    </div>
                    <div className={styles.agile__navigation__block__forward}>
                        {/* <span>{$t.agile.span.forward}</span>
                        <Link href="/services/AMS"><img src="/icons/arrow-right--pink.svg" alt="Pink arrow right"/></Link>  */}
                        <span></span>
                    </div>
                                           
                </Block>
            </Column>
            </Page>
        </BaseLayout>
    );
}