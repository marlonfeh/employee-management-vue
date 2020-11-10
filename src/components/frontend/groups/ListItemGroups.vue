<template>
  <div
    class="px-6 py-4 grid grid-cols-12 items-center border-solid border border-gray-500 rounded-lg shadow-lg"
    :class="{ active: group.selected }"
    @click="toggleSelected"
  >
    <div class="col-span-2 flex justify-start">
      <div
        class="font-semibold px-5 py-1 rounded-xl text-white bg-gray-800 text-center"
      >
        {{ group.name }}
      </div>
    </div>

    <div class="col-span-2 text-center">
      <span class="font-medium">Aggr. FTE:</span> {{ aggregatedFTE }}
    </div>

    <ul class="col-span-7 flex space-x-8">
      <li
        class="text-blue-600"
        v-for="groupMember in groupMembers.slice(0, 3)"
        :key="groupMember"
      >
        {{ groupMember.firstName }} {{ groupMember.lastName }}
      </li>
    </ul>
    <div class="col-span-1 mx-auto">
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
  methods: {
    toggleSelected() {
      this.$emit("toggle-selected", this.id);
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

<style>
.active {
  @apply bg-green-400;
}
</style>