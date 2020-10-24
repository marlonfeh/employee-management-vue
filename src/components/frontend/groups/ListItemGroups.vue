<template>
  <div
    class="px-6 py-2 flex justify-between border-solid border border-gray-500 rounded-lg shadow-lg text-center"
  >
    <div class="flex items-center">
      <div class="pr-10 font-semibold border-r border-gray-900">
        {{ group.name }}
      </div>

      <ul class="pl-10 flex space-x-8">
        <li
          class="text-blue-600"
          v-for="groupMember in groupMembers"
          :key="groupMember"
        >
          {{ groupMember.firstName }} {{ groupMember.lastName }}
        </li>
      </ul>
    </div>
    <base-button link :mode="'teal-light'" :to="groupDetailsLink"
      >Details</base-button
    >
  </div>
</template>

<script>
export default {
  props: ["id", "group"],
  data() {
    return {
      groupMembers: null,
    };
  },
  computed: {
    groupDetailsLink() {
      return "group-detail/" + this.id; // /coaches/c1
    },
  },
  created() {
    this.groupMembers = this.$store.getters["members/members"].filter((el) => {
      return this.group.members.some((f) => {
        return f === el.id;
      });
    });
  },
};
</script>