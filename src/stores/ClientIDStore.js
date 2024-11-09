import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {v7} from "uuid";

export const useClientIDStore = defineStore('clientID', () => {
  const clientID = ref('');
  const getClientID = computed(() => {
    return localStorage.getItem('uniqueID');
  });

  function persistClientID() {
    localStorage.setItem('uniqueID', clientID.value);
  }

  function removeClientID() {
    localStorage.removeItem('uniqueID');
  }

  function generateClientID() {
    clientID.value = v7();
    persistClientID();
  }

  return {getClientID, removeClientID, generateClientID};
});
