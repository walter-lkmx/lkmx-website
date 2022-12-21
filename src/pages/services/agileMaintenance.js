import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/agileMaintenance.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Link from "next/link"
import Image from "next/image"
export default function Ams() {
    const { locale } = useRouter();
    const $t = getLang(locale);
    return(
        <BaseLayout>
            <HeadSeo
                title={$t.ams.title}
                description={`Descripción de AboutUsPage`}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={"https://iili.io/H9S6dIj.jpg"}
                ogTwitterImage={`https://iili.io/H9S6dIj.jpg`}
                ogType={siteMetadata.ogType}
            />
            <Page>
                <Column mode="normal" modeS="full">
                    <Block className={styles.ams__goBack}>
                        <Link href="/services"><img src="/icons/arrow-left--white.svg" alt="go back"/></Link>                    
                        <span>{$t.ams.goBack}</span>
                    </Block>                    
                </Column>
                <Column mode="full" number="2" numberS="1" className={styles.ams__hero} weightL="normal" weightXXL="right">
                    <Block className={styles.ams__hero__left}>
                        <img className={styles.ams__hero__left__l} src="/ams-large.svg"/>
                        <img className={styles.ams__hero__left__m} src="/ams-med.svg"/>
                        <img className={styles.ams__hero__left__s} src="/ams-mobile.svg"/>
                    </Block>
                    <Block className={styles.ams__hero__right}>
                        <p>{$t.ams.hero[0]}<br/>{$t.ams.hero[1]}<br/>{$t.ams.hero[2]}</p>
                    </Block>
                    <img className={styles.ams__hero__clouds} src="/triangles/triangle-clouds--right.svg"/>
                </Column>
                <Column mode="slim" modeM="normal"  number="1" className={styles.ams__content}>
                    <Block className={styles.ams__content__right}>
                        <div>
                            <h4>{$t.ams.right.title1[0]}<br/>{$t.ams.right.title1[1]}</h4>
                            <p>{$t.ams.right.par1[0]} <br/>{$t.ams.right.par1[1]} <br/>{$t.ams.right.par1[2]}<br/>{$t.ams.right.par1[3]}</p>
                        </div>
                        <div>
                            <h4>{$t.ams.right.title2[0]}<br/>{$t.ams.right.title2[1]}</h4>
                            <p>{$t.ams.right.par2[0]} <br/>{$t.ams.right.par2[1]} <br/>{$t.ams.right.par2[2]}<br/>{$t.ams.right.par2[3]}</p>
                        </div>
                        <div>
                            <h4>{$t.ams.right.title3[0]}<br/>{$t.ams.right.title3[1]}</h4>
                            <p>{$t.ams.right.par3[0]} <br/>{$t.ams.right.par3[1]} <br/>{$t.ams.right.par3[2]}<br/>{$t.ams.right.par3[3]}</p>
                        </div>                        
                    </Block>
                    <Block className={styles.ams__content__left}>
                        <div>
                            <h3>{$t.ams.left.title[0]}<br/>{$t.ams.left.title[1]}</h3>
                            <p>{$t.ams.left.par}</p>
                        </div>
                        <div className={styles.ams__content__left__kanban}>
                            <Image src={"/kanban.svg"}
                            layout={"fill"}
                            alt="kanban"
                            priority={"true"}/>
                        </div>
                    </Block>
                </Column>
                <Column className={styles.ams__navigation} number="1" modeM="full" modeL="normal">
                <Block className={styles.ams__navigation__block}>
                    <Link href="/services/agileDevelopment">
                        <div className={styles.ams__navigation__block__forward}>                       
                            <img src="/icons/arrow-left--pink.svg" alt="Pink arrow left"/> 
                            <span>{$t.ams.navigation}</span>                        
                        </div>                        
                    </Link>                                           
                </Block>
            </Column>
            </Page>
        </BaseLayout>
    );
}
