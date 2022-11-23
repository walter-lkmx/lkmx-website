import React from "react";
import Link from "next/link";
import styles from "@/components/pages-links.module.scss";
import { ConfigContext } from "@/providers/config-provider";
import getLang from '@/lang';

export default function PagesLinks(props) {
  const { locale, updateLang } = React.useContext(ConfigContext);
  const $t = getLang(locale);
  
  function localeToEsp() {
    updateLang('es-ES')
  }
  
  function localeToEng() {
    updateLang('en-US')
  }

  return (
    <div className={`${styles.headerNavigation}`}>
      <nav className={`${styles.links} ${props.className} ${props.whiteColor ? styles['white-color'] : ''}`}>
        <Link href="/services">{$t.header.module1}</Link>
        <Link href="/methodology">{$t.header.module2}</Link>
        <Link href="/technology">{$t.header.module3}</Link>
        <Link href="/projects">{$t.header.module4}</Link>
        <Link href="/team">{$t.header.module5}</Link>
      </nav>
      <div className={`${styles.actions}`}>
        <img src="/icons/icon-globe.svg" alt="Language" />
        <button className={`${locale === 'es-ES' ? `${styles.active}` : ''}`} onClick={localeToEsp}>ESP</button>
        <button className={`${locale === 'en-US' ? `${styles.active}` : ''}`} onClick={localeToEng}>ENG</button>
      </div>
    </div>
  );
}