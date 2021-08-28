<template>
  <v-app>
    <TheHeader />

    <v-content>
      <v-main class="py-0">
        <router-view :key="$route.path" />
      </v-main>
    </v-content>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import BackgroundImage from "@/assets/background.jpg";
export default {
  components: {
    TheHeader,
  },
  data: () => ({
    BackgroundImage,
  }),
};
</script>

<style lang="scss">
.v-application {
  background: url("~@/assets/background.jpg") rgba(0, 0, 0, 0.5) !important;
}
.v-main {
  padding: 0 !important;
}
</style>
