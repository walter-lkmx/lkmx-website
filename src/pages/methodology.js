import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";
import Head from "next/head";

export default function MethodologyPage() {
  return (
    <BaseLayout>
      <Head><title>Metodología</title></Head>
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