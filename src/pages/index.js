import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import getLang from '@/lang';
import styles from "./index.module.scss";
import siteMetadata from "../meta/siteMetadata"
import HeadSeo from "../components/HeadSeo"
import technologies from '@/service/json/technologies';
import Link from "next/link";
import { useRouter } from "next/router";

function getTeamList() {

  let r = require.context('/public/images', false, /\.(png|jpe?g|svg)$/);
  return r.keys().map(n => {
    return {
      fileName: n.replace(/\.\//, ''),
      name: n.replace(/\.\/_\d*_/, '').replace(/\.jpg/, '')
    }
  }).sort((a, b) => a.name.localeCompare(b.name));
}


export default function Index() {

  const { locale } = useRouter();
  const $t = getLang(locale);
  const pictures = getTeamList();

  pictures.forEach((e, index) => {
    //TODO: Hacer esto automatico para que agregue los espacios cada 20 fotos.
    if((index + 1) == 10 || (index + 1) == 30 || (index + 1) == 50) {
      pictures.splice(index, 0, {fileName: null, name: null}, {fileName: null, name: null});
    }
  });

  console.log($t.home.ogImage)
  return (
    <BaseLayout>
       <HeadSeo
        title={$t.home.title + ' - ' + siteMetadata.companyName}
        description={$t.home.ogDescription}
        ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
        ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
      />

      <Page className={styles.index}>
        <Column number={1} mode="full" className={styles.index__hero} >
          <Block className={styles.index__hero__block}>
            <img src="/hexagon.svg" alt="hexagon"/>
            <div className={styles.index__hero__block__intro}>
                <h2>{$t.home.title2[0]}<br/>{$t.home.title2[1]}</h2>
							<p>{$t.home.hero[0]}<br />{$t.home.hero[1]}</p>
            </div>
            
          </Block>
        </Column>
        <Column className={styles.index__second} number="2" mode="slim">
          <Block className={styles.index__second__block}>
						<div className={styles.index__second__block__left}>
							<h3>{$t.home.servicesTitle}</h3>
							<p>{$t.home.services[0]} <strong>{$t.home.services[1]}</strong><br />{$t.home.services[2]} <strong className={styles.index__second__block__left__cyan}>{$t.home.services[3]}</strong>{$t.home.services[4]}<br />{$t.home.services[5]}<br />{$t.home.services[6]}
              </p>
              <Link href="/services"><div className={styles.index__second__block__left__btn}>{$t.home.buttons.btnServices}</div></Link>
              
            </div>            
          </Block>
          <Block className={styles.index__second__block}>
          <div className={styles.index__second__block__right}>
              <img src="/circle--pink.svg" className={styles.index__second__block__right__circle} alt="circle"/>
              <img src="/dragon.svg" className={styles.index__second__block__right__dragon} alt="dragon"/>
            </div>
          </Block>
        </Column>
        <Column className={styles.index__technology} number="1">
          <Block className={styles.index__technology__block}>
						<div className={styles.index__technology__block__title}>
							<h3>{$t.home.technologiesTitle}</h3>
							<p>{$t.home.technologies[0]}</p>							
							<p>{$t.home.technologies[1]}</p>
            </div>

            <div className={styles.index__technology__block__logos}>
            {technologies.map((rows, indexRow) => {
                return (
                  <div key={`technology-row-${indexRow}`} className={`${styles.index__technology__block__logos__row} ${styles[`row-${indexRow}`]}`}>
                    {
                      rows.map((technology, indexColumn) => {
                        return (
                          <div key={`technology-column-${indexColumn}`} style={{gridArea: `a${indexColumn}` }}>
                            <img src={`/technologies/${technology}`} alt={technology}/>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })}
            </div>
            {/* <Link href="/technology" ><div className={styles.index__technology__block__btn}>{$t.home.buttons.btnTechnologies}</div></Link> */}
            
          </Block>
        </Column>
        <Column className={styles.index__team} mode="full">
          <Block className={styles.index__team__block}>
              <div className={styles.index__team__block__content}>
                <img src="/koi-swimming.svg" className={styles.index__team__block__content__koi} alt="koi"/>
                <div className={styles.index__team__block__content__text}>
								<p>{$t.home.team[0]} <strong>{$t.home.team[1]}</strong> {$t.home.team[2]} <strong className={styles.index__team__block__content__text__pink}>{$t.home.team[3]}</strong> {$t.home.team[4]}<br />{$t.home.team[5]}<br />{$t.home.team[6]}
								</p>
                  {/* <Link href="/team"><div className={styles.index__team__block__content__btn}>{$t.home.buttons.btnTeam}</div></Link> */}
                </div>
                <div className={styles.index__team__block__content__collabs}>
                {pictures.map((picture, index) => {
                return <div key={index} className={`${picture.fileName ? '' : styles['index__team__block__content__card-empty']}`}>
                  {picture.fileName ? <img src={`/images/${picture.fileName}`} alt={picture.name}/> : <></>}
                </div>
              })}
                </div>
              </div>
          </Block>
        </Column>
        {/* <Column className={styles.index__partners}>
          <Block className={styles.index__partners__block}>
            <img className={styles.index__partners__block__leftTriangle} src="/triangles/triangle-waves--left.svg" alt="triangle-waves"/>
            <img className={styles.index__partners__block__rightTriangle} src="/triangles/triangle-waves--right.svg" alt="triangle-waves"/>
            <div className={styles.index__partners__block__content}>
              <p>{$t.home.work[0]} <strong>{$t.home.work[1]}</strong> {$t.home.work[2]} <strong>{$t.home.work[3]}</strong>.</p>
              <Link href="/projects"><div className={styles.index__partners__block__content__btn}>{$t.home.buttons.btnWork}</div></Link>
            </div>
          </Block>
        </Column> */}
      </Page>
    </BaseLayout>
  );
}