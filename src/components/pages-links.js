import React from "react";
import Link from "next/link";
import sytles from "@/components/pages-links.module.scss";

export default function PagesLinks(props) {
  return (
    <div className={`${sytles.links} ${props.className} ${props.whiteColor ? sytles['white-color'] : ''}`}>
      <Link href="/services">Servicios</Link>
      <Link href="/methodology">Metodología</Link>
      <Link href="/technology">Tecnología</Link>
      <Link href="/projects">Trabajo</Link>
      <Link href="/contact">Contacto</Link>
    </div>
  );
}