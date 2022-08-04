import React from "react";
import Block from "@flare-react/block";
import Column from "@flare-react/column";
import Image from "next/image";
import styles from "@/components/footer.module.scss";
import PagesLinks from "@/components/pages-links.js";
import moment from "moment"; 

export default function Footer() {
  const year = moment().year();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Column numberS="1" numberM="2" numberL="2" className={styles.footer__content__column}>
          <Block>
            <Image src="/logo--white.png" alt="Logo" width="247" height="99"/>
          </Block>
          <Block className={styles.footer__content__column__block}>
            <PagesLinks className={styles.footer__content__column__block__links} whiteColor={true}/>
          </Block>
        </Column>
        <Column className={styles.footer__content__column}>
          <Block className={styles.footer__content__column__lkmx}>
            <span>© LKMX Software Development {year}.</span>
          </Block>
        </Column>
      </div>
      <div className={styles.footer__sand}></div>
    </footer>
  );
}