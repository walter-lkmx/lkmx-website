import React from "react";
import styles from "@/components/footer.module.scss";
import Link from "next/link";
import moment from "moment"; 
import { Column, Block } from "@lkmx/flare-react";
import { ConfigContext } from "@/providers/config-provider";
import getLang from '@/lang';

export default function Footer() {
  const year = moment().year();
  const { locale } = React.useContext(ConfigContext);
  const $t = getLang(locale);

  return (
    <footer className={styles.footer}>
      <Column className={styles.footer__top}>
        <Block>
          <div className={styles.footer__top__content}>
            <div className={styles.footer__top__content__pages}>
              <div>
                <h3>{$t.footer.pages.services.title}</h3>
                <ul>
                  <li>{$t.footer.pages.services.items[0]}</li>
                  <li>{$t.footer.pages.services.items[1]}</li>
                  <li>{$t.footer.pages.services.items[2]}</li>
                  <li>{$t.footer.pages.services.items[3]}</li>
                </ul>
              </div>
              <div> 
                <h3>{$t.footer.pages.methodology.title}</h3>
                <ul>
                  <li>{$t.footer.pages.methodology.items[0]}</li>
                  <li>{$t.footer.pages.methodology.items[1]}</li>
                  <li>{$t.footer.pages.methodology.items[2]}</li>
                  <li>{$t.footer.pages.methodology.items[3]}</li>
                </ul>
              </div>
              <div> 
                <h3>{$t.footer.pages.technology.title}</h3>
                <ul>
                  <li>{$t.footer.pages.technology.items[0]}</li>
                  <li>{$t.footer.pages.technology.items[1]}</li>
                  <li>{$t.footer.pages.technology.items[2]}</li>
                  <li>{$t.footer.pages.technology.items[3]}</li>
                </ul>
              </div>
            </div>
            <div className={styles.footer__top__content__information}>
              <Link href="/">
                <a><img src="/logo--white.png" alt="Logo" className={styles.footer__top__content__information__logo}/></a>
              </Link>
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
              <p>{$t.footer.paragraph}</p>
            </div>
          </div>
        </Block>
      </Column>
      <Column className={styles.footer__bottom} modeXxl="full" modeXxxl="normal">
        <div className={styles.footer__bottom__sand}></div>
        <Block>
          <div className={styles.footer__bottom__name}>© LKMX Software Development {year}.</div>
        </Block>
      </Column>
    </footer>
  );
}