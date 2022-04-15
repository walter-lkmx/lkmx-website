<template>
  <page>
    <column>
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
