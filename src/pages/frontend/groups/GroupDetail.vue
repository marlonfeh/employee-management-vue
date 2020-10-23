<template>
  <p>member cards</p>
  <p>Options bar with specific options</p>
  <p>{{ id }}</p>
  <group-member-cards></group-member-cards>
</template>

<script>
import GroupMemberCards from "../../../components/frontend/groups/GroupMemberCards.vue";
export default {
  components: {
    GroupMemberCards,
  },
  props: ["id"],
};
</script>