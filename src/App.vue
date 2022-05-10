<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <simple-layout>
    <simple-header>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/services">Servicios</router-link>
    </simple-header>
    <router-view></router-view>
  </simple-layout>
</template>

<style lang="scss"></style>
