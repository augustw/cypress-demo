<template>
  <v-row no-gutters>
    <v-col class="py-10 center-block" md="10" sm="11">
      <v-card class="elevation-12">
        <v-toolbar dark color="basil">
          <v-toolbar-title
            ><span data-cy="login-page-rubrik">Logga in</span></v-toolbar-title
          >
        </v-toolbar>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              prepend-icon="person"
              name="username"
              label="Användarnamn"
              type="text"
              data-cy="login-page-input-username"
              v-model="username"
              :rules="usernameRules"
            ></v-text-field>
            <v-text-field
              prepend-icon="lock"
              name="password"
              label="Lösenord"
              type="password"
              data-cy="login-page-input-password"
              v-model="password"
              :rules="passwordRules"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="!isFormValid"
            v-on:click="loginAndRedirect()"
            color="#FFEA00"
            data-cy="login-page-button-login"
            >Logga in</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
  data: () => ({
    valid: false,
    remember: true,
    username: "",
    usernameRules: [
      (v: any) => !!v || "Username is required",
      (v: string | any[]) =>
        v.length <= 10 || "Användarnamn får inte vara längre än 10 tecken",
    ],
    password: "",
    passwordRules: [
      (v: any) => !!v || "Password is required",
      (v: string | any[]) =>
        v.length >= 8 || "Lösenordet måste innehåla minst 8 tecken",
    ],
  }),
  methods: {
    loginAndRedirect() {
      this.$router.push("startsida");
    },
  },
  computed: {
    isFormValid() {
      return (
        this.username.length > 0 &&
        this.username.length <= 10 &&
        this.password === "rättlösen"
      );
    },
  },
});
</script>
<style>
.center-block {
  margin: 0px auto;
}
</style>
