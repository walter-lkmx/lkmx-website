import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/agileDevelopment.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import GoBackBar from "../../components/goBackBar";

export default function AgileDevelopment() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return (
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
            <GoBackBar/> 
            <Column mode="normal" number="2" numberS="1" weight="left" className={styles.agile__hero}>
                <Block className={styles.agile__hero__red} >
                    <div className={styles.agile__hero__phases}>
                        <div className={styles.agile__hero__phases__diagonal}></div>
                    </div>
                    <div className={styles.agile__hero__red__before}>
                        <Image
                        fill
                        src={"/agile-dev-hero-red-triangle.svg"}
                        alt="triangle"
                        />
                    </div>
                    <div className={styles.agile__hero__red__content}>
                        <h1>{$t.agile.title[0]}<br/>{$t.agile.title[1]}</h1>  
                    </div>
                    <div className={styles.agile__hero__red__pink}>
                        <Image
                        fill
                        src={"/agile-dev-hero-diagonal.svg"}
                        alt="diagonal"
                        />
                    </div>
                </Block>
                <Block>
                    <div className={styles.agile__hero__paragraph}>
                        <p>{$t.agile.hero[0]} <br/>{$t.agile.hero[1]} <br/>{$t.agile.hero[2]} <br/>{$t.agile.hero[3]} <br/>{$t.agile.hero[4]}</p>
                    </div>
                    <div className={styles.agile__hero__triangle}>
                        <Image 
                        fill
                        src="/triangles/triangle-code--cyan--right.svg"  
                        className={styles.agile__hero__triangle} 
                        alt="LKMX - Hero"
                        />
                    </div>            
                </Block>
                
            </Column>

            <Column number="1" modeS="full" mode="slim" modeM="normal"  className={styles.agile__intro}>
                <Block className={styles.agile__intro__block}>
                    <p>{$t.agile.intro[0]}<br/>{$t.agile.intro[1]}<br/>{$t.agile.intro[2]} {$t.agile.intro[3]}</p>
                </Block>
            </Column>
            <Column number="1" mode="normal" modeS="full" className={styles.agile__gantt}>
                <Block className={styles.agile__gantt__block}>
                    <div className={styles.agile__gantt__block__img}>
                        <Image fill src="/gantt.svg"  alt="LKMX - Gantt"/>
                    </div>
                    
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" modeS="full" className={styles.agile__sprint}>
                <Block className={styles.agile__sprint__block}>
                    <p>{$t.agile.intro2[0]} {$t.agile.intro2[1]} {$t.agile.intro2[2]} {$t.agile.intro2[3]} {$t.agile.intro2[4]} {$t.agile.intro2[5]}
                    </p>
                    <div className={styles.agile__sprint__block__img}>
                        <Image fill src="/sprint-structure.svg"  alt="LKMX - Sprint"/>
                    </div>                   
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" modeS="full" className={styles.agile__maad}>
                <Block className={styles.agile__maad__block}>
                    <h2>{$t.agile.maad.title}</h2>
                    <p>{$t.agile.maad.par1}</p>
                    <p>{$t.agile.maad.par2}</p>
                    <p>{$t.agile.maad.par3}</p>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" modeS="full" className={styles.agile__flare}>
                <Block className={styles.agile__flare__block}>
                    <h2>{$t.agile.flare.title}</h2>
                    <p>{$t.agile.flare.par}</p>
                    <div className={styles.agile__flare__block__img}>
                        <div className={styles.agile__flare__block__img__container}>
                            <Image fill src="/flare.svg" alt="LKMX - Flare"/>
                        </div>
                    </div>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" modeS="full" className={styles.agile__scrum}>
                <Block className={styles.agile__scrum__block}>
                    <h2>{$t.agile.scrum.title}</h2>
                    <p>{$t.agile.scrum.par}</p>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" modeS="full" className={styles.agile__agile}>
                <Block className={styles.agile__agile__block}>
                <h2>{$t.agile.agile.title}</h2>
                    <p>{$t.agile.agile.par}</p>
                    <div className={styles.agile__agile__block__img}>      
                        <div className={styles.agile__agile__block__img__container}>
                            <Image fill src="/agile.svg" alt="LKMX - Agile"/>
                        </div>                                          
                    </div>
                </Block>
            </Column>
            <Column number="1" mode="slim" modeM="normal" modeS="full" className={styles.agile__cd}>
                <Block className={styles.agile__cd__block}>
                    <h2>{$t.agile.cd.title}</h2>
                    <p>{$t.agile.cd.par[0]}<br/>{$t.agile.cd.par[1]}</p>
                </Block>
            </Column>
            <Column className={styles.agile__navigation} number="1" modeM="full" modeL="normal">
                <Block className={styles.agile__navigation__block}>
                <Link href="/services/discovery" legacyBehavior> 
                    <div className={styles.agile__navigation__block__back}>
                        <div className={styles.agile__navigation__block__back__icon}>
                        <Image fill src="/icons/arrow-left--pink.svg" alt="Pink arrow left"/> 
                        </div>
                        <span>{$t.agile.span.back}</span>                        
                    </div>
                </Link>
                <Link href="/services/agileMaintenance" legacyBehavior>
                    <div className={styles.agile__navigation__block__forward}>
                        <span>{$t.agile.span.forward}</span>
                        <div className={styles.agile__navigation__block__forward__icon}>
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