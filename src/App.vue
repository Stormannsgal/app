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
body {
  background-color: #030712;
}
</style>
