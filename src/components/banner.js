import React from "react";
import Block from "@flare-react/block";
import Column from "@flare-react/column";
import styles from "@/components/banner.module.scss";

export default function Banner(props) {

  return (
    <div className={styles.banner}>
      <img src="/bleed-left.png" alt="bleed-left" className={styles['banner__bleed-left']}/>
      <Column modeXl="slim" modeS="full">
        <Block>
          <div className={styles.banner__content}>
            {props.children}
          </div>
        </Block>
      </Column>
      <img src="/bleed-right.png" alt="bleed-right" className={styles['banner__bleed-right']}/>
    </div>
  );

}