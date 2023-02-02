import React from 'react';
import BaseLayout from '@/layouts/base-layout.js';
import Link from 'next/link';
import { Block, Column, Page } from '@lkmx/flare-react';
import getLang from '@/lang';
import styles from './index.module.scss';
import siteMetadata from '../../meta/siteMetadata';
import HeadSeo from '../../components/HeadSeo';
import { useRouter } from 'next/router';
import Image from 'next/image';


export default function StoriesPage({allStoriesData}) {
    const { locale } = useRouter();
    const $t = getLang(locale);
    return (
        <BaseLayout>
            <HeadSeo
                title={$t.stories.title + ' - ' + siteMetadata.companyName}
                description={$t.stories.ogDescription}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
            />
            <Page>
                <Column number="2" numberS="1" weight="right" className={styles.storiesPage__hero}>
                    <Block className={styles.storiesPage__hero__left}>
                        <div className={styles.storiesPage__hero__left__content}>
                            <h1>{$t.stories.title}</h1>
                            <p>
                                {$t.stories.hero[0]}<br/>
                                {$t.stories.hero[1]}<br/>
                                {$t.stories.hero[2]}<br/>
                                {$t.stories.hero[3]}<br/>
                                {$t.stories.hero[4]}
                            </p>
                        </div>   
                        <div className={styles.storiesPage__hero__left__triangle}>
                            <Image
                            fill
                            src="/triangles/triangle-black--left.svg"
                            alt="blue triangle"
                            />
                        </div>                     
                    </Block>
                    <Block className={styles.storiesPage__hero__right}>
                        <div className={styles.storiesPage__hero__right__code}>
                            <Image
                            fill
                            src="/code--cyan-bg.svg"
                            alt="code"
                            />
                        </div>
                        <div className={styles.storiesPage__hero__right__koi}>
                            <Image
                            fill
                            src="/koi-work.svg"
                            alt="KOI"
                            />
                        </div>
                    </Block>
                </Column>
                <Column>
                    <Block className={styles.storiesPage__storiesBlock}>
                        <div className={styles.storiesPage__storiesGrid}> 
                            <div className={`${styles.storiesPage__storiesGrid__soon} ${styles.storiesPage__storiesGrid__left}`}>
                                <div className={styles.storiesPage__storiesGrid__soon__image}></div>
                               <h2>{$t.stories.soon[0]}</h2>
                            </div>
                            <div className={styles.storiesPage__storiesGrid__item}>
                                <Link href="/work/spectrum-wine">
                                    <div>
                                        <div className={styles.storiesPage__storiesGrid__item__img}>
                                            <Image
                                                fill
                                                src={`/work/${$t.stories.spectrum.img}.jpg`}
                                                alt="project image"
                                            />
                                        </div>                                    
                                        <h2>{$t.stories.spectrum.title}</h2>
                                        <span>{$t.stories.spectrum.services[0]}, {$t.stories.spectrum.services[1]}</span>
                                    </div>
                                </Link>                                    
                            </div> 

                            <div className={`${styles.storiesPage__storiesGrid__item} ${styles.storiesPage__storiesGrid__left}`}>
                                <Link href="/work/e-commerce-ws">
                                    <div>
                                        <div className={styles.storiesPage__storiesGrid__item__img}>
                                            <Image
                                                fill
                                                src={`/work/${$t.stories.ws.img}.jpg`}
                                                alt="project image"
                                            />
                                        </div>                                    
                                        <h2>{$t.stories.ws.title[0]}<br/>{$t.stories.ws.title[1]}</h2>
                                        <span>{$t.stories.ws.services[0]}, {$t.stories.ws.services[1]}</span>
                                    </div>
                                </Link>                                    
                            </div> 

                            <div className={styles.storiesPage__storiesGrid__item}>
                                <Link href="/work/legal-case-manager">
                                    <div>
                                        <div className={styles.storiesPage__storiesGrid__item__img}>
                                            <Image
                                                fill
                                                src={`/work/${$t.stories.legal.img}.jpg`}
                                                alt="project image"
                                            />
                                        </div>                                    
                                        <h2>{$t.stories.legal.title}</h2>
                                        <span>{$t.stories.legal.services[0]}, {$t.stories.legal.services[1]}</span>
                                    </div>
                                </Link>                                    
                            </div>                                                                                
                        </div>
                    </Block>
                </Column> 
            </Page>
        </BaseLayout>
    );
}