import React from "react";
import Block from "@flare-react/block";
import Column from "@flare-react/column";
import styles from "@/components/footer.module.scss";
import PagesLinks from "@/components/pages-links.js";
import Link from "next/link";

import moment from "moment"; 

export default function Footer() {
  const year = moment().year();

  return (
    <footer className={styles.footer}>
      <Column className={styles.footer__top}>
        <Block>
          <div className={styles.footer__top__content}>
            <div className={styles.footer__top__content__pages}>
              <div>
                <h3>SERVICIOS</h3>
                <ul>
                  <li>Nuestros Servicios</li>
                  <li>Discovery</li>
                  <li>Agile Development</li>
                  <li>Agile Maintenance</li>
                </ul>
              </div>
              <div> 
                <h3>METODOLOGÍA</h3>
                <ul>
                  <li>Ciclo de Vida</li>
                  <li>MAAD</li>
                  <li>Flare</li>
                  <li>Ontología</li>
                </ul>
              </div>
              <div> 
                <h3>TECNOLOGÍA</h3>
                <ul>
                  <li>Lenguajes</li>
                  <li>Frameworks</li>
                  <li>Plataformas</li>
                  <li>Herramientas</li>
                </ul>
              </div>
            </div>
            <div className={styles.footer__top__content__information}>
              <img src="/logo--white.png" alt="Logo"/>
              <ul>
                <li>
                  <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} passHref>
                    <a target="_blank"><img src="/instagram.svg" alt="Instagram"/></a>
                  </Link>
                </li>
                <li>
                  <Link href={process.env.NEXT_PUBLIC_TWITTER_URL}>
                    <a target="_blank"><img src="/twitter.svg" alt="Twitter"/></a>
                  </Link>
                </li>
                <li>
                  <Link href={process.env.NEXT_PUBLIC_LINKEDIN_URL}>
                    <a target="_blank"><img src="/linkedin.svg" alt="Linkedin"/></a>
                  </Link>
                </li>
              </ul>
              <p>Prestamos servicios de ingeniería de software con nuestra sede en Ensenada, Baja California, México desde enero de 2014.</p>
            </div>
          </div>
        </Block>
      </Column>
      <Column className={styles.footer__bottom}>
        <div className={styles.footer__bottom__sand}></div>
        <Block>
          <span>© LKMX Software Development {year}.</span>
        </Block>
      </Column>
    </footer>
  );
}