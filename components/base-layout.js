import React from "react";
import Footer from 'components/footer.js'
import Header from 'components/header.js'
import styles from "components/base-layout.module.scss"

export default function BaseLayout(props) {

  return (
    <div className={styles.layout}>
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  );
}