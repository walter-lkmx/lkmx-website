import React from 'react';
import BaseLayout from '@/layouts/base-layout.js';
import Link from 'next/link';
import Head from 'next/head';
import { Block, Column, Page } from '@lkmx/flare-react';
import { getSortedProjectsData } from '@/lib/projects';
import getLang from '@/lang';
import styles from './index.module.scss';
import siteMetadata from '../../meta/siteMetadata';
import HeadSeo from '../../components/HeadSeo';
import { useRouter } from 'next/router';

// const Duration = (props) => {
//   const duration = `${props.item.startDate}${
//     props.item.endDate ? '-' + props.item.endDate : ''
//   }`;
//   return (
//     <h3>
//       {duration} <br />
//       {props.item.aditionalDateInfo && props.item.aditionalDateInfo}
//     </h3>
//   );
// };

export default function WorkPage({ allProjectsData }) {
  const { locale } = useRouter();
  const $t = getLang(locale);

  return (
    <BaseLayout>
      <HeadSeo
        title={$t.work.title + ' - ' + siteMetadata.companyName}
        description={$t.work.ogDescription}
        ogImageUrl={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
        ogTwitterImage={$t.home.ogImage ? $t.home.ogImage : locale === 'es' ? siteMetadata.ogDefaultImageEs : siteMetadata.ogDefaultImageEn}
      />
      <Page className={styles.work}>
        <Column
          number="2"
          numberS="1"
          modeXl="normal"
          mode="full"
          weight="right"
          className={styles.work__hero}
        >
          <Block className={styles.work__hero__block}>
            <div className={styles.work__hero__block__left}>
              <h2>{$t.work.title}</h2>
              <p>
                {$t.work.hero[0]} <strong>{$t.work.hero[1]} </strong>
                {$t.work.hero[2]} <strong>{$t.work.hero[3]}</strong>{' '}
                {$t.work.hero[4]} {$t.work.hero[5]}
              </p>
            </div>
          </Block>

          <Block className={styles.work__hero__block}>
            <div className={styles.triangule}>
              <div></div>
            </div>
            <div className={styles.code}></div>
            <img
              src="/triangles/triangle-waves--cyan--right--big.svg"
              className={styles.wave}
              alt="wave"
            />
            <div className={styles.clouds}>
              <div></div>
            </div>
          </Block>
        </Column>
        <div className={styles.work__list}>
          {allProjectsData.map((item, index) => (
            <div
              className={styles.work__list__proyect}
              key={`index-project-${index}`}
            >
              <Column
                number="2"
                weight="right"
                modeXl="normal"
                mode="full"
                className={styles.work__list__column}
              >
                <Block className={styles.work__list__column__left}>
                  <div className={styles.work__list__column__left__content}>
                    <Duration item={item} />
                    <ul>
                      {item.services.length > 0 &&
                        item.services.map((i, key) => <li key={key}>{i}</li>)}
                    </ul>
                  </div>
                  <div className={styles.line} />
                </Block>

                <Block className={styles.work__list__column__right}>
                  <div className={styles.work__list__column__right__content}>
                    <h3>{item.title}</h3>
                    <p>{item.headline}</p>
                    <Link href={`/work/${item.id}`} key={item.id}>                      
                        <img
                          src="/icons/arrow-right--pink.svg"
                          alt="arrow-left"
                        />                      
                    </Link>
                  </div>
                </Block>
              </Column>
            </div>
          ))}
        </div>
      </Page>
    </BaseLayout>
  );
}

export async function getServerSideProps(context) {

  const allProjectsData = getSortedProjectsData(context.locale);

  return {
    props: {
      allProjectsData,
    },
  };
}
