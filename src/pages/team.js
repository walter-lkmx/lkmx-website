import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import styles from "@/pages/team.module.scss";

import getLang from '@/lang';
import siteMetadata from "../meta/siteMetadata"
import HeadSeo from "../components/HeadSeo"
import { useRouter } from "next/router";
import Image from "next/image";

function getTeamList() {
  let r = require.context('/public/images', false, /\.(png|jpe?g|svg)$/);
  return r.keys().map(n => {
    return {
      fileName: n.replace(/\.\//, ''),
      name: n.replace(/\.\/_\d*_/, '').replace(/\.jpg/, '')
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export default function ContactPage() {
  const { locale } = useRouter();
  const $t = getLang(locale);
  const fallbackBlurImage =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAKAAoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9OP2vv+Cy3wV+H/7fvw08BWWg65qnhf4J6++geNdd0/XJrK3m1PWnSzleHTov9Gvray80+YbgneVYIV4NAH9DWmeOfht4h03T9fsNb05rHXLK01iyY3CAtaanBHe2zEc4JhnQnk896d33f3gfxD/E7wv4avdZ/ax1a88O6Fd6pF8Q5hFqVzpNhPqEe3VIyuy8lt3uEwSSNsgwSSOaQH9I3wshhHwx+HIEUQA8B+EAAI0AAHh/T8ADHAFAAP/Z';
  const pictures = getTeamList();
  pictures.forEach((e, index) => {
    if((index + 1) % 10 == 0) {
      pictures.splice(index, 0, {fileNames: null, name: null});
    }
  });

  return (
    <BaseLayout>
      <HeadSeo
        title={$t.team.title + ' - ' + siteMetadata.companyName}
        description={$t.team.ogDescription}
        ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
        ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
      />

      <Page className={styles.contact}>

        <Column number={2} numberS={1} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full" className={styles.contact__hero}>
          <Block className={styles.contact__hero__block}>
            <div className={styles.contact__hero__left}>
              <h1>{$t.team.headline[0]} <br/>{$t.team.headline[1]}</h1>
              <p>{$t.team.hero[0]}<br/> <strong>{$t.team.hero[1]}</strong> {$t.team.hero[2]} <strong className={styles.contact__hero__left__pink}>{$t.team.hero[3]}</strong> {$t.team.hero[4]} <br/>{$t.team.hero[5]} <br/>{$t.team.hero[6]} <br/>{$t.team.hero[7]} <br/>{$t.team.hero[8]}</p>
            </div>
          </Block>
          <Block className={styles['contact__hero__block-right']}>
            <div className={styles.contact__hero__right}>
              <div><div></div></div>
              <div className={styles.contact__hero__right__koi}>
                <Image
                fill
                priority
                src="/koi-swimming.svg" 
                alt="koi-swimming" 
                className={styles.contact__hero__right__koi__img}
                />
              </div>
              <div className={styles.contact__hero__right__container}>
              <Image fill src="/triangles/triangle-code--pink--right.svg" alt="triangle" className={styles.contact__hero__right__triangle}/>
              <Image fill src="/triangles/triangle-code--pink--right--small.svg" alt="triangle" className={styles['contact__hero__right__triangle-mobile']}/>
              </div>
              
              <div className={styles.contact__hero__right__clouds}>
                <Image
                  fill
                  priority={true}                  
                  src="/clouds.svg" alt="clouds"
                />
              </div>
              <div alt="clouds--small" className={styles['contact__hero__right__clouds-mobile']}></div>
            </div>
          </Block>
        </Column>
        
        <Column>
          <Block className={styles.contact__banner}>
            <div className={styles.contact__banner__content}>
              <h3>{$t.team.banner.title[0]} <strong>{$t.team.banner.title[1]}</strong>, <strong>{$t.team.banner.title[2]}</strong>, <strong>{$t.team.banner.title[3]}</strong> {$t.team.banner.title[4]}</h3>
              <p>{$t.team.banner.text}</p>
            </div>
          </Block>
        </Column>

        <Column modeXl="normal" modeL="full" modeM="full">
          <Block className={styles.contact__team}>
            <div className={styles.contact__team__content}>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h2>{$t.team.analysis.title}</h2>
                  <p>{$t.team.analysis.text}</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h2>{$t.team.design.title}</h2>
                  <p>{$t.team.design.text}</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h2>{$t.team.development.title}</h2>
                  <p>{$t.team.development.text}</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h2>{$t.team.quality.title}</h2>
                  <p>{$t.team.quality.text}</p>
                </div>
              </div>
              {pictures.map((picture, index) => {
                return <div key={index} className={`${picture.fileName ? styles.contact__team__content__image : styles['contact__team__content__card-empty']}`}>
                  {picture.fileName ? 
                  <Image 
                  fill 
                  placeholder="blur"
                  blurDataURL={fallbackBlurImage}
                  src={`/images/${picture.fileName}`} 
                  alt={picture.name}
                  /> : <></>}
                </div>
              })}
            </div>
          </Block>
        </Column>

        {/* <Column number="2" numberS="1" modeXl="normal" modeL="full" weightXl="normal" weightL="right" weightM="normal" className={styles['contact__about-us']}>
          <Block className={styles['contact__about-us__block']}>
            <div className={styles['contact__about-us__block__left']}>
              <h2>{$t.team.reviews[0]}</h2>
              <h2>{$t.team.reviews[1]}</h2>
              <h2>{$t.team.reviews[2]}</h2>
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
        </Column> */}

        {/* <Column className={styles['contact__mobile-bottom']}>
          <Block>
          </Block>
        </Column>

        <Column>
          <Block>
            <br/><br/><br/><br/>
          </Block>
        </Column> */}

      </Page>
    </BaseLayout>
  );
}