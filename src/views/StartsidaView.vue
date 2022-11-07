<template>
  <v-row no-gutters>
    <v-col class="py-10 d-flex justify-center" md="12">
      <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 text-basil">{{ rubrik }}</h1>
        </v-card-title>
        <!-- Tabs -->
        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <!-- Innehåll -->
        <v-window v-model="tab">
          <v-window-item v-for="item in items" :key="item" :value="item">
            <settings-component
              v-if="item === 'Inställningar'"
              v-on:color-picked-body="onColorPickedBody"
              v-on:color-picked-main="onColorPickedMain"
              v-on:rubrik-picked="onRubrikPicked"
            />
            <overview-component
              v-else
              :rubrikIn="rubrik"
              :colorBodyIn="bodyColor"
              :colorMainIn="mainColor"
            />
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import SettingsComponent from "../components/SettingsComponent.vue";
import OverviewComponent from "../components/OverviewComponent.vue";
import config from "../../public/config.json";

export default {
  name: "StartsidaView",
  components: {
    SettingsComponent: SettingsComponent,
    OverviewComponent: OverviewComponent,
  },
  data() {
    return {
      rubrik: "cypress-demo",
      bodyColor: "",
      mainColor: "",
      backgroundHex: "",
      tab: "Inställningar",
      items: ["Inställningar", "Översikt"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  created: function () {
    //Sätter initial data
    this.rubrik = config.rubrik;
    this.onColorPickedBody(config.colorBody);
    this.onColorPickedMain(config.colorMain);
  },
  methods: {
    onColorPickedBody(hex) {
      var r = document.querySelector(":root");
      hex = hex.substring(0, 7);
      r.style.setProperty("--body-background", hex);
      this.bodyColor = hex;
    },
    onColorPickedMain(hex) {
      var r = document.querySelector(":root");
      hex = hex.substring(0, 7);
      r.style.setProperty("--main-background", hex);
      this.mainColor = hex;
    },
    onRubrikPicked(newValue) {
      this.rubrik = newValue;
    },
  },
};
</script>
<style>
:root {
  --main-background: #ffef3f;
  --body-background: #ffffff;
}

div.v-application {
  background: var(--body-background) !important;
}

/* Helper classes */
.bg-basil {
  background: var(--main-background) !important;
}
.text-basil {
  color: #fff !important;
}
</style>
