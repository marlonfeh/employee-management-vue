<template>
  <card-section></card-section>
  <options-section :mode="'teams'"></options-section>
</template>


<script>
import CardSection from "../../../components/frontend/team/CardSection.vue";
import OptionsSection from "../../../components/frontend/OptionsSection.vue";

export default {
  components: {
    CardSection,
    OptionsSection,
  },
  created() {
    this.$store.dispatch("members/resetSelected");
    this.$store.dispatch("groups/deleteTMPGroups");
  },
};
</script>