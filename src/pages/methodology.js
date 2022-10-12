import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import { Block, Column, Page } from "@lkmx/flare-react";

export default function MethodologyPage() {
  return (
    <BaseLayout>
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