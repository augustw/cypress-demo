<template>
  <v-card color="basil" flat>
    <v-row>
      <v-col class="pa-10">
        <p class="mb-2 font-weight-bold">Bakgrundsfärg body</p>
        <v-card :color="colorBody" class="color-sample" elevation="5">{{
          colorBody
        }}</v-card>
      </v-col>
      <v-col class="pa-10">
        <p class="mb-2 font-weight-bold">Bakgrundsfärg main</p>
        <v-card :color="colorMain" class="color-sample" elevation="5">{{
          colorMain
        }}</v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-10">
        <p class="font-weight-bold">Rubrik</p>
        <h2 class="font-white font-weight-bold">{{ rubrik }}</h2>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OverviewComponent",
  props: ["rubrikIn", "colorBodyIn", "colorMainIn"],
  data() {
    return {
      rubrik: "",
      colorBody: "",
      colorMain: "",
    };
  },
  created: function () {
    this.rubrik = this.rubrikIn;
    this.colorBody = this.colorBodyIn;
    this.colorMain = this.colorMainIn;
  },
});
</script>
<style>
.color-sample {
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
}
.font-white {
  color: white;
}
</style>
