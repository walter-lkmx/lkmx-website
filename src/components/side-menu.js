import React, { Component } from "react";
import Column from "@flare-react/column";
import Block from "@flare-react/block";
import PagesLinks from "@/components/pages-links.js";
import styles from "@/components/side-menu.module.scss";
import onClickOutside from "react-onclickoutside";

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
              <img src="/icon-close.png" alt="close" style={{width: '24px', height: '24px'}}/>
            </a>
          </Block>
          <Block className={styles.menu__head__logo}>
            <img src="/simple-logo.png" alt="Logo"/>
          </Block>
        </Column>
        <Block className={styles.menu__body}>
          <PagesLinks className={styles.menu__body__links}/>
          <img src="/mask-group.png" className={styles.menu__body__img}/>
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