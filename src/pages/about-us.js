import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/about-us.module.scss";
import Carousel from "@/components/carousel.js";
import Head from "next/head";

function getTeamList() {
  let r = require.context('/public/images', false, /\.(png|jpe?g|svg)$/);
  return r.keys().map(n => {
    return {
      fileName: n.replace(/\.\//, ''),
      name: n.replace(/\.\/_\d*_/, '').replace(/\.jpg/, '')
    }
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export default function ContactPage({$t}) {
  const pictures = getTeamList();
  pictures.forEach((e, index) => {
    if((index + 1) % 10 == 0) {
      pictures.splice(index, 0, {fileNames: null, name: null});
    }
  });

  return (
    <BaseLayout>
      <Head><title>{$t.contact.title}</title></Head>

      <Page className={styles.contact}>

        <Column number={2} numberS={1} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full" className={styles.contact__hero}>
          <Block>
            <div className={styles.contact__hero__left}>
              <h2>{$t.contact.headline}</h2>
              <p>{$t.contact.hero[0]} <strong>{$t.contact.hero[1]}</strong> {$t.contact.hero[2]} <strong>{$t.contact.hero[3]}</strong>{$t.contact.hero[4]}</p>
            </div>
          </Block>
          <Block className={styles['contact__hero__block-right']}>
            <div className={styles.contact__hero__right}>
              <div><div></div></div>
              <div className={styles.contact__hero__right__koi}>
                <img src="/koi-swimming.png" alt="koi-swimming" className={styles.contact__hero__right__koi__img}/>
              </div>
              <img src="/triangle/red/triangle.png" alt="triangle" className={styles.contact__hero__right__triangle}/>
              <img src="/triangle/red/triangle--small.png" alt="triangle" className={styles['contact__hero__right__triangle-mobile']}/>
              <img src="/clouds--large.png" alt="clouds--large" className={styles.contact__hero__right__clouds}/>
              <img src="/clouds--small.png" alt="clouds--small" className={styles['contact__hero__right__clouds-mobile']}/>
            </div>
          </Block>
        </Column>

        <Column>
          <Block className={styles.contact__banner}>
            <div className={styles.contact__banner__content}>
              <h3>{$t.contact.banner.title[0]} <strong>{$t.contact.banner.title[1]}</strong>, <strong>{$t.contact.banner.title[2]}</strong>, <strong>{$t.contact.banner.title[3]}</strong> {$t.contact.banner.title[4]}</h3>
              <p>{$t.contact.banner.text}</p>
            </div>
          </Block>
        </Column>

        <Column modeXl="normal" modeL="full" modeM="full">
          <Block className={styles.contact__team}>
            <div className={styles.contact__team__content}>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>{$t.contact.analysis.title}</h3>
                  <p>{$t.contact.analysis.text}</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>{$t.contact.design.title}</h3>
                  <p>{$t.contact.design.text}</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>{$t.contact.development.title}</h3>
                  <p>{$t.contact.development.text}</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>{$t.contact.quality.title}</h3>
                  <p>{$t.contact.quality.text}</p>
                </div>
              </div>
              {pictures.map((picture, index) => {
                return <div key={index} className={`${picture.fileName ? '' : styles['contact__team__content__card-empty']}`}>
                  {picture.fileName ? <img src={`/images/${picture.fileName}`} alt={picture.name}/> : <></>}
                </div>
              })}
            </div>
          </Block>
        </Column>

        <Column number="2" numberS="1" modeXl="normal" modeL="full" weightXl="normal" weightL="right" weightM="normal" className={styles['contact__about-us']}>
          <Block className={styles['contact__about-us__block']}>
            <div className={styles['contact__about-us__block__left']}>
              <h2>{$t.contact.reviews[0]}</h2>
              <h2>{$t.contact.reviews[1]}</h2>
              <h2>{$t.contact.reviews[2]}</h2>
            </div>
            <div className={styles['contact__about-us__block__triangule']}><div></div></div>
          </Block>
          <Block className={styles['contact__about-us__block']}>
            <div className={styles['contact__about-us__block__right']}>
              <Carousel>
                <div className={styles['contact__about-us__block__right__card']}>
                  <div><span>“</span></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, lacus at luctus egestas, purus mauris feugiat mi, eget lacinia ligula sem vitae urna. Pellentesque at aliquet velit.</p>
                  <div><strong>Carlo Aranibar</strong> / <strong>LegalStream</strong></div>
                </div>
                <div className={styles['contact__about-us__block__right__card']}>
                  <div><span>“</span></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, lacus at luctus egestas, purus mauris feugiat mi, eget lacinia ligula sem vitae urna. Pellentesque at aliquet velit.</p>
                  <div><strong>Juan Olmos</strong> / <strong>Las Cañadas</strong></div>
                </div>
              </Carousel>
            </div>
          </Block>
        </Column>

        <Column className={styles['contact__mobile-bottom']}>
          <Block>
          </Block>
        </Column>

        <Column>
          <Block>
            <br/><br/><br/><br/>
          </Block>
        </Column>

      </Page>
    </BaseLayout>
  );
}