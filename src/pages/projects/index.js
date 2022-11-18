import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import Link from "next/link";
import Head from 'next/head';
import { Block, Column, Page } from "@lkmx/flare-react";
import { getSortedProjectsData } from '@/lib/projects';
import styles from "./index.module.scss";

const Duration = (props) => {
  const duration = `${props.item.startDate}${props.item.endDate ? '-' + props.item.endDate : ''}`
  return (
      <h3>{duration} <br/>{props.item.aditionalDateInfo && props.item.aditionalDateInfo}</h3>
  );
}

export default function WorkPage({ allProjectsData }) {
  return (
    <BaseLayout>
      <Head><title>Trabajo</title></Head>
      <Page className={styles.work}>
        <Column number="2" numberS="1" modeXl="normal" mode="full" weight="right" className={styles.work__hero}>

          <Block className={styles.work__hero__block}>
            <div className={styles.work__hero__block__left}>
              <h2>TRABAJO</h2>
              <p>Conoce una muestra de los <strong>DESAFÍOS</strong> y las <strong>SOLUCIONES</strong> que hemos desarrollado para algunos de nuestros clientes.</p>
            </div>
          </Block>

          <Block className={styles.work__hero__block}>
            <div className={styles.triangule}><div></div></div>
            <div className={styles.code}></div>
            <img src="/triangles/triangle-waves--cyan--right--big.svg" className={styles.wave} alt="wave"/>
            <div className={styles.clouds}><div></div></div>
          </Block>

        </Column>
        <div className={styles.work__list}>
          {allProjectsData.map((item, index) => (
            <div className={styles.work__list__proyect} key={`index-project-${index}`}>
              <Column number="2" weight="right" modeXl="normal" mode="full" className={styles.work__list__column}>

                <Block className={styles.work__list__column__left}>
                  <div className={styles.work__list__column__left__content}>
                    <Duration item={item}/>
                    <ul>
                        {
                          item.services.length > 0 &&
                          item.services.map((i, key) => (
                            <li key={key}>{i}</li>
                          ))
                        }
                    </ul>
                  </div>
                  <div className={styles.line}/>
                </Block>

                <Block className={styles.work__list__column__right}>
                  <div className={styles.work__list__column__right__content}>
                    <h3>{item.title}</h3>
                    <p>{item.headline}</p>
                    <Link href={`/projects/${item.id}`} key={item.id}>
                      <a>
                        <img src="/icons/arrow-right--pink.svg" alt="arrow-left"/>
                      </a>
                    </Link>
                  </div>
                </Block>

              </Column>
            </div>
          ))}
        </div>
      </Page>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData()
  return {
    props: {
      allProjectsData
    }
  }
}