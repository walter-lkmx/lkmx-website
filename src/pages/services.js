import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import Page from "@flare-react/page";
import Block from "@flare-react/block";
import Column from "@flare-react/column";
import PhasesSvg from '@/assets/phases.svg';
import PhasesMobileSvg from '@/assets/phases--mobile.svg';
import Banner from '@/components/banner.js';
import styles from "./services.module.scss";

export default function ServicesPage() {
  return (
    <BaseLayout>
      <Page className={styles.page}>

        <Column number={2} numberS={1} className={styles.page__services} weight="right" weightS="Normal" modeXl="normal" modeL="full" modeM="full">
          <Block>
            <div className={styles.page__services__content}>
              <h2>SERVICIOS</h2>
              <p>Como una <strong>ALTERNATIVA REAL</strong> al <strong>STAFF-AUGMENTATION</strong>, diseñamos servicios para el desarrollo de software a la medida para compañías con necesidades de tecnología de cualquier grado de complejidad y líneas de tiempo de cualquier demanda.</p>
            </div>
          </Block>
          <Block className={styles.page__services__dragon}>
            <div className={styles.page__services__dragon__content}>
              <div>
                <div className={styles.page__services__dragon__content__elipse}></div>
                <img src="/dragon.png" className={styles.page__services__dragon__content__image}/>
              </div>
            </div>
          </Block>
        </Column>

        <Banner>
          <p>
            Nos especializamos en la construcción de</p>
            <h3>SOLUCIONES DE SOFTWARE DESDE CERO,</h3>
            <p>
            por lo que nuestros servicios cubren todas las fases del ciclo de vida del software.
          </p>
          <p>Nuestras metodologías brindan la mayor flexibilidad posible mientras mantienen bajo control los entregables, plazos de tiempo y costos.</p>
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

        <Column numberXl={3} numberL={2} numberM={2} numberS={1} modeS="full" className={styles.page__phases}>
          <Block>
            <div className={styles.page__phases__content}>
              <h4>DISCOVERY</h4>
              <p>Nuestras soluciones comienzan mediante el estudio previo de los retos y los objetivos por cumplir. Este será el punto de inicio para el éxito del proyecto.</p>
              <img src="/arrow-right--pink.png" alt="arrow"/>
            </div>
          </Block>
          <Block>
            <div className={styles.page__phases__content}>
              <h4>AGILE<br/>DEVELOPMENT</h4>
              <p>Con base en lo que descubrimos, creamos increíbles experiencias web y móviles que involucran manejo de datos, big data, blockchain e inteligencia artificial.</p>
              <img src="/arrow-right--pink.png" alt="arrow"/>
            </div>
          </Block>
          <Block>
            <div className={styles.page__phases__content}>
              <h4>AGILE MAINTENANCE, SCOPE DEV. & CONTINUOUS SUPPORT</h4>
              <p>Al final del desarrollo ofrecemos servicios de mantenimiento y soporte para una estabilización y transferencia exitosa de la plataforma.</p>
              <img src="/arrow-right--pink.png" alt="arrow"/>
            </div>
          </Block>
        </Column>

      </Page>
    </BaseLayout>
  );
}