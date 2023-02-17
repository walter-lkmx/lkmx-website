import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/agileMaintenance.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import GoBackBar from "../../components/goBackBar";
import Services from "../../components/services"
export default function Ams() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return (
        <BaseLayout>
            <HeadSeo
                title={$t.ams.title + ' - ' + siteMetadata.companyName}
                description={$t.ams.ogDescription}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogType={siteMetadata.ogType}
            />
            <Page>  
            <GoBackBar destiny={"/services"}/>
                <Column mode="normal" className={styles.ams__hero}>
                    <Block className={styles.ams__hero__block}>
                        <span className={styles.ams__hero__block__pink}>{$t.ams.section}</span>
                        <h1>{$t.ams.title}</h1>
                        <span className={styles.ams__hero__block__grey}>{$t.ams.hero[0]} <br/>{$t.ams.hero[1]}</span>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim"  className={styles.ams__heroGrey}>
                    <Block className={styles.ams__heroGrey__block}>
                        <p>{$t.ams.intro}</p>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim" className={styles.ams__intro}>
                    <Block className={styles.ams__intro__block}>     
                    <h2>{$t.ams.kanban.title[0]} <br/>{$t.ams.kanban.title[1]}</h2>
                    <p>{$t.ams.kanban.content}</p>      
                    <div className={styles.ams__intro__block__img}>
                        <Image
                        fill
                        src="/services/ams/agile-maintenance_kanban.svg"
                        alt="Kanban Board"
                        />
                    </div>                                   
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim" className={styles.ams__sections}>
                    <Block className={styles.ams__sections__block}>    
                        <nav className={styles.ams__sections__block__aside}> 
                            <a className={styles.ams__sections__block__aside__anchor} href="#scopeTitle">
                                <span>{$t.ams.scope.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                            <a className={styles.ams__sections__block__aside__anchor} href="#agileTitle">
                                <span>{$t.ams.agile.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                            <a className={styles.ams__sections__block__aside__anchor} href="#supportTitle">
                                <span>{$t.ams.support.title}</span>
                                <div>
                                    <Image
                                    fill
                                    src="/services/white-line.svg"
                                    alt="Menu marker"
                                    />
                                </div>
                            </a>
                        </nav>                                                                                         
                        <section className={styles.ams__sections__block__black}>                        
                            <article className={styles.ams__sections__block__black__item}>
                                <div id="scopeTitle" className={styles.ams__sections__block__black__item__content}>
                                    <h2>{$t.ams.scope.title}</h2>
                                    <p>{$t.ams.scope.content}</p>                                   
                                </div>
                                <div className={styles.ams__sections__block__black__item__scopeImage}>
                                    <Image
                                    fill
                                    src="/services/ams/agile-maintenance_scope-dev.svg"
                                    alt="Rapid Prototyping"
                                    />
                                </div>
                            </article>
                            <article className={styles.ams__sections__block__black__item}>
                                <div id="agileTitle" className={styles.ams__sections__block__black__item__content}>
                                    <h2>{$t.ams.agile.title}</h2>
                                    <p>{$t.ams.agile.content}</p>                                   
                                </div>
                                <div className={styles.ams__sections__block__black__item__agileImage}>
                                    <Image
                                    fill
                                    src="/services/ams/agile-maintenance_maintenance.svg"
                                    alt="Ad-Hoc ams"
                                    />
                                </div>
                            </article>
                            <article className={styles.ams__sections__block__black__item}>
                                <div id="supportTitle" className={styles.ams__sections__block__black__item__content}>
                                    <h2>{$t.ams.support.title}</h2>
                                    <p>{$t.ams.support.content}</p>                                   
                                </div>
                                <div className={styles.ams__sections__block__black__item__supportImage}>
                                    <Image
                                    fill
                                    src="/services/ams/agile-maintenance_cont-support.svg"
                                    alt="Ad-Hoc ams"
                                    />
                                </div>
                            </article>
                        </section>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim" className={styles.ams__wireframe}>
                    <Block className={styles.ams__wireframe__block}>
                        <p>{$t.ams.conclusion}</p>
                    </Block>
                </Column>
                <Services/>
            </Page>            
        </BaseLayout>
    );
}