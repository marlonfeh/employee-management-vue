<template>
  <div
    class="px-6 py-3 grid grid-cols-12 items-center border-solid border border-gray-500 rounded-lg shadow-lg"
  >
    <div class="col-span-2 font-semibold">
      {{ group.name }}
    </div>
    <div class="col-span-2">Aggr. FTE: {{ aggregatedFTE }}</div>

    <ul class="col-span-7 flex space-x-8">
      <li
        class="text-blue-600"
        v-for="groupMember in groupMembers"
        :key="groupMember"
      >
        {{ groupMember.firstName }} {{ groupMember.lastName }}
      </li>
    </ul>
    <div class="col-span-1">
      <base-button link :mode="'teal-light'" :to="groupDetailsLink"
        >Details</base-button
      >
    </div>
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
      return "group-detail/" + this.id;
    },
    aggregatedFTE() {
      return (
        Math.round(this.group.members.reduce((a, b) => a + b.fte, 0) * 100) /
        100
      );
    },
  },
  created() {
    this.groupMembers = this.$store.getters["members/members"].filter((el) => {
      return this.group.members.some((f) => {
        return f.id === el.id;
      });
    });
  },
};
</script>