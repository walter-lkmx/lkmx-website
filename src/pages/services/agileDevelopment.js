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



            <Column number="1" mode="slim" modeM="normal"  className={styles.agile__intro}>
                <Block className={styles.agile__intro__block}>
                    <p>{$t.agile.intro[0]}<br/>{$t.agile.intro[1]}<br/>{$t.agile.intro[2]} {$t.agile.intro[3]}</p>
                </Block>
            </Column>
            <Column number="1" mode="normal" modeS="full" className={styles.agile__gantt}>
                <Block className={styles.agile__gantt__block}>
                    <img src="/gantt.svg"/>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" className={styles.agile__sprint}>
                <Block className={styles.agile__sprint__block}>
                    <p>{$t.agile.intro2[0]} {$t.agile.intro2[1]} {$t.agile.intro2[2]} {$t.agile.intro2[3]} {$t.agile.intro2[4]} {$t.agile.intro2[5]}
                    </p>
                    <img src="/sprint-structure.svg" />
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" className={styles.agile__maad}>
                <Block className={styles.agile__maad__block}>
                    <img src="/maad.svg"/>
                    <h2>{$t.agile.maad.title}</h2>
                    <p>{$t.agile.maad.par1}</p>
                    <p>{$t.agile.maad.par2}</p>
                    <p>{$t.agile.maad.par3}</p>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" className={styles.agile__flare}>
                <Block className={styles.agile__flare__block}>
                    <h2>{$t.agile.flare.title}</h2>
                    <p>{$t.agile.flare.par}</p>
                    <div className={styles.agile__flare__block__img}><img src="/flare.svg"/></div>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" className={styles.agile__scrum}>
                <Block className={styles.agile__scrum__block}>
                    <h2>{$t.agile.scrum.title}</h2>
                    <p>{$t.agile.scrum.par}</p>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" className={styles.agile__agile}>
                <Block className={styles.agile__agile__block}>
                <h2>{$t.agile.agile.title}</h2>
                    <p>{$t.agile.agile.par}</p>
                    <div className={styles.agile__agile__block__img}><img src="/agile.svg"/></div>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" className={styles.agile__cd}>
                <Block className={styles.agile__cd__block}>
                    <h2>{$t.agile.cd.title}</h2>
                    <p>{$t.agile.cd.par[0]}<br/>{$t.agile.cd.par[1]}</p>
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