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
import ServiceAnchors from "../../components/serviceAnchors";

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
                <ServiceAnchors anchorsData={$t.agile.sections}/>
                <Services/>
            </Page>
        </BaseLayout>
    );
}