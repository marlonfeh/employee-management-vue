<template>
  <list-section></list-section>
  <options-section :mode="'groups'"></options-section>
</template>


<script>
import ListSection from "../../../components/frontend/groups/ListSectionGroups.vue";
import OptionsSection from "../../../components/frontend/OptionsSection.vue";

export default {
  components: {
    ListSection,
    OptionsSection,
  },
};
</script>