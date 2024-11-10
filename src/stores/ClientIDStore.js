import {defineStore} from "pinia";
import {v7} from "uuid";

export const useClientIDStore = defineStore('clientID', () => {

  function persistClientID() {
    const uniqueID = v7();
    localStorage.setItem('uniqueID', uniqueID);

    return uniqueID;
  }

  function removeClientID() {
    localStorage.removeItem('uniqueID');
  }

  return {removeClientID, persistClientID};
});
