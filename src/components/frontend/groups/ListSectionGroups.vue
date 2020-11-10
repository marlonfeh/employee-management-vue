<template>
  <section id="cardSection" class="container mx-auto py-10 space-y-6">
    <list-item-groups
      v-for="group in groups"
      :key="group.id"
      :id="group.id"
      :group="group"
      @toggle-selected="toggleSelected"
    ></list-item-groups>
  </section>
</template>

<script>
import ListItemGroups from "./ListItemGroups.vue";

export default {
  components: {
    ListItemGroups,
  },
  computed: {
    groups() {
      return this.$store.getters["groups/groups"];
    },
  },
  methods: {
    toggleSelected(groupID) {
      this.$store.dispatch("groups/toggleSelected", groupID);
    },
  },
};
</script>