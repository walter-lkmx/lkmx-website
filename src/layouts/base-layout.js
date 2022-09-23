import React, { useState } from "react";
import Footer from "@/components/footer.js";
import Header from "@/components/header.js";
import SideMenu from "@/components/side-menu.js";
import styles from "@/layouts/base-layout.module.scss";
import { CSSTransition } from 'react-transition-group';

export default function BaseLayout(props) {
  const [showSideMenu, setShowSideMenu] = useState(false);

  React.useEffect(() => {
    setShowSideMenu(false);
  }, []);

  return (
    <div className={styles.layout}>
      <CSSTransition timeout={400} in={showSideMenu} unmountOnExit
          appear
          classNames={{enter: `animated faster fadeInRight`}}>
          {
            showSideMenu ? <SideMenu setShowSideMenu={setShowSideMenu}/> : <></>
          }
      </CSSTransition>
      <Header className={styles.layout__header} setShowSideMenu={setShowSideMenu}/>
      <main>
        {props.children}
      </main>
      <Footer className={styles.layout__footer}/>
    </div>
  );
}