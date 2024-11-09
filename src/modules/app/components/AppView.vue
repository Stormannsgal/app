<script setup>
import NavigationHeadBar from "@app/components/NavigationHeadBar.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <header>
    <div>
      <NavigationHeadBar/>
    </div>
  </header>
  <main class="p-1">
    <RouterView/>
  </main>
  <footer>
  </footer>
</template>
