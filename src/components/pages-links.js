import React from "react";
import Link from "next/link";
import styles from "@/components/pages-links.module.scss";
import getLang from '@/lang';
import { useRouter } from "next/router";

export default function PagesLinks(props) {

  const lang = {
    es: 'ESP',
    en: 'ENG'
  }

  const { locale, locales, asPath } = useRouter();
  const $t = getLang(locale);

  return (
    <div className={`${styles.headerNavigation}`}>
      <nav className={`${styles.links} ${props.className} ${props.whiteColor ? styles['white-color'] : ''}`}>
        <Link href="/services">{$t.header.module1}</Link>
        {/* <Link href="/methodology">{$t.header.module2}</Link> */}
        <Link href="/industries">{$t.header.module6}</Link>
        <Link href="/technology">{$t.header.module3}</Link>
        {/* <Link href="/projects">{$t.header.module4}</Link> */}
        <Link href="/team">{$t.header.module5}</Link>
      </nav>
      <div className={`${styles.actions}`}>
        <img src="/icons/icon-globe.svg" alt="Language"/>
        {locales.map((l, i) => {
            return (
              <span key={i} className={l === locale ? styles.active : ""}>
                <Link href={asPath} locale={l}>
                  {lang[l]}
                </Link>
              </span>
            );
        })}
      </div>
    </div>
  );
}