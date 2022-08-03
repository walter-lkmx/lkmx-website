import React from "react";
import BaseLayout from 'components/base-layout.js'
import Page from '@flare-react/page'
import Block from '@flare-react/block'
import Column from '@flare-react/column'

export default function FirstPage() {
  return (
    <BaseLayout>
      <Page>
        <Column>
          <Block>
            <h1>Flare it's easy to use</h1>
            <p>Assembling a minimal structure with Flare requires the use of their core elements, from there, any page could be styled.</p>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}