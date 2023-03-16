import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/discovery.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link"
import GoBackBar from "../../components/goBackBar";
import Services from "../../components/services"
import ServiceAnchors from "../../components/serviceAnchors";

export default function DiscoveryPage() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return (
        <BaseLayout>
            <HeadSeo
                title={$t.discovery.title + ' - ' + siteMetadata.companyName}
                description={$t.discovery.hero[0] + ' ' + $t.discovery.hero[1] + ' ' + $t.discovery.hero[2]}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogType={siteMetadata.ogType}
            />
            <Page className={styles.discovery}>  
            <GoBackBar destiny={"/services"}/>
                <Column mode="normal" className={styles.discovery__hero}>
                    <Block className={styles.discovery__hero__block}>
                        <span className={styles.discovery__hero__block__pink}>{$t.discovery.section}</span>
                        <h1>{$t.discovery.title}</h1>
                        <span className={styles.discovery__hero__block__grey}>{$t.discovery.hero[0]} <br/>{$t.discovery.hero[1]} <br/>{$t.discovery.hero[2]} <br/>{$t.discovery.hero[3]}</span>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim"  className={styles.discovery__heroGrey}>
                    <Block className={styles.discovery__heroGrey__block}>
                        <p>{$t.discovery.intro}</p>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim" className={styles.discovery__intro}>
                    <Block className={styles.discovery__intro__block}>     
                    <h2>{$t.discovery.methodologies.title}</h2>
                    <p>{$t.discovery.methodologies.content}</p>                                         
                    </Block>
                </Column>
                <ServiceAnchors anchorsData={$t.discovery.sections}/>
                <Column mode="normal" modeL="slim" className={styles.discovery__wireframe}>
                    <Block className={styles.discovery__wireframe__block}>
                        <p>{$t.discovery.wireframe.par1}</p>
                        <br/>
                        <p>{$t.discovery.wireframe.par2}</p>
                        <div className={styles.discovery__wireframe__block__image}>
                            <Image
                            fill
                            src="/services/discovery/discovery_wireframe.svg"
                            alt="Wireframe representation"/>
                        </div>
                    </Block>
                </Column>
                <Services/>
            </Page>            
        </BaseLayout>
    );
}