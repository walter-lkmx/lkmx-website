import React from 'react';
import BaseLayout from '@/layouts/base-layout.js';
import Link from 'next/link';
import { Block, Column, Page } from '@lkmx/flare-react';
import { getSortedStoriesData } from '@/lib/stories';
import getLang from '@/lang';
import styles from './index.module.scss';
import siteMetadata from '../../meta/siteMetadata';
import HeadSeo from '../../components/HeadSeo';
import { useRouter } from 'next/router';
import Image from 'next/image';


export async function getServerSideProps(context) {

    const allStoriesData = getSortedStoriesData(context.locale);
  
    return {
      props: {
        allStoriesData,
      },
    };
}

export default function StoriesPage({allStoriesData}) {
    const { locale } = useRouter();
    const $t = getLang(locale);
   // TODO: set images src let imagePath = props.proyjectName.replace(/\.\w+/i, '');
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
                            <h1>{$t.stories.title1[0]}<br/>{$t.stories.title1[1]}</h1>
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
                            src="/koi-stories.svg"
                            alt="KOI"
                            />
                        </div>
                    </Block>
                </Column>
                <Column>
                    <Block>
                        <div className={styles.storiesPage__storiesGrid}> 
                            <div className={styles.storiesPage__storiesGrid__soon}>
                                <div className={styles.storiesPage__storiesGrid__soon__image}></div>
                                <h1 className={styles.storiesPage__storiesGrid__soon__hide}>{$t.stories.soon[0]}</h1> <h1>{$t.stories.soon[1]}</h1>
                            </div>
                            {allStoriesData.map((item, index) => (
                                <div key={`index-story-${index}`} className={styles.storiesPage__storiesGrid__item}>
                                    <Link href={`/stories/${item.id}`} key={item.id}>
                                        <div>
                                            <div className={styles.storiesPage__storiesGrid__item__img}>
                                                <Image
                                                    fill
                                                    src={`/stories/${item.portrait}.png`}
                                                    alt="project image"
                                                />
                                            </div>                                    
                                            <h1>{item.title}</h1>
                                            <span>{item.services[0]}, {item.services[1]}</span>
                                        </div>
                                    </Link>                                    
                                </div>
                            ))}                        
                        </div>
                    </Block>
                </Column> 
            </Page>
        </BaseLayout>
    );
}