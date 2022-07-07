<template>
  <v-app id="DefaultContainer" style="background-color: rgba(138, 209, 232, 1); overflow: hidden">
    <v-img
      class="taiwan_bg"
      lazy-src=""
      src="../assets/image/taiwan@2x.png"
    ></v-img>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultContainer'
}
</script>

<style scoped>
.taiwan_bg {
  position: absolute;
  transform: rotate(4.93deg);
}
</style>
