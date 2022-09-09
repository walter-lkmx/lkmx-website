import React, { useState } from "react";
import Footer from "@/components/footer.js";
import Header from "@/components/header.js";
import MobileMenu from "@/components/mobile-menu.js";
import styles from "@/layouts/base-layout.module.scss";

export default function BaseLayout(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  React.useEffect(() => {
    setShowMobileMenu(false);
  }, []);

  return (
    <div className={styles.layout}>
      <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu}/>
      <Header className={styles.layout__header} setShowMobileMenu={setShowMobileMenu}/>
      <main>
        {props.children}
      </main>
      <Footer className={styles.layout__footer}/>
    </div>
  );
}