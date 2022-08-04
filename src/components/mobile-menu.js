import React from "react";
import Image from "next/image";
import Column from "@flare-react/column";
import Block from "@flare-react/block";

import PagesLinks from "@/components/pages-links.js";
import styles from "@/components/mobile-menu.module.scss";

export default function MobileMenu(props) {
  return (
    <Column className={`${styles.menu} ${props.showMobileMenu ? styles.show : styles.hide}`}>
      <Column numberS="2" className={styles.menu__head}>
        <Block>
          <a onClick={handleClick}>
            <Image src="/icon-close.png" alt="Logo" width="24" height="24"/>
          </a>
        </Block>
        <Block>
          <Image src="/simple-logo.png" alt="Logo" width="42.86" height="50"/>
        </Block>
      </Column>
      <Block className={styles.menu__body}>
        <PagesLinks className={styles.menu__body__links}/>
        <div className={styles.menu__triangle}><div></div></div>
      </Block>
    </Column>
  );

  function handleClick() {
    props.setShowMobileMenu(false);
  }

}