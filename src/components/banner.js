import React from "react";
import styles from "@/components/banner.module.scss";
import { Block, Column } from "@lkmx/flare-react";

export default function Banner(props) {

  return (
    <div className={styles.banner}>
      <img src="/wave.png" alt="wave" className={styles['banner__wave']}/>
      <Column modeXl="slim" modeS="full">
        <Block>
          <div className={styles.banner__content}>
            {props.children}
          </div>
        </Block>
      </Column>
      <img src="/triangle/blue/triangle.png" alt="triangle" className={styles['banner__triangle-right']}/>
      <img src="/triangle/blue/triangle--medium.png" alt="triangle" className={styles['banner__triangle-right--medium']}/>
      <img src="/triangle/blue/triangle--small.png" alt="triangle" className={styles['banner__triangle-right--small']}/>
    </div>
  );

}