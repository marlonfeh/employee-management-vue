<template>
  <section class="container mx-auto mt-10 mb-4 shadow-2xl">
    <div class="py-4 px-2 flex bg-gray-800 text-white rounded-2xl">
      <div class="w-1/2 flex justify-center items-center border-r">
        <h2 class="font-semibold text-xl">{{ group.name }}</h2>
      </div>
      <div class="ml-8 space-y-6">
        <p>
          <span class="font-semibold">Leader:</span> {{ groupLead.firstName }}
          {{ groupLead.lastName }}
        </p>
        <p>
          <span class="font-semibold">Number of Members:</span>
          {{ memberNumber }}
        </p>
      </div>
    </div>
  </section>
  <group-member-cards :group="group"></group-member-cards>
</template>

<script>
import GroupMemberCards from "../../../components/frontend/groups/GroupMemberCards.vue";
export default {
  data() {
    return {
      group: null,
    };
  },
  components: {
    GroupMemberCards,
  },
  props: ["id"],
  computed: {
    groupLead() {
      return this.$store.getters["members/members"].find(
        (member) => member.id === this.group.lead
      );
    },
    memberNumber() {
      return this.group.members.length;
    },
  },
  created() {
    this.group = this.$store.getters["groups/groups"].find(
      (group) => group.id === this.id
    );
  },
};
</script>