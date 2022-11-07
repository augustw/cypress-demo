<template>
  <v-card color="basil" flat>
    <v-row>
      <v-col class="pa-10">
        <p class="mb-2">Bakgrundsfärg body</p>
        <v-color-picker
          v-model="pickedColorBody"
          v-model:mode="mode"
          hide-canvas
          hide-sliders
        ></v-color-picker>
      </v-col>
      <v-col class="pa-10">
        <p class="mb-2">Bakgrundsfärg main</p>
        <v-color-picker
          v-model="pickedColorMain"
          v-model:mode="mode"
          hide-canvas
          hide-sliders
        ></v-color-picker>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-10">
        <p class="mb-2">Rubrik</p>
        <v-text-field
          label="Rubrik"
          v-model="rubrik"
          prepend-icon="mdi-vuetify"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import config from "../../public/config.json";

export default defineComponent({
  name: "SettingsComponent",
  data() {
    return {
      pickedColorBody: "",
      pickedColorMain: "",
      mode: "hex",
      rubrik: "",
      colorBody: "",
      colorMain: "",
    };
  },
  created: function () {
    this.rubrik = config.rubrik;
    this.pickedColorBody = config.colorBody;
    this.pickedColorMain = config.colorMain;
  },
  watch: {
    pickedColorBody(newValue) {
      this.$emit("colorPickedBody", newValue);
    },
    pickedColorMain(newValue) {
      this.$emit("colorPickedMain", newValue);
    },
    rubrik(newValue) {
      this.$emit("rubrikPicked", newValue);
    },
  },
});
</script>
