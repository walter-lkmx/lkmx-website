import React from "react";
import Link from "next/link";
import sytles from "@/components/pages-links.module.scss";
import { ConfigContext } from "@/providers/config-provider";
import getLang from '@/lang';

export default function PagesLinks(props) {
  const { locale } = React.useContext(ConfigContext);
  const $t = getLang(locale);

  return (
    <div className={`${sytles.links} ${props.className} ${props.whiteColor ? sytles['white-color'] : ''}`}>
      <Link href="/services">{$t.header.module1}</Link>
      <Link href="/methodology">{$t.header.module2}</Link>
      <Link href="/technology">{$t.header.module3}</Link>
      <Link href="/projects">{$t.header.module4}</Link>
      <Link href="/about-us">{$t.header.module5}</Link>
    </div>
  );
}