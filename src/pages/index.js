import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";

export default function Index() {
  return (
    <BaseLayout>
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