import BaseLayout from "@/layouts/base-layout.js";
import Head from 'next/head';
import { Block, Column, Page } from "@lkmx/flare-react";
import { getAllPostIds, getPostData } from '@/lib/projects';
import styles from "./project.module.scss";
import Router from 'next/router';
import ImageCarousel from "@/components/image-carousel";

const Logos = (props) => {
    return (
        <div>
            {props.list.map(technology => (
                <img
                    src={`/technologies/${technology}.png`}
                    alt={technology} key={technology}
                />
            ))}
        </div>
    );
}

export default function Post({ postData }) {
    return (
        <BaseLayout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <Page className={styles.project}>
                    <Column className={styles.project__column}>
                        <Block className={styles.project__column__block}>
                            <div onClick={() => Router.back()} className={styles['project__column__block__go-back']} style={{cursor: 'pointer'}}>
                                <img src="/arrow-right.png" alt="arrow-right"/>
                                Regresar
                                <img src="/clouds--120-small.png" alt="clouds" className={styles['project__column__block__go-back__clouds']}/>
                            </div>
                        </Block>
                    </Column>
                    <Column number="2" numberS="1" modeM="full" className={styles.project__column}>
                        <Block className={styles.project__column__block}>
                            <div className={styles.project__column__block__content}>
                                <div className={styles.project__column__block__content__headline}>
                                    <h2>{postData.title}</h2>
                                    <p>{postData.headline}</p>
                                </div>
                                <div className={styles.project__column__block__content__info}>
                                    <div>
                                        <h3>SERVICIOS</h3>
                                        <span>{postData.services}</span>
                                    </div>
                                    <div>
                                        <h3>METODOLOGÍA</h3>
                                        <span>{postData.methodology}</span>
                                    </div>
                                    <div>
                                        <h3>DURACIÓN</h3>
                                        <span>{postData.duration}</span>
                                    </div>
                                </div>
                                <div className={styles.project__column__block__content__description} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}/>
                                <div className={styles.project__column__block__content__technologies}>
                                    <h3>Tecnologías</h3>
                                    <ul>
                                        {
                                            postData.leguages.length > 0 &&
                                            <li>
                                                <span>Languages / Protocols</span>
                                                <Logos list={postData.leguages}/>
                                            </li>
                                        }
                                        {
                                            postData.frameworks.length > 0 &&
                                            <li>
                                                <span>Frameworks / Libraries</span>
                                                <Logos list={postData.frameworks}/>
                                            </li>
                                        }
                                        {
                                            postData.tools.length > 0 &&
                                            <li>
                                                <span>Tools</span>
                                                <Logos list={postData.tools}/>
                                            </li>
                                        }
                                        {
                                            postData.platforms.length > 0 &&
                                            <li>
                                                <span>Platforms</span>
                                                <Logos list={postData.platforms}/>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Block>
                        <Block className={styles.project__column__block}>
                            <div className={styles.project__column__block__galery}>
                                <ImageCarousel proyjectName={postData.id} images={postData.images}/>
                            </div>
                        </Block>
                    </Column>
                </Page>
            </article>
        </BaseLayout>
    );
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}