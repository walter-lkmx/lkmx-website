import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import styles from "./privacy.module.scss";
import { Block, Column, Page } from "@lkmx/flare-react";
import getLang from '@/lang';
import siteMetadata from "../meta/siteMetadata"
import HeadSeo from "../components/HeadSeo"
import { useRouter } from "next/router";


export default function PrivacyPage() {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return(
        <BaseLayout>
            <HeadSeo
                title={$t.privacy.title + ' - ' + siteMetadata.companyName}
                description={$t.privacy.ogDescription}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
            />
            <Page className={styles.privacy}>
                <Column mode="normal" modeL="slim" className={styles.privacy__column}>
                    <Block className={styles.privacy__column__block}>
                        <h1>{$t.privacy.title}</h1>
                        <p>{$t.privacy.intro}</p>
                    </Block>
                    <Block className={styles.privacy__column__block}>
                        <h2>{$t.privacy.section1.title}</h2>
                        <p>{$t.privacy.section1.paragraph}</p>
                        <ul>
                            <li>{$t.privacy.section1.li[0]}</li>
                        </ul>
                    </Block>
                    <Block className={styles.privacy__column__block}>
                        <h2>{$t.privacy.section2.title}</h2>
                        <p>{$t.privacy.section2.paragraph}</p>
                        <ul>
                            <li>{$t.privacy.section2.li[0]}</li>
                        </ul>
                    </Block>
                    <Block className={styles.privacy__column__block}>
                        <h2>{$t.privacy.section3.title}</h2>
                        <p>{$t.privacy.section3.paragraph}</p>
                        <p>{$t.privacy.section3.paragraph2}</p>
                        <ul>
                            <li>{$t.privacy.section3.li[0]}</li>
                            <li>{$t.privacy.section3.li[1]}</li>
                            <li>{$t.privacy.section3.li[2]}</li>
                            <li>{$t.privacy.section3.li[3]}</li>
                            <li>{$t.privacy.section3.li[4]}</li>
                            <li>{$t.privacy.section3.li[5]}</li>
                        </ul>
                    </Block>
                    <Block className={styles.privacy__column__block}>
                        <h2>{$t.privacy.section4.title}</h2>
                        <p>{$t.privacy.section4.paragraph}</p>
                    </Block>
                    <Block className={styles.privacy__column__block}>
                        <h2>{$t.privacy.section5.title}</h2>
                        <p>{$t.privacy.section5.paragraph}</p>
                    </Block>
                    <Block className={styles.privacy__column__block}>
                        <h2>{$t.privacy.section6.title}</h2>
                        <p>{$t.privacy.section6.paragraph}</p>
                        <ul>
                            <li>{$t.privacy.section6.li[0]}</li>
                            <li>{$t.privacy.section6.li[1]}</li>
                            <li>{$t.privacy.section6.li[2]}</li>
                        </ul>
                        <p>{$t.privacy.section6.paragraph2}</p>
                    </Block>
                    <Block className={styles.privacy__column__block}>
                        <h2>{$t.privacy.section7.title}</h2>
                        <p>{$t.privacy.section7.paragraph} <strong>{$t.privacy.section7.link}</strong></p>
                    </Block>
                </Column>
            </Page>
        </BaseLayout>
    );
}