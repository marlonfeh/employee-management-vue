<template>
  <section id="cardSection" class="container mx-auto py-10 space-y-6">
    <list-item-teams
      v-for="member in Members"
      :key="member.id"
      :id="member.id"
      :avatar-image="member.avatarImage"
      :first-name="member.firstName"
      :last-name="member.lastName"
      :email="member.email"
      :qualifications="member.qualifications"
    ></list-item-teams>
  </section>
</template>

<script>
import ListItemTeams from "./ListItemTeams.vue";

export default {
  components: {
    ListItemTeams,
  },
  computed: {
    Members() {
      return this.$store.getters["members/members"];
    },
  },
};
</script>