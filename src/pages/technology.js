import React from "react";
import BaseLayout from  "@/layouts/base-layout.js";
import styles from "./technology.module.scss";
import technologies from '@/service/json/technologies';
import { Page, Block, Column} from "@lkmx/flare-react";
import getLang from '@/lang';
import siteMetadata from "../meta/siteMetadata"
import HeadSeo from "../components/HeadSeo"
import { useRouter } from "next/router";
import Image from "next/image";

export default function TechnologyPage() {

  const { locale } = useRouter();
  const $t = getLang(locale);

  return (
    <BaseLayout>
      <HeadSeo
        title={$t.technology.title + ' - ' + siteMetadata.companyName}
        description={$t.technology.ogDescription}
        ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
        ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
      />
      <Page className={styles.technology}>
        <Column number="2" numberS="1" className={styles.technology__hero} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full">
          <Block className={styles.technology__hero__block}>
            <div className={styles.technology__hero__block__left}>
              <div>
                <h1>{$t.technology.title}</h1>
                <p>{$t.technology.hero[0]}</p>
                <p>{$t.technology.hero[1]} <strong>{$t.technology.hero[2]}</strong> {$t.technology.hero[3]} <strong>{$t.technology.hero[4]}</strong> {$t.technology.hero[5]} <strong>{$t.technology.hero[6]}</strong> {$t.technology.hero[7]}</p>
              </div>
            </div>
          </Block>
          <Block className={styles.technology__hero__block}>
            <div className={styles.technology__hero__block__right}>
              <div className={styles.technology__hero__block__right__triangle}></div>
              <div className={styles.technology__hero__block__right__background}>
                <Image
                  fill                
                  priority={true}
                  src="/code--blue-bg.svg" alt="code"
                />
              </div>
              <div className={styles.technology__hero__block__right__container}>
                <Image fill src="/circle--pink.svg" alt="ellipse" className={styles.technology__hero__block__right__elipse}/>
              </div>
            </div>
          </Block>
        </Column>
        <Column className={styles.technology__features} modeM="full">
          <Block className={styles.technology__features__block}>
            <div className={styles.technology__features__block__content}>
              <div>
                <h3>AGILE</h3>
                <p>{$t.technology.principles[0]}</p>
              </div>
              <div>
                <h3>CLOUD</h3>
                <p>{$t.technology.principles[1]}</p>
              </div>
              <div>
                <h3>OPEN SOURCE</h3>
                <p>{$t.technology.principles[2]}</p>
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
                            <Image fill src={`/technologies/${technology}`} alt={technology}/>
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