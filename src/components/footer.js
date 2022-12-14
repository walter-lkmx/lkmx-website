import React from "react";
import styles from "@/components/footer.module.scss";
import Link from "next/link";
import moment from "moment"; 
import { Column, Block } from "@lkmx/flare-react";
import getLang from '@/lang';
import { useRouter } from "next/router";
import siteMetadata from "../meta/siteMetadata";

export default function Footer() {
  const year = moment().year();
  const { locale } = useRouter();
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
                  <li><Link href="/services">{$t.footer.pages.services.items[0]}</Link></li>
                  <li><Link href="/services/discovery">{$t.footer.pages.services.items[1]}</Link></li>
                  <li><Link href="/services/agileDevelopment">{$t.footer.pages.services.items[2]}</Link></li>
                  <li><Link href="/services/agileMaintenance">{$t.footer.pages.services.items[3]}</Link></li>
                </ul>
              </div>
              <div> 
                <h3>{$t.footer.pages.methodology.title}</h3>
                <ul>
                  <li><Link href="/industries">{$t.footer.pages.methodology.items[0]}</Link></li>
                  {/* <li>{$t.footer.pages.methodology.items[1]}</li>
                  <li>{$t.footer.pages.methodology.items[2]}</li>
                  <li>{$t.footer.pages.methodology.items[3]}</li> */}
                </ul>
              </div>
              <div> 
                <h3>{$t.footer.pages.technology.title}</h3>
                <ul>
                  
                  <li><Link href="/technology">{$t.footer.pages.technology.items[0]}</Link></li>
                  {/* <li>{$t.footer.pages.technology.items[1]}</li>
                  <li>{$t.footer.pages.technology.items[2]}</li>
                  <li>{$t.footer.pages.technology.items[3]}</li> */}
                </ul>
              </div>
            </div>
            <div className={styles.footer__top__content__information}>
              <Link href="/">
                <a><img src="/lkmx-logotype--white.svg" alt="Logo" className={styles.footer__top__content__information__logo}/></a>
              </Link>
              <ul>
                <li>
                  <Link href={siteMetadata.instagram} passHref>
                    <a target="_blank"><img src="/icons/social-instagram.svg" alt="Instagram"/></a>
                  </Link>
                </li>
                <li>
                  <Link href={siteMetadata.twitter}>
                    <a target="_blank"><img src="/icons/social-twitter.svg" alt="Twitter"/></a>
                  </Link>
                </li>
                <li>
                  <Link href={siteMetadata.linkedin}>
                    <a target="_blank"><img src="/icons/social-linkedin.svg" alt="Linkedin"/></a>
                  </Link>
                </li>
              </ul>
              <p>{$t.footer.paragraph}</p>
            </div>
          </div>
        </Block>
      </Column>
    </footer>
  );
}