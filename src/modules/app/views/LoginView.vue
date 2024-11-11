<script setup>
import axios from "axios";
import {reactive} from "vue";
import { useToast } from "vue-toastification";
import {useRouter} from "vue-router";

const router = useRouter();
const toast = useToast();
const payload = reactive({
  email: '',
  password: '',
})

async function submitlogin() {
  await axios
      .post("/api/account/authentication", payload,)
      .then((response) => {
        if (response && response.status === 200) {
          toast.success("Anmeldung erfolgreich", {timeout: 2000});
          router.back();
        }
      })
      .catch(() => {
        toast.error("Fehler bei der Anmeldung", {timeout: 2000});
      });
}
</script>

<template>
  <div class="d-flex p-3 login-form-container">
    <div class="login-form-content">
      <div class="login-form-content-inner">
        <form v-on:submit.prevent="submitlogin">
          <div class="pb-4">
            <label for="email" class="form-label">E-Mail</label>
            <input type="email" id="email" class="form-control" v-model="payload.email" name="email" placeholder="name@example.com">
          </div>
          <div class="pb-4">
            <label for="password" class="form-label">Passwort</label>
            <input type="password" id="password" class="form-control" v-model="payload.password" name="password" placeholder="Passwort">
          </div>
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="remember_me"/>
                <label class="form-check-label" for="remember_me">Angemeldet bleiben</label>
              </div>
            </div>
            <div class="col">
              <a href="#!">Passwort vergessen?</a>
            </div>
          </div>
          <div class="d-grid gap-1 mb-4">
          <button type="submit" class="btn btn-primary btn-block ">Anmelden</button>
          </div>
          <div class="text-center">
            <p>Noch keinen Account? <a href="#!">Registrieren</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
