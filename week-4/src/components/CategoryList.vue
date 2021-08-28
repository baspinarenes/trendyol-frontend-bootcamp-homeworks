<template>
  <v-container class="d-flex flex-column justify-center">
    <span class="white--text text-center font-weight-bold"
      >May the force be with you.</span
    >
    <v-container class="fill-height">
      <v-row class="text-center fill-height">
        <CategoryListItem
          v-for="(categoryUrl, categoryName) in categories"
          :categoryUrl="categoryUrl"
          :categoryName="categoryName"
          :key="categoryName"
        />
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import CategoryListItem from "@/components/CategoryListItem.vue";
import api from "@/services/api.js";

export default {
  components: {
    CategoryListItem,
  },
  data() {
    return {
      categories: {},
    };
  },
  created() {
    api.getItems().then((result) => (this.categories = result.data));
  },
  computed: {},
};
</script>
