import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import Page from "@flare-react/page";
import Block from "@flare-react/block";
import Column from "@flare-react/column";
import PhasesSvg from '@/assets/phases.svg';
import PhasesMobileSvg from '@/assets/phases--mobile.svg';
import ElipseSvg from '@/assets/elipse.svg';
import DragonSvg from '@/assets/dragon.svg';
import ElipseMobileSvg from '@/assets/elipse--mobile.svg';
import DragonMobileSvg from '@/assets/dragon--mobile.svg';
import styles from "./services.module.scss";

export default function ServicesPage() {
  return (
    <BaseLayout>
      <Page className={styles.page}>
        <Column number={2} numberS={1} className={styles.page__services} weight="right" weightS="Normal" modeS="full">
          <Block className={styles.page__services__block}>
            <h2>SERVICIOS</h2>
            <p>Como una <strong>ALTERNATIVA REAL</strong> al <strong>STAFF-AUGMENTATION</strong>, diseñamos servicios para el desarrollo de software a la medida para compañías con necesidades de tecnología de cualquier grado de complejidad y líneas de tiempo de cualquier demanda.</p>
          </Block>
          <div>
            <div className={styles.page__services__dragon}>
              <ElipseSvg className={styles.page__services__dragon__elipse}/>
              <DragonSvg className={styles.page__services__dragon__image}/>
              <ElipseMobileSvg className={styles['page__services__dragon__elipse--mobile']}/>
              <DragonMobileSvg className={styles['page__services__dragon__image--mobile']}/>
            </div>
          </div>
        </Column>
        <div className={styles.page__content}>
          <img src="/bleed-left.png" alt="bleed-left" className={styles['page__content__bleed-left']}/>
          <div className={styles.page__content__info}>
            <p>
              Nos especializamos en la construcción de<br/>
              <strong>Soluciones de Software desde cero,</strong><br/> 
              por lo que nuestros servicios cubren todas las fases del ciclo de vida del software.<br/>
              Nuestras metodologías brindan la mayor flexibilidad posible mientras mantienen bajo control los entregables, plazos de tiempo y costos.
            </p>
          </div>
          <img src="/bleed-right.png" alt="bleed-right" className={styles['page__content__bleed-right']}/>
        </div>
        <Column mode="full">
          <Block>
            <div className={styles['page__phases-links']}>
              <PhasesSvg className={styles['page__phases-links__svg-desktop']}/>
              <PhasesMobileSvg className={styles['page__phases-links__svg-mobile']}/>
              <div className={styles['page__phases-links__arrow']}>
                <div></div>
              </div>
            </div>
          </Block>
        </Column>
        <Column number={3} numberM={2} numberS={1} modeS="full" className={styles.page__phases}>
          <Block>
            <div className={styles.page__phases__content}>
              <h3>Discovery</h3>
              <p>Nuestras soluciones comienzan mediante el estudio previo de los retos y los objetivos por cumplir. Este será el punto de inicio para el éxito del proyecto.</p>
              <img src="/arrow-right--pink.png" alt="arrow"/>
            </div>
          </Block>
          <Block>
            <div className={styles.page__phases__content}>
              <h3>Agile<br/>Development</h3>
              <p>Con base en lo que descubrimos, creamos increíbles experiencias web y móviles que involucran manejo de datos, big data, blockchain e inteligencia artificial.</p>
              <img src="/arrow-right--pink.png" alt="arrow"/>
            </div>
          </Block>
          <Block>
            <div className={styles.page__phases__content}>
              <h3>Agile Maintenance, Scope dev. & continuous Support</h3>
              <p>Al final del desarrollo ofrecemos servicios de mantenimiento y soporte para una estabilización y transferencia exitosa de la plataforma.</p>
              <img src="/arrow-right--pink.png" alt="arrow"/>
            </div>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}