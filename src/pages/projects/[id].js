import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import { getAllProjectIds, getProjectData } from '@/lib/projects';
import styles from "./project.module.scss";
import Router, { useRouter } from 'next/router';
import Gallery from "@/components/gallery";
import siteMetadata from "../../meta/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import getLang from '@/lang';

const Logos = (props) => {
    return (
        <div>
            {props.list.map(technology => (
                <img
                    src={`/technologies/${technology}.svg`}
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

    const { locale } = useRouter();
    const $t = getLang(locale);

    return (
        <BaseLayout>
            <HeadSeo
                title={projectData.title + ' - ' + siteMetadata.companyName}
                description={projectData.headline}
                canonicalUrl={siteMetadata.siteUrl}
                ogImageUrl={"https://iili.io/H9S6dIj.jpg"}
                ogTwitterImage={`https://iili.io/H9S6dIj.jpg`}
                ogType={siteMetadata.ogType}
            />
            <article>
                <Page className={styles.project}>
                    <Column className={styles.project__column}>
                        <Block className={styles.project__column__block}>
                            <div onClick={() => Router.back()} className={styles['project__column__block__go-back']} style={{cursor: 'pointer'}}>
                                <img src="/icons/arrow-left--white.svg" alt="arrow-right"/>
                                Regresar
                                <div className={styles['project__column__block__go-back__clouds']}></div>
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
                                            <h3>{$t.project.services}</h3>
                                            <span>{projectData.services}</span>
                                        </div>
                                        {
                                            projectData.methodology &&
                                            <div>
                                                <h3>{$t.project.methodologies}</h3>
                                                <span>{projectData.methodology}</span>
                                            </div>
                                        }
                                        <div>
                                            <h3>{$t.project.years}</h3>
                                            <Duration data={projectData}/>
                                        </div>
                                    </div>
                                    <div className={styles.project__column__block__container__content__description} dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}/>
                                    {
                                        projectData.leguages.length > 0 && projectData.frameworks.length > 0 && projectData.tools.length > 0 && projectData.platforms.length > 0 &&
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
                                    }
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

export async function getStaticPaths({locales}) {
  const paths = getAllProjectIds(locales);

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, locale }) {
  const projectData = await getProjectData(params.id, locale);

  return {
    props: {
      projectData
    }
  }
}