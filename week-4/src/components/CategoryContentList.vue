<template>
  <v-container class="content-container fill-height">
    <v-row class="text-center fill-height">
      <CategoryContentListItem
        v-for="(content, index) in contents"
        :key="index"
        :content="content"
        :category="category"
      />
    </v-row>
  </v-container>
</template>

<script>
import CategoryContentListItem from "@/components/CategoryContentListItem.vue";

export default {
  components: {
    CategoryContentListItem,
  },
  props: {
    category: String,
    contents: Array,
  },
};
</script>

<style lang="scss">
.content-container {
  overflow-y: auto;
  max-height: 570px;

  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: white;
    border-radius: 10px;
    box-shadow: inset 10px 10px 10px 0px #999;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(170deg, yellow 27%, yellowgreen 64%);
    border-radius: 30px;
  }
}
</style>
