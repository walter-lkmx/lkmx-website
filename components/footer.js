import React from "react";
import Link from 'next/link'
import Block from '@flare-react/block';
import Column from '@flare-react/column';
import Image from 'next/image';
import styles from "components/footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Column numberS="1" numberM="2" numberL="2" className={styles.footer__content__column}>
          <Block>
            <Image src="/logo--white.png" alt="Logo" width="247" height="99"/>
          </Block>
          <Block className={styles.footer__content__column__block}>
            <div className={styles.footer__content__column__block__links}>
              <Link href="/services">Servicios</Link>
              <Link href="/methodology">Metodología</Link>
              <Link href="/technology">Tencnología</Link>
              <Link href="/contact">Contacto</Link>
            </div>
          </Block>
        </Column>
        <Column className={styles.footer__content__column}>
          <Block className={styles.footer__content__column__lkmx}>
            <span>© LKMX Software Development 2022.</span>
          </Block>
        </Column>
      </div>
      <div className={styles.footer__sand}></div>
    </footer>
  );
}