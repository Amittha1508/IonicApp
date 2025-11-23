<template>
  <base-layout
    :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
    page-default-back-link="/memories"

  >
    <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
    <MemoriesOverview 
      v-else 
      :title="loadedMemory.title" 
      :image="loadedMemory.image" 
      :description="loadedMemory.description"
      
    ></MemoriesOverview>
  </base-layout>
</template>

<script>
import MemoriesOverview from "../components/memories/MemoriesOverview.vue";

export default {
  components: {
    MemoriesOverview,
  },
  data() {
    return {
      memoryId: this.$route.params.id, 
     
    };
  },
  computed: {
    loadedMemory() {
      return this.$store.getters.memoryById(this.memoryId);
    },
  },
  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>