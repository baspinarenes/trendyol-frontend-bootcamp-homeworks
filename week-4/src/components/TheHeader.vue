<template>
  <v-app-bar
    app
    color="transparent"
    dark
    class="d-flex justify-center align-center pa-0"
    style="position: relative"
  >
    <v-btn class="logo-link" to="/" color="transparent" plain>
      <v-img :src="Logo" max-width="100vw"></v-img>
    </v-btn>
  </v-app-bar>
</template>

<script>
import Logo from "@/assets/logo.png";
export default {
  data() {
    return {
      Logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo-link {
  opacity: 1;
}
.active-route {
  opacity: 1;
}
</style>
