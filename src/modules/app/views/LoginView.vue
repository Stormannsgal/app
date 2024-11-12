<template>
  <div class="d-flex p-3 login-form-container">
    <div class="login-form-content">
      <div class="login-form-content-inner">
        <form v-on:submit.prevent="submitlogin">
          <div v-show="validate" class="pb-4">
            <span class="text-danger">{{ validate }}</span>
          </div>
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
            <button class="btn btn-primary btn-block ">Anmelden</button>
          </div>
          <div class="text-center">
            <p>Noch keinen Account? <a href="#!">Registrieren</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref, reactive} from "vue";
import {useToast} from "vue-toastification";
import {useRouter} from "vue-router";

const router = useRouter();
const toast = useToast();
const validate = ref(null);
const payload = reactive({
  email: '',
  password: '',
});

function validateForm() {
  validate.value = null;
  const regex = /^[^@]+@\w+(\.\w+)+\w$/;
  if (!regex.test(payload.email) || payload.password.length < 6 || payload.password.length > 255) {
    validate.value = 'E-Mail/Password fehlerhaft';
  }

  return validate.value === null;
}

async function submitlogin() {
  if (!validateForm()) {
    return;
  }
  await axios
      .post("/api/account/authentication", payload,)
      .then((response) => {
        if (response && response.status === 200) {
          toast.success("Anmeldung erfolgreich", {timeout: 2000});
          router.back();
        }
      })
      .catch((error) => {
        if (error.response.status === 400 || error.response.status === 403) {
          validate.value = 'E-Mail/Password fehlerhaft';
        } else {
          toast.error("Unbekannter Fehler", {timeout: 2000});
        }
      });

}
</script>
