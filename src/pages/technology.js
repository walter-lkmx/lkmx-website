import React from "react";
import BaseLayout from  "@/layouts/base-layout.js";
import Page from "@flare-react/page";
import Block from "@flare-react/block";
import Column from "@flare-react/column";

export default function TechnologyPage() {
  return (
    <BaseLayout>
      <Page>
        <Column>
          <Block>
            <h1>Tencnología</h1>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}