import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/continuousSupport.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image";
import GoBackBar from "../../components/goBackBar";
import Services from "../../components/services";
import ServiceAnchors from "../../components/serviceAnchors";

export default function ContinuousSupport() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return (
        <BaseLayout>
            <HeadSeo
                title={$t.support.title + ' - ' + siteMetadata.companyName}
                description={$t.support.ogDescription}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogType={siteMetadata.ogType}
            />
            <Page>  
            <GoBackBar destiny={"/services"}/>
            <Column mode="normal" className={styles.support__hero}>
                    <Block className={styles.support__hero__block}>
                        <span className={styles.support__hero__block__pink}>{$t.support.section}</span>
                        <h1>{$t.support.title}</h1>
                        <span className={styles.support__hero__block__grey}>{$t.support.hero[0]} <br/>{$t.support.hero[1]} <br/>{$t.support.hero[2]} <br/>{$t.support.hero[3]}</span>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim"  className={styles.support__heroGrey}>
                    <Block className={styles.support__heroGrey__block}>
                        <p>{$t.support.intro}</p>
                    </Block>
                </Column>
                <ServiceAnchors anchorsData={$t.support.sections}/>
                <Column mode="normal" modeL="slim" className={styles.support__kanban}>
                    <Block className={styles.support__kanban__block}>     
                    <h2>{$t.support.kanban.title[0]} <br/>{$t.support.kanban.title[1]}</h2>
                    <p>{$t.support.kanban.content}</p>      
                    <div className={styles.support__kanban__block__img}>
                        <Image
                            fill
                            src="/services/ams/kanban.svg"
                            alt="Kanban Board"
                        />
                    </div>                                   
                    </Block>
                </Column>
                <Services/>
            </Page>            
        </BaseLayout>
    );
}