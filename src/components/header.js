import React from "react";
import Column from "@flare-react/column";
import Block from "@flare-react/block";
import styles from "@/components/header.module.scss";
import PagesLinks from "@/components/pages-links.js";
import Link from "next/link";

export default function Header(props) {

  return (
    <header className={styles.header}>
      <Column>
        <Block>
          <div className={styles.header__content}>
            <div className={styles.header__content__logo}>
              <a onClick={handleClick} className={styles.header__content__logo__menu}>
                <img src="/icon-hamburguer.svg" alt="Logo" style={{width: '24px', height: '24px'}}/>
              </a>
              <Link href="/">
                <img src="/logo.png" alt="Logo" style={{width: '121px', height: '50px', cursor: "pointer"}}/>
              </Link>
            </div>
            <div className={styles.header__content__links}>
              <PagesLinks className={styles.header__content__links__pages}/>
            </div>
          </div>
        </Block>
      </Column>
    </header>
  );

  function handleClick() {
    props.setShowMobileMenu(true);
  }

}