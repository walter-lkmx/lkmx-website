import React from "react";
import BaseLayout from "@/layouts/base-layout.js";
import Page from "@flare-react/page";
import Block from "@flare-react/block";
import Column from "@flare-react/column";

export default function Index() {
  return (
    <BaseLayout>
      <Page>
        <Column>
          <Block>
            <h1>Home</h1>
          </Block>
          <Block>
            <h4>Api url:</h4>
            <span>{process.env.NEXT_PUBLIC_API_URL}</span>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}