<template>
  <section class="container mx-auto py-10 text-gray-700">
    <div class="w-3/4 mx-auto flex">
      <div
        class="w-1/2 flex flex-col justify-center items-center text-white bg-gray-800 rounded-l-2xl"
      >
        <img
          :src="require(`@/assets/members/${avatarImage}`)"
          alt="avatar"
          class="h-32 w-32 rounded-full"
        />
        <h2 class="my-4 font-medium">{{ fullName }}</h2>
        <p>{{ email }}</p>
      </div>
      <div
        class="w-1/2 py-6 px-4 flex flex-col space-y-10 border-t border-r border-b border-gray-600 rounded-r-2xl"
      >
        <h3 class="font-semibold tracking-wide uppercase underline">
          Overview
        </h3>
        <div class="grid grid-cols-2 gap-y-4">
          <h4 class="mr-6 col-span-1 font-semibold tracking-wide">Gender:</h4>
          <p class="col-span-1">{{ gender }}</p>

          <h4 class="mr-6 font-semibold tracking-wide">Age:</h4>
          <p>{{ age }}</p>

          <h4 class="mr-6 font-semibold tracking-wide">Nationality:</h4>
          <p>{{ nationality }}</p>

          <h4 class="mr-6 font-semibold tracking-wide">Location:</h4>
          <p>{{ location }}</p>
        </div>

        <h3 class="font-semibold tracking-wide uppercase underline">
          Areas of Expertise
        </h3>
        <ul class="grid grid-cols-3 gap-y-6 gap-x-4">
          <li
            class="py-2 bg-blue-500 text-center text-white rounded-2xl"
            v-for="quali in qualifications"
            :key="quali"
          >
            {{ quali }}
          </li>
        </ul>
        <h3 class="font-semibold tracking-wide uppercase underline">
          Assigned to the following teams
        </h3>
        <ul class="grid grid-cols-3 gap-y-6 gap-x-4">
          <li class="py-2 bg-teal-500 text-center text-white rounded-2xl">
            Hardcoded
          </li>
          <li class="py-2 bg-teal-500 text-center text-white rounded-2xl">
            Superheroes
          </li>
          <li class="py-2 bg-teal-500 text-center text-white rounded-2xl">
            Dairytale
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedMember: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedMember.firstName + " " + this.selectedMember.lastName;
    },
    avatarImage() {
      return this.selectedMember.avatarImage;
    },
    email() {
      return this.selectedMember.email;
    },
    qualifications() {
      return this.selectedMember.qualifications;
    },
    gender() {
      return this.selectedMember.gender;
    },
    age() {
      return this.selectedMember.age;
    },
    nationality() {
      return this.selectedMember.nationality;
    },
    location() {
      return this.selectedMember.location;
    },
  },
  created() {
    this.selectedMember = this.$store.getters["members/members"].find(
      (member) => member.id === this.id
    );
  },
};
</script>