import React from "react";
import styles from "@/components/banner.module.scss";
import { Block, Column } from "@lkmx/flare-react";
import Image from "next/image";

export default function Banner(props) {

  return (
    <div className={styles.banner}>
      <div className={styles.banner__container}>
      <Image fill src="/triangles/triangle-waves--left.svg" alt="wave" className={styles['banner__wave']}/>
      </div>
      <Column modeXl="slim" modeS="full">
        <Block>
          <div className={styles.banner__content}>
            {props.children}
          </div>
        </Block>
      </Column>
      <div className={styles.banner__rightContainer}>
        <div className={styles.banner__right}>
          <Image fill src="/triangles/triangle-code--blue--right.svg" alt="triangle"/>
        </div>
       
      </div>
     
    </div>
  );

}