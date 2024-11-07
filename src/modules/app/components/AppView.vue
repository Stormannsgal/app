<script setup>
import NavigationHeadBar from "app/components/NavigationHeadBar.vue";
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

<style lang="scss">
@font-face {
  font-family: 'Lato Regular';
  src: url(app/assets/fonts/Lato-Regular.ttf);
}
body {
  color: #94a3b8;
  background-color: #090d15;
  font-family: 'Lato Regular';
  font-style: normal;
  font-weight: 300;
}
a:link, a:visited {
  color: lavender;
  text-decoration: underline cornflowerblue;
}

a:hover, a:active {
  color: white;
  text-decoration-thickness: 2px;
}

.form-control, .form-control:focus, .form-check-input {
  background-color: #abbada;
}

.form-control:focus, .form-check-input:focus {
  border-color: #8aaefb;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px #8acafb;
}
</style>
