<template>
  <v-container class="d-flex flex-column justify-center">
    <div class="white--text text-center font-weight-bold">
      - Fear is the path to the dark side. Fear leads to anger. Anger leads to
      hate. Hate leads to suffering. I sense much fear in you.<br />
      - That's right because I'm coming for
      <v-text-field
        color="yellow"
        dark
        height="20px"
        style="width: 120px; display: inline-block"
        class="pa-0"
        v-model="filterText"
        @change="getData"
      >
      </v-text-field
      >. This API leads to anger. Anger leads to hate. Hate leads to suffering.
      I am feared.
    </div>
    <CategoryContentList :category="category" :contents="contents" />
  </v-container>
</template>

<script>
import CategoryContentList from "@/components/CategoryContentList.vue";
import api from "@/services/api.js";

export default {
  components: {
    CategoryContentList,
  },
  props: {
    category: String,
  },
  data() {
    return {
      filterText: "",
      contents: [],
    };
  },
  methods: {
    getData() {
      console.log("d");
      api
        .getItems(`${this.category}/?search=${this.filterText}`)
        .then((result) => result.data)
        .then((data) => {
          this.contents = data.results;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
input {
  border-bottom: 1px solid white !important;
  color: yellow;
}
</style>
