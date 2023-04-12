import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/services/scopeDevelopment.module.scss";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import { useRouter } from "next/router";
import Image from "next/image";
import GoBackBar from "../../components/goBackBar";
import Services from "../../components/services";
import ServiceAnchors from "../../components/serviceAnchors";

export default function ScopeDevelopment() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return(
        <BaseLayout>
            <HeadSeo
                title={$t.scope.title + ' - ' + siteMetadata.companyName}
                description={$t.scope.ogDescription}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogType={siteMetadata.ogType}
            />
            <Page className={styles.scope}>
                <GoBackBar destiny={"/services"}/>
                <Column mode="normal" className={styles.scope__hero}>
                    <Block className={styles.scope__hero__block}>
                        <span className={styles.scope__hero__block__pink}>{$t.scope.section}</span>
                        <h1>{$t.scope.title}</h1>
                        <span className={styles.scope__hero__block__grey}>{$t.scope.hero[0]} <br/>{$t.scope.hero[1]} <br/>{$t.scope.hero[2]} <br/>{$t.scope.hero[3]}</span>
                    </Block>
                </Column>
                <Column mode="normal" modeL="slim"  className={styles.scope__heroGrey}>
                    <Block className={styles.scope__heroGrey__block}>
                        <p>{$t.scope.intro[0]} {$t.scope.intro[1]}</p>
                    </Block>
                </Column>
                <ServiceAnchors anchorsData={$t.scope.sections}/>
                <Column mode="normal" modeL="slim" className={styles.scope__kanban}>
                    <Block className={styles.scope__kanban__block}>     
                    <h2>{$t.scope.kanban.title[0]} <br/>{$t.scope.kanban.title[1]}</h2>
                    <p>{$t.scope.kanban.content}</p>      
                    <div className={styles.scope__kanban__block__img}>
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