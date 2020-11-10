<template>
  <div
    class="w-5/6 px-6 py-4 flex flex-col items-center space-y-2 border-solid border border-gray-500 rounded-lg shadow-xl"
    :class="{ active: selected }"
    @click="toggleSelected"
  >
    <img
      :src="require(`@/assets/members/${avatarImage}`)"
      alt="avatar"
      class="h-16 w-16 rounded-full mx-auto"
    />
    <div class="text-lg font-medium">{{ fullName }}</div>
    <div>{{ email }}</div>
    <ul class="flex space-x-4">
      <li
        class="text-blue-600"
        v-for="quali in qualifications.slice(0, 3)"
        :key="quali"
      >
        {{ quali }}
      </li>
    </ul>
    <base-button link :mode="'teal-light'" :to="membersDetailsLink"
      >Details</base-button
    >
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "avatarImage",
    "firstName",
    "lastName",
    "email",
    "qualifications",
    "selected",
  ],
  data() {
    return {};
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    membersDetailsLink() {
      return "/frontend/team-cards/" + this.id;
    },
  },
  methods: {
    toggleSelected() {
      this.$emit("toggle-selected", this.id);
    },
  },
};
</script>

<style>
.active {
  @apply bg-green-400;
}
</style>