import BaseLayout from "@/layouts/base-layout.js";
import Head from 'next/head';
import { Block, Column, Page } from "@lkmx/flare-react";
import { getAllProjectIds, getProjectData } from '@/lib/projects';
import styles from "./project.module.scss";
import Router from 'next/router';
import Gallery from "@/components/gallery";

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

const Duration = (props) => {
    const duration = `${props.data.startDate}${props.data.endDate ? ', ' + props.data.endDate : ''}`
    return (
        <span>{duration}</span>
    );
}

export default function Project({ projectData }) {
    const hasImages = projectData.images && projectData.images.length > 0;

    return (
        <BaseLayout>
            <Head>
                <title>{projectData.title}</title>
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
                    <Column numberS="1" modeM="full" className={styles.project__column}>
                        <Block className={styles.project__column__block}>
                            <div className={`${styles.project__column__block__container}`}>
                                <div className={styles.project__column__block__container__content}>
                                    <div className={styles.project__column__block__container__content__headline}>
                                        <h2>{projectData.title}</h2>
                                        <p>{projectData.headline}</p>
                                    </div>
                                    <div className={styles.project__column__block__container__content__info}>
                                        <div>
                                            <h3>SERVICIOS</h3>
                                            <span>{projectData.services}</span>
                                        </div>
                                        <div>
                                            <h3>METODOLOGÍA</h3>
                                            <span>{projectData.methodology}</span>
                                        </div>
                                        <div>
                                            <h3>DURACIÓN</h3>
                                            <Duration data={projectData}/>
                                        </div>
                                    </div>
                                    <div className={styles.project__column__block__container__content__description} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}/>
                                    <div className={styles.project__column__block__container__content__technologies}>
                                        <h3>Tecnologías</h3>
                                        <ul>
                                            {
                                                projectData.leguages.length > 0 &&
                                                <li>
                                                    <span>Languages / Protocols</span>
                                                    <Logos list={projectData.leguages}/>
                                                </li>
                                            }
                                            {
                                                projectData.frameworks.length > 0 &&
                                                <li>
                                                    <span>Frameworks / Libraries</span>
                                                    <Logos list={projectData.frameworks}/>
                                                </li>
                                            }
                                            {
                                                projectData.tools.length > 0 &&
                                                <li>
                                                    <span>Tools</span>
                                                    <Logos list={projectData.tools}/>
                                                </li>
                                            }
                                            {
                                                projectData.platforms.length > 0 &&
                                                <li>
                                                    <span>Platforms</span>
                                                    <Logos list={projectData.platforms}/>
                                                </li>
                                            }
                                        </ul>
                                    </div>
                                </div>
                                {
                                    hasImages && 
                                    <div className={styles.project__column__block__container__gallery}>
                                        <Gallery proyjectName={projectData.id} images={projectData.images} className={styles.project__column__block__container__galery__content}/>
                                    </div>
                                }
                            </div>
                        </Block>
                    </Column>
                </Page>
            </article>
        </BaseLayout>
    );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}