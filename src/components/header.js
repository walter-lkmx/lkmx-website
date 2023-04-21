import React, { useEffect, useState } from "react";
import { Column, Block } from "@lkmx/flare-react";
import styles from "@/components/header.module.scss";
import PagesLinks from "@/components/pages-links.js";
import Link from "next/link";
import Image from "next/image"

export default function Header(props) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(currentScrollPos <= 0 || currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={styles.header}  style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <Column mode="normal" modeM="full">
        <Block>
          <div className={styles.header__content}>
            <div className={styles.header__content__logo}>
              <Link href="/">
                <div className={styles.header__content__logo__container}>
                <Image fill src="/lkmx-logotype-black.svg" alt="Logo"/>
                </div>
                
              </Link>
            </div>
            <div className={styles.header__content__links}>
              <PagesLinks className={styles.header__content__links__pages}/>
            </div>
            <button onClick={handleClick} className={styles.header__content__menu}>
              <Image src="/icons/hamburger-black.svg" alt="Menu" height="24" width="24"/>
            </button>
          </div>
        </Block>
      </Column>
    </header>
  );

  function handleClick() {
    props.setShowSideMenu(true);
  }

}