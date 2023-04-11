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
import ServiceAnchors from "../../components/serviceAnchors";

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
                        <span className={styles.ams__hero__block__grey}>{$t.ams.hero[0]} <br/>{$t.ams.hero[1]} <br/>{$t.ams.hero[2]} <br/>{$t.ams.hero[3]}</span>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim"  className={styles.ams__heroGrey}>
                    <Block className={styles.ams__heroGrey__block}>
                        <p>{$t.ams.intro}</p>
                    </Block>
                </Column>
                <ServiceAnchors anchorsData={$t.ams.sections}/>
                <Column mode="normal" modeL="slim" className={styles.ams__kanban}>
                    <Block className={styles.ams__kanban__block}>     
                    <h2>{$t.ams.kanban.title[0]} <br/>{$t.ams.kanban.title[1]}</h2>
                    <p>{$t.ams.kanban.content}</p>      
                    <div className={styles.ams__kanban__block__img}>
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