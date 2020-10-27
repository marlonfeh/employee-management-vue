<template>
  <div
    class="max-w-xs min-w-full px-6 py-4 flex flex-col items-center space-y-2 border-solid border border-gray-500 rounded-lg shadow-xl"
    :class="{ active: isActive }"
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
    <p>{{ isActive }}</p>
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
  ],
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    membersDetailsLink() {
      return "/frontend/team-cards/" + this.id; // /coaches/c1
    },

    Member() {
      return this.$store.getters["members/members"].find(
        (member) => member.id === this.id
      );
    },

    /*
    membersDetailsLink() {
      return this.$route.path + "/" + this.id; // /coaches/c1
    },
    */
  },
  methods: {
    toggleSelected() {
      this.isActive = !this.isActive;
      //console.log(this.Members);

      //add mutation to toggle state of selected
      this.$store.dispatch("members/toggleSelected", this.id);

      this.$emit("show-log", this.id);
    },
  },
};
</script>

<style>
.active {
  @apply bg-green-400;
}
</style>