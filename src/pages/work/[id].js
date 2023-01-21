import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import { getAllStoriesIds, getStoryData } from '@/lib/work';
import styles from "./story.module.scss";
import Router, { useRouter } from 'next/router';
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';
import Image from "next/image";
import Services from "../../components/services";

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
                        <span>{storyData.headline[0]}<br/> {storyData.headline[1]}</span>
                    </Block>
                </Column>
                <Column>
                    <Block>
                        <div className={styles.story__heroImg}>
                            <Image
                            fill
                            src={`/work/${storyData.hero}.png`}
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
                            <div className={styles.story__mainContent} dangerouslySetInnerHTML={{ __html: storyData.contentHtml }}></div>                            
                        </div>                                                                       
                    </Block>
                </Column>
                <Services/>
            </Page>
        </BaseLayout>
    )
}