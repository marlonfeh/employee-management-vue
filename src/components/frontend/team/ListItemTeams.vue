<template>
  <div
    class="px-6 py-2 border-solid border border-gray-500 rounded-lg shadow-lg grid grid-cols-10 text-gray-700"
  >
    <div class="col-span-1">
      <img
        :src="require(`@/assets/members/${avatarImage}`)"
        alt="avatar"
        class="h-16 w-16 rounded-full mr-6"
      />
    </div>
    <div class="col-span-8 grid grid-cols-8 items-center">
      <div class="col-span-2 font-semibold">{{ fullName }}</div>
      <div class="col-span-3">{{ email }}</div>
      <ul class="col-span-2 flex space-x-8">
        <li
          class="text-blue-600"
          v-for="quali in qualifications.slice(0, 3)"
          :key="quali"
        >
          {{ quali }}
        </li>
      </ul>
    </div>
    <div class="col-span-1 flex items-center justify-center">
      <base-button link :mode="'teal-light'" :to="membersDetailsLink"
        >Details</base-button
      >
    </div>
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
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    },
    membersDetailsLink() {
      return "team-cards/" + this.id; // /coaches/c1
    },
  },
};
</script>