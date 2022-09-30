import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import Page from "@flare-react/page";
import Block from "@flare-react/block";
import Column from "@flare-react/column";
import styles from "./contact.module.scss";
import Carousel from "@/components/carousel.js"

function getTeamList() {
  let r = require.context('/public/images', false, /\.(png|jpe?g|svg)$/);
  return r.keys().map(n => {
    return {
      fileName: n.replace(/\.\//, ''),
      name: n.replace(/\.\/_\d*_/, '').replace(/\.jpg/, '')
    }
  }).sort((a, b) => a.name.localeCompare(b.name));
}

export default function ContactPage() {
  const pictures = getTeamList();
  pictures.forEach((e, index) => {
    if((index + 1) % 10 == 0) {
      pictures.splice(index, 0, {fileNames: null, name: null});
    }
  });

  return (
    <BaseLayout>
      <Page className={styles.contact}>

        <Column number={2} numberS={1} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full" className={styles.contact__hero}>
          <Block>
            <div className={styles.contact__hero__left}>
              <h2>NUESTRO EQUIPO</h2>
              <p>Somos una combinación de <strong>creativos</strong> y <strong>expertos</strong> en tecnología. Conectamos nuestras habilidades para construir soluciones de software robustas, flexibles, escalables y seguras.</p>
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
              <h3>UNA SUMA DE <strong>INGENIEROS</strong>, <strong>ARTISTAS</strong>, <strong>ANALISTAS</strong> Y VISIONARIOS COMPONEN NUESTRO EQUIPO.</h3>
              <p>Divididos por áreas, pero interconectados mediante bien definidos procesos, integramos un equipo de ingeniería robusto capaz de operar a velocidades escalofriantes.</p>
            </div>
          </Block>
        </Column>

        <Column modeXl="normal" modeL="full" modeM="full">
          <Block className={styles.contact__team}>
            <div className={styles.contact__team__content}>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>ANÁLISIS</h3>
                  <p>Se encargan de orquestar la metodología de captura, analizar los requerimientos y comunicar a las áreas de producción de la empresa.</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>DISEÑO</h3>
                  <p>Crean y estandarizan artefactos digitales apegados a buenas prácticas que colaboran en la metodología de captura y análisis de requerimientos.</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>DESARROLLO</h3>
                  <p>Aplican técnicas de ingeniería de software para crear tecnología avanzada de manera efectiva y eficiente.</p>
                </div>
              </div>
              <div className={styles.contact__team__content__card}>
                <div>
                  <h3>CALIDAD</h3>
                  <p>Se aseguran de que las características del software cumplan las especificaciones definidas o superen las expectativas.</p>
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
              <h2>QUÉ DICEN</h2>
              <h2>NUESTROS SOCIOS</h2>
              <h2>DE NOSOTROS.</h2>
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

      </Page>
    </BaseLayout>
  );
}