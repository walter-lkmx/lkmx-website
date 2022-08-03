import React from "react";
import BaseLayout from 'components/base-layout.js'
import Page from '@flare-react/page'
import Block from '@flare-react/block'
import Column from '@flare-react/column'

export default function ServicesPage() {
  return (
    <BaseLayout>
      <Page>
        <Column>
          <Block>
            <h1>Servicios</h1>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}