import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/agileMaintenance.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Link from "next/link"
import ImageLegacy from "next/legacy/image";
import Image from "next/image";
import GoBackBar from "../../components/goBackBar";

export default function Ams() {
    const { locale } = useRouter();
    const $t = getLang(locale);
    return (
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
                <GoBackBar/>
                <Column mode="full" number="2" numberM="1" numberS="1" className={styles.ams__hero} weight="left" weightXxl="normal">
                    <Block className={styles.ams__hero__left}>                        
                        <div className={styles.ams__hero__left__sections}>
                        <div className={styles.ams__hero__left__before}></div>
                            <div className={styles.ams__hero__left__diagonal}>
                                <Image
                                    fill
                                    src={"/ams-hero-diagonal-small.svg"}
                                    alt="diagonal"
                                />
                            </div>
                            <div className={styles.ams__hero__left__cyan}>
                                <h3>{$t.ams.title1[0]} <br/>{$t.ams.title1[1]}</h3>
                                <div className={styles.ams__hero__left__cyan__inter}>
                                    <Image
                                        fill
                                        src={"/ams-hero-blue-triangle.svg"}
                                        alt="blue triangle"
                                    />
                                </div>    
                                <div className={styles.ams__hero__left__cyan__small}>
                                    <Image
                                        fill
                                        src={"/ams-hero-blue-triangle-small.svg"}
                                        alt="blue triangle"
                                    />
                                </div>                             
                            </div>
                            <div className={styles.ams__hero__left__blue}>
                                <h3>{$t.ams.title2[0]} <br/>{$t.ams.title2[1]}</h3>
                                <div className={styles.ams__hero__left__blue__inter}>
                                <Image
                                    fill
                                    src={"/ams-hero-gray-triangle.svg"}
                                    alt="gray triangle"
                                />
                                </div>
                                <div className={styles.ams__hero__left__blue__small}>
                                <Image
                                    fill
                                    src={"/ams-hero-gray-triangle-small.svg"}
                                    alt="gray triangle"
                                />
                                </div> 
                            </div>
                            <div className={styles.ams__hero__left__gray}>
                                <h3>{$t.ams.title3[0]} <br/>{$t.ams.title3[1]}</h3>
                                <div className={styles.ams__hero__left__gray__inter}>
                                    <Image
                                        fill
                                        src={"/ams-hero-light-triangle.svg"}
                                        alt="gray triangle"
                                    />
                                </div>                     
                            </div>
                        </div>                        
                    </Block>
                    <Block className={styles.ams__hero__right}>
                        <p>{$t.ams.hero[0]}<br/>{$t.ams.hero[1]}<br/>{$t.ams.hero[2]}<br/>{$t.ams.hero[3]}</p>
                        <div className={styles.ams__hero__cloudsContainer}>
                            <Image fill className={styles.ams__hero__clouds} alt="LKMX - Hero" src="/triangles/triangle-clouds--right.svg"/>        
                        </div>
                    </Block>                    
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
                            <ImageLegacy src={"/kanban.svg"}
                            layout={"fill"}
                            alt="kanban"
                            priority={"true"}/>
                        </div>
                    </Block>
                </Column>
                <Column className={styles.ams__navigation} number="1" modeM="full" modeL="normal">
                <Block className={styles.ams__navigation__block}>
                    <Link href="/services/agileDevelopment" legacyBehavior>
                        <div className={styles.ams__navigation__block__forward}>  
                            <div className={styles.ams__navigation__block__forward__icon}>
                                <Image fill src="/icons/arrow-left--pink.svg" alt="Pink arrow left"/> 
                            </div>                                                 
                            <span>{$t.ams.navigation}</span>                        
                        </div>                        
                    </Link>                                           
                </Block>
            </Column>
            </Page>
        </BaseLayout>
    );
}