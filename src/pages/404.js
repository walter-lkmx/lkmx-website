import React from 'react';
import BaseLayout from '@/layouts/base-layout.js';
import styles from './err404.module.scss';
import { Page, Block, Column } from '@lkmx/flare-react';
import getLang from '@/lang';
import siteMetadata from '../meta/siteMetadata';
import HeadSeo from '../components/HeadSeo';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';

export default function Page404 () {
    const { locale } = useRouter();
    const $t = getLang(locale);

    return(
        <BaseLayout>
            <HeadSeo
                title={$t.page404.title + ' - ' + siteMetadata.companyName}
                description={$t.page404.ogDescription}
                ogImageUrl={
                $t.home.ogImage
                    ? $t.home.ogImage
                    : locale === 'es'
                    ? siteMetadata.ogDefaultImageEs
                    : siteMetadata.ogDefaultImageEn
                }
                ogTwitterImage={
                $t.home.ogImage
                    ? $t.home.ogImage
                    : locale === 'es'
                    ? siteMetadata.ogDefaultImageEs
                    : siteMetadata.ogDefaultImageEn
                }
            />

            <Page className={styles.page}>
                <Column mode="slim" modeS="full" className={styles.page__column}>
                    <Block className={styles.page__column__block}>
                        <div className={styles.page__column__block__hexagon}>
                            <Image
                            src={"/hexagon.gif"} alt="glitched Hexagon"
                            priority={true}
                            layout='fill'
                            />
                        </div>
                        <div>
                            <h2>{$t.page404.title}</h2>
                            <p>{$t.page404.paragraph[0]} <br/>{$t.page404.paragraph[1]} <br/>{$t.page404.paragraph[2]} <br/>{$t.page404.paragraph[3]}</p>
                        </div>                        
                        <Link href="/"><div className={styles.page__column__block__btn}>{$t.page404.btn}</div></Link>
                    </Block>                    
                </Column>
            </Page>
        </BaseLayout>
    );
}