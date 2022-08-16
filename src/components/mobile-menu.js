import React from "react";
import Column from "@flare-react/column";
import Block from "@flare-react/block";

import PagesLinks from "@/components/pages-links.js";
import styles from "@/components/mobile-menu.module.scss";

export default function MobileMenu(props) {
  return (
    <Column className={`${styles.menu} ${props.showMobileMenu ? styles.show : styles.hide}`}>
      <Column numberS="2" className={styles.menu__head}>
        <Block className={styles.menu__head__block}>
          <a onClick={handleClick}>
            <img src="/icon-close.png" alt="Logo" style={{width: '24px', height: '24px'}}/>
          </a>
        </Block>
        <Block className={styles.menu__head__block}>
          <img src="/simple-logo.png" alt="Logo" style={{width: "42.86", height: "50px"}}/>
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