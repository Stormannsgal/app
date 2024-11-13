<template>
  <div class="flex login-form-container">
    <div class="login-form-content">
      <div class="login-form-content-inner">
        <form v-on:submit.prevent="submitlogin">
          <Toast/>
          <div class=" text-white text-center">
            <h1>Willkommen</h1>
            <p>Noch keinen Account? <a href="#!">Hier anlegen!</a></p>
          </div>
          <div class="pb-4">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-at"></i>
              </InputGroupAddon>
              <FloatLabel variant="on">
                <InputText id="email" class="inputTextWidth" size="small" v-model="payload.email" autocomplete="on" required="true" :invalid="validate!==null"/>
                <label for="email">E-Mail</label>
              </FloatLabel>
            </InputGroup>
            <Message v-if="validate!==null" size="small" variant="simple" severity="error" class="fs-small">Bitte die Eingabe überprüfen</Message>
          </div>
          <div class="pb-4">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-lock"></i>
              </InputGroupAddon>
              <FloatLabel variant="on">
                <Password id="password" class="inputTextWidth" size="small" v-model="payload.password" :invalid="validate!==null">
                  <template #header>
                    <div class="font-semibold text-xm mb-4">Eingabe vom Passwort</div>
                    <hr>
                  </template>
                  <template #content>
                    <div class="font-semibold text-xm mb-4">Bitte beachten</div>
                  </template>
                  <template #footer>
                    <ul class="pl-2 ml-2 my-0 leading-normal">
                      <li>Sage keinem anderen dein Passwort</li>
                      <li>Wir werden dich nie nach deinem Passwort fragen!</li>
                    </ul>
                  </template>
                </Password>
                <label for="password">Passwort</label>
              </FloatLabel>
            </InputGroup>
            <Message v-if="validate!==null" size="small" variant="simple" severity="error" class="fs-small">Bitte die Eingabe überprüfen</Message>
          </div>
          <div class="flex flex-row pb-4 gap-6">
            <div class="flex">
              <Checkbox class="mr-2" binary/>
              <label for="remember_me">Angemeldet bleiben</label>
            </div>
            <div class="flex">
              <a href="#!">Passwort vergessen?</a>
            </div>
          </div>
          <div>
            <Button class="submitButtonWith" label="Anmelden" icon="pi pi-user" type="submit"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {ref, reactive} from "vue";
import Toast from 'primevue/toast';
import {useToast} from "primevue/usetoast";
import {useRouter} from "vue-router";
import Password from 'primevue/password';

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
          router.back();
        }
      })
      .catch((error) => {
            if (error.response && (error.response.status === 400 || error.response.status === 403)) {
              validate.value = 'E-Mail/Password fehlerhaft';
              toast.add({severity: 'error', summary: 'Fehler bei der Anmeldung', detail: 'Eingegebene Daten prüfen', life: 3000});
            } else {
              toast.add({severity: 'error', summary: 'Fehler bei der Anmeldung', detail: 'Unbekannter Fehler', life: 3000});
            }
          }
      );
}
</script>

<style scoped>
.fs-small {
  font-size: 0.875rem;
}

.inputTextWidth {
  width: 100%;
}

.submitButtonWith {
  width: 100%;
}

.login-form-container {
  justify-content: center;
  width: 100%;
}

.login-form-content {
  margin-top: 10px;
  padding: 10px;
  justify-content: center;
  max-width: 95%;
  min-width: 25%;
  background-color: #111827;
  border-radius: 10px;
  border: gray solid thin;
}

.login-form-content-inner {
  padding: 20px;
}
</style>
