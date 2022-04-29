<template>
  <page>
    <column number="3">
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
    </column>

    <column number="3" mode="slim">
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
    </column>

    <column number="3">
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
      <block>
        <h1>Hello world</h1>
        <p>This is a perfectly aligned web page</p>
      </block>
    </column>

  </page>
</template>

<script>
import DefaultLayout from "../layouts/DefaultLayout.vue";
export default {
    name: "IndexPage",
    components: { DefaultLayout }
}
</script>
