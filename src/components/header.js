import React, { useEffect } from "react";
import { Column, Block } from "@lkmx/flare-react";
import styles from "@/components/header.module.scss";
import PagesLinks from "@/components/pages-links.js";
import Link from "next/link";
import { ConfigContext } from "@/providers/config-provider";
import getLang from '@/lang';

export default function Header(props) {
  const [config, setConfig] = React.useContext(ConfigContext);

  return (
    <header className={styles.header}>
      <Column>
        <Block>
          <div className={styles.header__content}>
            <div className={styles.header__content__logo}>
              <Link href="/">
                <a><img src="/logo.png" alt="Logo"/></a>
              </Link>
            </div>
            <div className={styles.header__content__links}>
              <PagesLinks className={styles.header__content__links__pages}/>
            </div>
            <a onClick={handleClick} className={styles.header__content__menu}>
              <img src="/icon-hamburguer.svg" alt="Logo" style={{width: '24px', height: '24px'}}/>
            </a>
          </div>
        </Block>
      </Column>
    </header>
  );

  function handleClick() {
    props.setShowSideMenu(true);
  }

}