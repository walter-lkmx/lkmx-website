import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import PhasesSvg from '@/assets/phases.svg';
import PhasesMobileSvg from '@/assets/phases--mobile.svg';
import Banner from '@/components/banner.js';
import styles from "./services.module.scss";
import Head from "next/head";
import { Block, Column, Page } from "@lkmx/flare-react";

export default function ServicesPage({$t}) {
  return (
    <BaseLayout>
      <Head><title>{$t.services.title}</title></Head>

      <Page className={styles.page}>

        <Column number={2} numberS={1} className={styles.page__services} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full">
          <Block>
            <div className={styles.page__services__content}>
              <h2>{$t.services.title}</h2>
              <p>{$t.services.hero[0]} <strong>{$t.services.hero[1]}</strong> {$t.services.hero[2]} <strong>{$t.services.hero[3]}</strong>, {$t.services.hero[4]}.</p>
            </div>
          </Block>
          <Block className={styles.page__services__dragon}>
            <div className={styles.page__services__dragon__content}>
              <div>
                <img src="/ellipse.png" alt="ellipse" className={styles.page__services__dragon__content__elipse}/>
                <img src="/dragon.png" alt="dragon" className={styles.page__services__dragon__content__image}/>
              </div>
            </div>
          </Block>
        </Column>

        <Banner>
          <div className={styles.page__about}>
            <div>
              <p>{$t.services.banner[0]}</p>
              <div>
                <h3>{$t.services.banner[1]},</h3>
                <p>
                  {$t.services.banner[2]}.
                </p>
              </div>
            </div>
            <p>{$t.services.banner[3]}.</p>
          </div>
        </Banner>

        <Column mode="full" className={styles['page__phases-links']}>
          <Block>
            <div>
              <PhasesSvg className={styles['page__phases-links__svg-desktop']}/>
              <PhasesMobileSvg className={styles['page__phases-links__svg-mobile']}/>
              <div className={styles['page__phases-links__arrow']}>
                <div></div>
              </div>
            </div>
          </Block>
        </Column>

        <Column numberS={1} modeL="normal" modeS="full" className={styles.page__phases}>
          <Block className={styles.page__phases__block}>
            <div className={styles.page__phases__content}>
              <div>
                <h4>DISCOVERY</h4>
                <p>{$t.services.phases[0]}</p>
                <img src="/arrow-right--pink.png" alt="arrow"/>
              </div>
              <div>
                <h4>AGILE<br/>DEVELOPMENT</h4>
                <p>{$t.services.phases[1]}</p>
                <img src="/arrow-right--pink.png" alt="arrow"/>
              </div>
              <div>
                <h4>AGILE MAINTENANCE, SCOPE DEV. & CONTINUOUS SUPPORT</h4>
                <p>{$t.services.phases[2]}</p>
                <img src="/arrow-right--pink.png" alt="arrow"/>
              </div>
            </div>
          </Block>
        </Column>

      </Page>
    </BaseLayout>
  );
}