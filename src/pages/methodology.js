import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import Head from "next/head";
import siteMetadata from "../meta/siteMetadata"
import HeadSeo from "../components/HeadSeo"

export default function MethodologyPage() {
  return (
    <BaseLayout>
      <HeadSeo
        title={`Metodología`}
        description={`Descripción de MetodologyPage`}
        canonicalUrl={siteMetadata.siteUrl}
        ogImageUrl={"https://iili.io/H9S6dIj.jpg"}
        ogTwitterImage={`https://iili.io/H9S6dIj.jpg`}
        ogType={siteMetadata.ogType}
      />
      <Page>
        <Column>
          <Block>
            <h1>Metodología</h1>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}