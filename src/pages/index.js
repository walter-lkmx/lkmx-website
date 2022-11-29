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
                <h2>CONVERTIMOS<br/>TUS IDEAS EN REALIDAD</h2>
              <p>Nuestro equipo de expertos conceptualiza, diseña y desarrolla las
                más complejas soluciones de software, liderando la optimización 
                digital de compañías en industrias clave alrededor del mundo.
              </p>
            </div>
            
          </Block>
        </Column>
        <Column className={styles.index__second} number="2" mode="full">
          <Block className={styles.index__second__block}>
            <div className={styles.index__second__block__left}>
              <p>
              Somos una <strong>ALTERNATIVA REAL</strong> al <strong>STAFF-AUGMENTATION</strong>. Diseñamos servicios para el desarrollo de software a la medida. 
              Con ellos construimos tecnología de cualquier grado de complejidad y líneas de tiempo con cualquier demanda.
              </p>
              <div className={styles.index__second__block__left__btn}><Link href="/services" >Descubre Cómo</Link></div>
              
            </div>            
          </Block>
          <Block className={styles.index__second__block}>
          <div className={styles.index__second__block__right}>
              <img src="/circle--pink.svg" className={styles.index__second__block__right__circle} alt="circle"/>
              <img src="/dragon.svg" className={styles.index__second__block__right__dragon} alt="dragon"/>
            </div>
          </Block>
        </Column>
        <Column className={styles.index__technology} number="1" mode="full">
          <Block className={styles.index__technology__block}>
            <div className={styles.index__technology__block__title}>
              <p>Usamos la tecnología open source más avanzada y somos <strong>EXPERTOS</strong> en ella.</p>
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
            <div className={styles.index__technology__block__btn}><Link href="/technology" >Descubre nuestras tecnologias</Link></div>
            
          </Block>
        </Column>
        <Column className={styles.index__team}>
          <Block className={styles.index__team__block}>
              <div className={styles.index__team__block__content}>
                <img src="/koi-swimming.svg" className={styles.index__team__block__content__koi} alt="koi"/>
                <div className={styles.index__team__block__content__text}>
                  <p>Ingenieros, artistas, analistas y visionarios componen <strong>NUESTRO EQUIPO</strong></p>
                  <div className={styles.index__team__block__content__btn}><Link href="/team">Conócenos</Link></div> 
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
        <Column className={styles.index__partners}>
          <Block className={styles.index__partners__block}>
            <img className={styles.index__partners__block__leftTriangle} src="/triangles/triangle-waves--left.svg" alt="triangle-waves"/>
            <img className={styles.index__partners__block__rightTriangle} src="/triangles/triangle-waves--right.svg" alt="triangle-waves"/>
            <div className={styles.index__partners__block__content}>
              <p>Somos <strong>socios estratégicos</strong> de <strong>compañías alrededor del mundo</strong>.</p>
              <div className={styles.index__partners__block__content__btn}> <Link href="/projects" >Explora</Link></div> 
            </div>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}