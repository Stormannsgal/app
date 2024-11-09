<script setup>
import {RouterView} from 'vue-router';
import {useClientIDStore} from '@/stores/ClientIDStore.js';

const clientID = useClientIDStore();

if (clientID.getClientID === null) {
  clientID.generateClientID();
}
</script>

<template>
  <RouterView/>
</template>
