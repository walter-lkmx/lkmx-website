import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import styles from "components/header.module.scss"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <Image src="/logo.png" alt="Logo" width="121" height="50"/>
        </div>
        <div className={styles.header__content__links}>
          <Link href="/services">Servicios</Link>
          <Link href="/methodology">Metodología</Link>
          <Link href="/technology">Tencnología</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      </div>
    </header>
  );
}