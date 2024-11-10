<script setup>
import {RouterView} from 'vue-router';
import {useClientIDStore} from '@/stores/ClientIDStore.js';
import axios from "axios";

const clientID = useClientIDStore();

if (localStorage.getItem('uniqueID') === null) {
  const uniqueID = clientID.persistClientID();
  axios.defaults.headers.common['x-ident'] = `${uniqueID}`;
}
</script>

<template>
  <RouterView/>
</template>
