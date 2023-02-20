import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/agileDevelopment.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image";
import GoBackBar from "../../components/goBackBar";
import Services from "../../components/services";

export default function AgileDevelopment() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return (
        <BaseLayout>
            <HeadSeo
                title={$t.agile.title + ' - ' + siteMetadata.companyName}
                description={$t.agile.ogDescription}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogType={siteMetadata.ogType}
            />
            <Page>
                <GoBackBar destiny={"/services"}/>
                <Column mode="normal" className={styles.agile__hero}>
                    <Block className={styles.agile__hero__block}>
                        <span className={styles.agile__hero__block__pink}>{$t.agile.section}</span>
                        <h1>{$t.agile.title}</h1>
                        <span className={styles.agile__hero__block__grey}>{$t.agile.hero[0]} <br/>{$t.agile.hero[1]} <br/>{$t.agile.hero[2]} <br/>{$t.agile.hero[3]}</span>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim"  className={styles.agile__heroGrey}>
                    <Block className={styles.agile__heroGrey__block}>
                        <p>{$t.agile.intro[0]}<br/>{$t.agile.intro[1]}<br/>{$t.agile.intro[2]}<br/>{$t.agile.intro[3]}</p>
                    </Block>
                </Column>
                <Column className={styles.agile__intro}>
                    <Block className={styles.agile__intro__block}>
                        <div className={styles.agile__intro__block__img}>
                            <Image
                            fill
                            src={"/services/agileDev/gantt.svg"}
                            alt="gantt"
                            />
                        </div>                        
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim" className={styles.agile__intro2}>
                    <Block className={styles.agile__intro2__block}>
                        <p>{$t.agile.intro2}</p>
                        <div className={styles.agile__intro2__block__img}>
                            <Image
                            fill
                            src={"/services/agileDev/sprint-structure.svg"}
                            alt="sprint structure"
                            />
                        </div>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim" className={styles.agile__sections}>
                    <Block className={styles.agile__sections__block}>    
                        <nav className={styles.agile__sections__block__aside}> 
                            <a className={styles.agile__sections__block__aside__anchor} href="#maadTitle">
                                <span>{$t.agile.maad.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                            <a className={styles.agile__sections__block__aside__anchor} href="#flareTitle">
                                <span>{$t.agile.flare.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                            <a className={styles.agile__sections__block__aside__anchor} href="#scrumTitle">
                                <span>{$t.agile.scrum.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                            <a className={styles.agile__sections__block__aside__anchor} href="#cdTitle">
                                <span>{$t.agile.cd.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                            <a className={styles.agile__sections__block__aside__anchor} href="#AgileTitle">
                                <span>{$t.agile.agile.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                        </nav>                                                                                         
                        <section className={styles.agile__sections__block__black}>                        
                            <article className={styles.agile__sections__block__black__item}>
                                <div id="maadTitle" className={styles.agile__sections__block__black__item__content}>
                                    <h2>{$t.agile.maad.title}</h2>
                                    <p>{$t.agile.maad.par1}</p>
                                    <br/>
                                    <p>{$t.agile.maad.par2}</p>
                                    <br/>
                                    <p>{$t.agile.maad.par3}</p>                                    
                                </div>
                                <div className={styles.agile__sections__block__black__item__maadImage}>
                                    <Image
                                    fill
                                    src="/services/agileDev/agile-dev_maad.svg"
                                    alt="MAAD representation"
                                    />
                                </div>
                            </article>
                            <article className={styles.agile__sections__block__black__item}>
                                <div id="flareTitle" className={`${styles.agile__sections__block__black__item__content} ${styles.agile__sections__block__black__item__pushedDown}`}>
                                    <h2>{$t.agile.flare.title}</h2>
                                    <p>{$t.agile.flare.par}</p>                                   
                                </div>
                                <div className={styles.agile__sections__block__black__item__flareImage}>
                                    <Image
                                    fill
                                    src="/services/agileDev/agile-dev_flare.svg"
                                    alt="Flare representation"
                                    />
                                </div>
                            </article>
                            <article className={styles.agile__sections__block__black__item}>
                                <div id="scrumTitle" className={styles.agile__sections__block__black__item__content}>
                                    <h2>{$t.agile.scrum.title}</h2>
                                    <p>{$t.agile.scrum.par}</p>                                   
                                </div>
                                <div className={styles.agile__sections__block__black__item__scrumImage}>
                                    <Image
                                    fill
                                    src="/services/agileDev/agile-dev_scrum.svg"
                                    alt="Flare representation"
                                    />
                                </div>
                            </article>
                            <article className={styles.agile__sections__block__black__item}>
                                <div id="agileTitle" className={styles.agile__sections__block__black__item__content}>
                                    <h2>{$t.agile.agile.title}</h2>
                                    <p>{$t.agile.agile.par}</p>                                   
                                </div>
                                <div className={styles.agile__sections__block__black__item__agileImage}>
                                    <Image
                                    fill
                                    src="/services/agileDev/agile-dev_flow.svg"
                                    alt="Flare representation"
                                    />
                                </div>
                            </article>
                            <article className={styles.agile__sections__block__black__item}>
                                <div id="cdTitle" className={styles.agile__sections__block__black__item__content}>
                                    <h2>{$t.agile.cd.title}</h2>
                                    <p>{$t.agile.cd.par[0]}<br/>{$t.agile.cd.par[1]}</p>                                   
                                </div>
                                <div className={styles.agile__sections__block__black__item__cdImage}>
                                    <Image
                                    fill
                                    src="/services/agileDev/agile-dev_cd-ci.svg"
                                    alt="Flare representation"
                                    />
                                </div>
                            </article>
                        </section>
                    </Block>
                </Column>
                <Services/>
            </Page>
        </BaseLayout>
    );
}