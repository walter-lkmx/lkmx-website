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
                            />
                        </div>
                    </Block>
                </Column>
                <Column>
                    <Block>
                        <h2>{storyData.section1.title}</h2>
                        <p>
                        {storyData.section1.content}
                        </p>
                    </Block>
                </Column>
            </Page>
        </BaseLayout>
    )
}