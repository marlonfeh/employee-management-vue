<template>
  <list-section></list-section>
  <options-section :mode="'teams'"></options-section>
</template>


<script>
import ListSection from "../../../components/frontend/team/ListSectionTeams.vue";
import OptionsSection from "../../../components/frontend/OptionsSection.vue";

export default {
  components: {
    ListSection,
    OptionsSection,
  },
  created() {
    this.$store.dispatch("members/resetSelected");
    this.$store.dispatch("groups/deleteTMPGroups");
  },
};
</script>