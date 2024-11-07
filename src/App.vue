<script setup>
import {RouterView} from 'vue-router';
import NavigationHeadBar from "@/components/NavigationHeadBar.vue";
</script>

<template>
  <header>
    <div>
      <NavigationHeadBar/>
    </div>
  </header>
  <RouterView/>
</template>

<style>
@font-face {
  font-family: 'Lato Regular';
  src: url(@/assets/fonts/Lato-Regular.ttf);
}
body {
  background-color: #111827;
  font-family: 'Lato Regular';
  font-style: normal;
  font-weight: 300;
}
</style>
