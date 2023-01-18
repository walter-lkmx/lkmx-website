import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import { getAllStoriesIds, getStoryData } from '@/lib/stories';
import styles from "./story.module.scss";
import Router, { useRouter } from 'next/router';
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import Image from "next/image";

export async function getStaticPaths({locales}) {
    const paths = getAllStoriesIds(locales);
    
    return {
        paths,
        fallback: false
    }
    }
      
export async function getStaticProps({ params, locale }) {
    const storyData = await getStoryData(params.id, locale);

    return {
        props: {
        storyData
        }
    }
}

export default function SuccessStory({storyData}) {
    const { locale } = useRouter();
    const $t = getLang(locale); 

    return(
        <BaseLayout>
            <HeadSeo
                title={storyData.title + ' - ' + siteMetadata.companyName}
                description={storyData.headline}
                ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
                ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
            />
            <Page>
                <Column>
                    <Block className={styles.story__heroHeading}>
                        <span>{storyData.storyType}</span>
                        <h1>{storyData.title}</h1>
                        <span>{storyData.headline[0]}<br/>{storyData.headline[1]}</span>
                    </Block>
                </Column>
                <Column>
                    <Block>
                        <div className={styles.story__heroImg}>
                            <Image
                            fill
                            src={`/stories/${storyData.hero}.png`}
                            alt="Heading Image"
                            />
                        </div>
                    </Block>
                </Column>
                <Column>
                    <Block>
                        <div className={styles.story__wrapper}>
                            <div className={styles.story__aside}>
                                <div className={styles.story__aside__item}>
                                    <span>{$t.story.services}</span>
                                    <ul>
                                        {storyData.services.map((item, key) => <li key={key}>{item}</li>)}
                                </ul>
                                </div>
                                <div className={styles.story__aside__item}>
                                    <span>{$t.story.methodology}</span>
                                    <ul>
                                        {storyData.methodologies.map((item, key) => <li key={key}>{item}</li>)}
                                    </ul>
                                </div>
                                <div className={styles.story__aside__item}>
                                    <span>{$t.story.period}</span>
                                    <ul>
                                        {storyData.period.map((item, key) => <li key={key}>{item}</li>)}
                                    </ul>
                                </div>
                            </div>
                            <article className={styles.story__mainContent}>
                                <div className={styles.story__mainContent__intro}>
                                    <div className={styles.story__mainContent__intro__content}>
                                        <h2>{storyData.section1.title}</h2>
                                        <p>
                                        {storyData.section1.content}
                                        </p>
                                    </div>
                                </div> 
                                <div className={styles.story__mainContent__challenges}>
                                    <h2>{storyData.section2.title}</h2>
                                    <p>{storyData.section2.paragraph1}</p>
                                    <p>{storyData.section2.paragraph2}</p>
                                </div>
                                <figure>
                                    <div className={styles.story__mainContent__challenges__image}>
                                        <Image
                                        fill
                                        src={`/stories/${storyData.section2.image}.png`}
                                        alt="section 2's image"/>
                                    </div>                                    
                                    <figcaption className={styles.story__mainContent__challenges__caption}>{storyData.section2.imageCaption}</figcaption>
                                </figure>
                                <div className={styles.story__mainContent__solutions}>
                                    <h2>{storyData.section3.title}</h2>
                                    <p>{storyData.section3.paragraph1}</p>
                                </div>
                            </article>
                        </div>                                                                       
                    </Block>
                </Column>
            </Page>
        </BaseLayout>
    )
}