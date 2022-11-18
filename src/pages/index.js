import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import Head from "next/head";

import siteMetadata from "../meta/siteMetadata"
import HeadSeo from "../components/HeadSeo"

export default function Index() {
  return (
    <BaseLayout>
       <HeadSeo
        title={`Your Awesome Title Here`}
        description={`Descripción de HomePage`}
        canonicalUrl={siteMetadata.siteUrl}
        ogImageUrl={"https://iili.io/H9S6dIj.jpg"}
        ogTwitterImage={`https://iili.io/H9S6dIj.jpg`}
        ogType={siteMetadata.ogType}
      />

      <Page>
        <Column>
          <Block>
            <h1>Home</h1>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}