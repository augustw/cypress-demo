<template>
  <v-row no-gutters>
    <v-col class="py-10" md="6" offset-md="3">
      <v-card color="basil" class="">
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2 text-basil">cypress-demo</h1>
        </v-card-title>

        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-window v-model="tab">
          <v-window-item v-for="item in items" :key="item" :value="item">
            <v-card color="basil" flat>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      tab: "Äpplen",
      items: ["Äpplen", "Päron", "Bananer", "Fikon"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>
<style>
/* Helper classes */
.bg-basil {
  background-color: #ffef3f !important;
}
.text-basil {
  color: #fff !important;
}
</style>
