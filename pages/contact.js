import React from "react";
import BaseLayout from 'components/base-layout.js'
import Page from '@flare-react/page'
import Block from '@flare-react/block'
import Column from '@flare-react/column'

export default function ContactPage() {
  return (
    <BaseLayout>
      <Page>
        <Column>
          <Block>
            <h1>Contacto</h1>
          </Block>
        </Column>
      </Page>
    </BaseLayout>
  );
}