<template>
  <div
    class="px-6 py-2 flex justify-between border-solid border border-gray-500 rounded-lg shadow-xl text-center"
  >
    <div class="flex items-center space-x-10">
      <img
        :src="require(`@/assets/members/${avatarImage}`)"
        alt="avatar"
        class="h-16 w-16 rounded-full mr-6"
      />
      <div class="font-semibold">{{ fullName }}</div>
      <div>{{ email }}</div>
      <ul class="flex space-x-8">
        <li class="text-blue-600" v-for="quali in qualifications" :key="quali">
          {{ quali }}
        </li>
      </ul>
    </div>
    <button
      class="my-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button>
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
  },
};
</script>