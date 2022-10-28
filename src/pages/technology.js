import React from "react";
import BaseLayout from  "@/layouts/base-layout.js";
import styles from "./technology.module.scss";
import technologies from '@/service/json/technologies';
import { Page, Block, Column} from "@lkmx/flare-react";
import Head from "next/head";

export default function TechnologyPage() {
  return (
    <BaseLayout>
      <Head><title>Tecnología</title></Head>
      <Page className={styles.technology}>
        <Column number="2" numberS="1" className={styles.technology__hero} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full">
          <Block className={styles.technology__hero__block}>
            <div className={styles.technology__hero__block__left}>
              <img src="/wave--blue.png" alt="wave" className={styles.technology__hero__block__left__wave}/>
              <div>
                <h2>TECNOLOGÍA</h2>
                <p>Utilizamos tres principios al elegir nuestra tecnología: Agile, Cloud y Open-Source.</p>
                <p>Nuestro <strong>STACK</strong> de tecnología se mantiene <strong>organizado</strong> y <strong>ACTUALIZADO</strong> por arquitectos de software con décadas de experiencia combinada.</p>
              </div>
            </div>
          </Block>
          <Block className={styles.technology__hero__block}>
            <div className={styles.technology__hero__block__right}>
              <div></div>
              <img src="ellipse.png" alt="ellipse" className={styles.technology__hero__block__right__elipse}/>
            </div>
          </Block>
        </Column>
        <Column className={styles.technology__features} modeM="full">
          <Block className={styles.technology__features__block}>
            <div className={styles.technology__features__block__content}>
              <div>
                <h3>AGILE</h3>
                <p>Nuestras herramientas nos ayudan a alcanzar grandes velocidades de desarrollo.</p>
              </div>
              <div>
                <h3>CLOUD</h3>
                <p>Nuestro software es nativo de la nube y se integra sin dificultades en cualquier plataforma.</p>
              </div>
              <div>
                <h3>OPEN SOURCE</h3>
                <p>Somos expertos en open-source, lo conocemos y estudiamos antes de incorporarlo a nuestro software.</p>
              </div>
            </div>
          </Block>
        </Column>
        <Column className={styles.technology__technologies}>
          <Block className={styles.technology__technologies__block}>
            <div className={styles.technology__technologies__block__container}>
              {technologies.map((rows, indexRow) => {
                return (
                  <div key={`technology-row-${indexRow}`} className={`${styles.technology__technologies__block__container__row} ${styles[`row-${indexRow}`]}`}>
                    {
                      rows.map((technology, indexColumn) => {
                        return (
                          <div key={`technology-column-${indexColumn}`} style={{gridArea: `a${indexColumn}` }}>
                            <img src={`technologies/${technology}`} alt={technology}/>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })}
            </div>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}