import React from 'react';
import BaseLayout from '@/layouts/base-layout.js';
import styles from './index.module.scss';
import technologies from '@/service/json/technologies';
import { Page, Block, Column } from '@lkmx/flare-react';
import getLang from '@/lang';
import siteMetadata from '../../meta/siteMetadata';
import HeadSeo from '../../components/HeadSeo';
import { useRouter } from 'next/router';
import Image from "next/image";

export default function TechnologyPage() {
  const { locale } = useRouter();
  const $t = getLang(locale);
  const industriesCat = $t.industries.catalogItems
  let industriesCatItems = industriesCat.map(function(item, index){
    return <div key={index} className={styles.catalogItem}>
              <Image
                src={item.img}
                alt={item.title}
                width={32}
                height={32}
              />
              <div className={styles.catalogItem__desc}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>;
  })

  return (
    <BaseLayout>
      <HeadSeo
        title={$t.industries.title + ' - ' + siteMetadata.companyName}
        description={$t.industries.ogDescription}
        ogImageUrl={
          $t.home.ogImage
            ? $t.home.ogImage
            : locale === 'es'
            ? siteMetadata.ogDefaultImageEs
            : siteMetadata.ogDefaultImageEn
        }
        ogTwitterImage={
          $t.home.ogImage
            ? $t.home.ogImage
            : locale === 'es'
            ? siteMetadata.ogDefaultImageEs
            : siteMetadata.ogDefaultImageEn
        }
      />
      <Page className={styles.industries}>
        <Column
          number="2"
          numberS="1"
          className={styles.industries__hero}
          weight="right"
          weightS="Normal"
          modeXl="normal"
          modeL="full"
          modeM="full"
        >
          <Block className={styles.industries__hero__block}>
            <div className={styles.industries__hero__block__left}>
              <div>
                <h2>{$t.industries.title}</h2>
                <p>{$t.industries.hero[0]}</p>
              </div>
            </div>
          </Block>
          <Block className={styles.industries__hero__block}>
            <div className={styles.industries__hero__block__right}>
              <div></div>
              <div className={styles.industries__hero__block__right__waves}>
              <Image
                  layout="fill"                
                  priority={true}
                  src="/industry-hero-wave.svg" alt="waves"
                />
              </div>   
              <div>
                <Image
                  fill
                  src="/circle--pink.svg"
                  alt="ellipse"
                  className={styles.industries__hero__block__right__elipse}
                />
              </div>                         
            </div>
          </Block>
        </Column>
        <Column className={styles.industries__intro}>
          <Block className={styles.industries__intro__block}>
            <div className={styles.lkContainer}>
              <h2>
                {$t.industries.intro}
              </h2>
            </div>
          </Block>
        </Column>
        <Column className={styles.industries__catalog}>
          <Block>
            <div className={styles.lkContainer}>
              <div className={styles.catalogIntro}>
                <h2>{$t.industries.catalogTitle}</h2>
                <p>
                {$t.industries.catalogDescription}
                </p>
              </div>
              <div className={styles.catalogItems}>
                {industriesCatItems}
              </div>
            </div>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}
