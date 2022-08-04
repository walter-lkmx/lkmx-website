import React from "react";
import Image from "next/image";
import Column from "@flare-react/column";
import styles from "@/components/header.module.scss";
import PagesLinks from "@/components/pages-links.js";

export default function Header(props) {

  return (
    <header className={styles.header}>
      <Column numberM="2" numberL="2" className={styles.header__content}>
        <div className={styles.header__content__logo}>
          <a onClick={handleClick}>
            <Image src="/icon-menu.png" alt="Logo" width="24" height="24"/>
          </a>
          <Image src="/logo.png" alt="Logo" width="121" height="50"/>
        </div>
        <PagesLinks className={styles.header__content__links}/>
      </Column>
    </header>
  );

  function handleClick() {
    props.setShowMobileMenu(true);
  }

}