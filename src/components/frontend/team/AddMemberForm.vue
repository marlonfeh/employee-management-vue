<template>
  <form @submit.prevent="submitForm" class="flex flex-col items-center">
    <div class="w-full flex space-x-10">
      <div class="w-1/2">
        <label
          class="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="firstname"
          >Firstname</label
        >
        <input
          class="w-full px-4 py-2 mb-4 bg-gray-200 border border-gray-200 rounded text-base text-gray-700 focus:outline-none focus:border-gray-500"
          type="text"
          id="firstname"
          placeholder="John"
          v-model.trim="firstName.val"
        />
      </div>
      <div class="w-1/2">
        <label
          class="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="lastname"
          >Lastname</label
        >
        <input
          class="w-full px-4 py-2 mb-4 bg-gray-200 border border-gray-200 rounded text-base text-gray-700 focus:outline-none focus:border-gray-500"
          type="text"
          id="lastname"
          placeholder="Doe"
          v-model.trim="lastName.val"
        />
      </div>
    </div>
    <div class="w-full flex space-x-10">
      <div class="w-1/2 mb-6">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="avatar"
        >
          Avatar
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none"
            id="avatar"
            v-model="avatarImage.val"
          >
            <option disabled value="">Select an Option</option>
            <option value="femaleOne.jpg">Female 1</option>
            <option value="femaleTwo.jpg">Female 2</option>
            <option value="maleOne.jpg">Male 1</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-1/2 mb-6">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="gender"
        >
          Gender
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none"
            id="gender"
            v-model="gender.val"
          >
            <option disabled value="">Select an Option</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="divers">Divers</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex space-x-10">
      <div class="w-1/2">
        <label
          class="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="age"
          >Age</label
        >
        <input
          class="w-full px-4 py-2 mb-4 bg-gray-200 border border-gray-200 rounded text-base text-gray-700 focus:outline-none focus:border-gray-500"
          type="number"
          id="age"
          placeholder="Years"
          v-model.trim="age.val"
        />
      </div>
      <div class="w-1/2">
        <label
          for="nationality"
          class="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >Nationality</label
        >
        <input
          type="text"
          id="nationality"
          class="w-full px-4 py-2 mb-4 bg-gray-200 border border-gray-200 rounded text-base text-gray-700 focus:outline-none focus:border-gray-500"
          placeholder="Country"
          v-model.trim="nationality.val"
        />
      </div>
    </div>

    <div class="w-full flex space-x-10">
      <div class="w-1/2 pr-5">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="location"
        >
          Location
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none"
            id="location"
            v-model="location.val"
          >
            <option disabled value="">Select an Option</option>
            <option value="Hamburg">Hamburg</option>
            <option value="Munich">Munich</option>
            <option value="Berlin">Berlin</option>
            <option value="Frankfurt">Frankfurt</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <h3 class="py-10 uppercase font-medium">Areas of Expertise</h3>
    <div class="grid grid-cols-3 gap-x-10 gap-y-4 content-center mb-10">
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="Frontend"
          v-model="qualifications.val"
        />
        <label for="frontend" class="ml-6">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="Backend"
          v-model="qualifications.val"
        />
        <label for="backend" class="ml-6">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="vue"
          value="Vue"
          v-model="qualifications.val"
        />
        <label for="vue" class="ml-6">Vue</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="react"
          value="React"
          v-model="qualifications.val"
        />
        <label for="react" class="ml-6">React</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="UI"
          v-model="qualifications.val"
        />
        <label for="career" class="ml-6">UI</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="ux"
          value="UX"
          v-model="qualifications.val"
        />
        <label for="ux" class="ml-6">UX</label>
      </div>
    </div>
    <div class="flex space-x-6">
      <base-button :mode="'teal-light'">Add Member</base-button>
      <base-button :mode="'gray-outline'">Reset</base-button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      firstName: {
        val: "",
        isValid: true,
      },
      lastName: {
        val: "",
        isValid: true,
      },
      gender: {
        val: "",
        isValid: true,
      },
      age: {
        val: "",
        isValid: true,
      },
      avatarImage: {
        val: "",
        isValid: true,
      },
      nationality: {
        val: "",
        isValid: true,
      },
      location: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      qualifications: {
        val: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    generateID() {
      return "_" + Math.random().toString(36).substr(2, 9);
    },
    generateEmail() {
      return `${this.firstName.val}.${this.lastName.val}@company.net`;
    },
    submitForm() {
      const formData = {
        id: this.generateID(),
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        gender: this.gender.val,
        age: this.age.val,
        avatarImage: this.avatarImage.val,
        nationality: this.nationality.val,
        location: this.location.val,
        email: this.generateEmail(),
        qualifications: this.qualifications.val,
      };

      console.log(formData);

      this.$emit("save-data", formData);
    },
    resetForm() {
      this.firstName.val = "";
    },
  },
};
</script>
