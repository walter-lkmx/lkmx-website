import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import Link from "next/link";
import Head from 'next/head';
import { Block, Column, Page } from "@lkmx/flare-react";
import { getSortedPostsData } from '@/lib/projects'
import styles from "./index.module.scss";

export default function ProjectsPage({ allPostsData }) {
  return (
    <BaseLayout>
      <Head><title>Proyectos</title></Head>
      <Page className={styles.proyects}>
        <Column>
          <Block>
            <h1 className={styles.proyects__title}>Proyectos</h1>
          </Block>
        </Column>
        <Column>
          <Block>
            <div className={styles.proyects__list}>
              {allPostsData.map(item => (
                <Link href={`/projects/${item.id}`} key={item.id}>
                  <a>
                    <h2>{item.title}</h2>
                    <p>{item.headline}</p>
                    <img src="arrow-right--pink.png" alt="arrow-right"/>
                  </a>
                </Link>
              ))}
            </div>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}