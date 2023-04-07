import React, { Component } from "react";
import PagesLinks from "@/components/pages-links.js";
import styles from "@/components/side-menu.module.scss";
import onClickOutside from "react-onclickoutside";
import { Column, Block } from "@lkmx/flare-react";
import Image from "next/image";
class SideMenu extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {

    return (
      <Column className={styles.menu} mode="full">
        <Column number="2" className={styles.menu__head} mode="full">
          <Block className={styles.menu__head__close}>
            <a onClick={this.handleClick}>
              <img src="/icons/close-black.svg" alt="close" style={{width: '24px', height: '24px', marginTop: '4px'}}/>
            </a>
          </Block>
          <Block className={styles.menu__head__logo}>
            <img src="/lkmx-logo--black.svg" alt="Logo"/>
          </Block>
        </Column>
        <Block className={styles.menu__body}>
          <PagesLinks className={styles.menu__body__links}/>
          <div className={styles.menu__body__img}>
            <Image fill src="/triangles/menu-triangle.svg" alt="clouds triangle" />
          </div>          
        </Block>
      </Column>
    );

  };

  handleClick() {
    this.props.setShowSideMenu(false);
  }

  handleClickOutside = () => {
    this.props.setShowSideMenu(false);
  }

}
export default onClickOutside(SideMenu);