import React from "react";
import styles from "@/components/banner.module.scss";
import { Block, Column } from "@lkmx/flare-react";

export default function Banner(props) {

  return (
    <div className={styles.banner}>
      <img src="/triangles/triangle-waves--left.svg" alt="wave" className={styles['banner__wave']}/>
      <Column modeXl="slim" modeS="full">
        <Block>
          <div className={styles.banner__content}>
            {props.children}
          </div>
        </Block>
      </Column>
      <img src="/triangles/triangle-code--blue--right.svg" alt="triangle" className={styles['banner__triangle-right']}/>
      <img src="/triangles/triangle-code--blue--right--small.svg" alt="triangle" className={styles['banner__triangle-right--medium']}/>
      <img src="/triangles/triangle-code--blue--right--small.svg" alt="triangle" className={styles['banner__triangle-right--small']}/>
    </div>
  );

}