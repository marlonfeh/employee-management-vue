<template>
  <form @submit.prevent="submitForm" class="flex flex-col items-center">
    <div>
      <div>
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          type="text"
          id="firstname"
          placeholder="Firstname"
          v-model.trim="firstName.val"
        />
      </div>
      <div>
        <input
          class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
          type="text"
          id="firstname"
          placeholder="Lastname"
          v-model.trim="lastName.val"
        />
      </div>
    </div>

    <h3 class="my-6 font-medium">Sex</h3>

    <div>
      <input type="radio" id="woman" name="gender" value="woman" checked />
      <label for="woman">Woman</label>
    </div>

    <div>
      <input type="radio" id="dewey" name="gender" value="dewey" />
      <label for="dewey">Men</label>
    </div>

    <div>
      <input type="radio" id="louie" name="gender" value="louie" />
      <label for="louie">Divers</label>
    </div>

    <h3 class="my-6 font-medium">Pick an Avatar</h3>

    <div>
      <select name="favourite-number">
        <option value="">Select an option</option>
        <option value="woman-1.jpg">Woman 1</option>
        <option value="men-1.jpg">Woman 1</option>
      </select>
    </div>

    <h3 class="my-6 font-medium">Areas of Expertise</h3>
    <div class="grid grid-cols-3 gap-x-10 gap-y-4">
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="Frontend"
          v-model="qualifications.val"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="Backend"
          v-model="qualifications.val"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="vue"
          value="Vue"
          v-model="qualifications.val"
        />
        <label for="vue">Vue</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="react"
          value="React"
          v-model="qualifications.val"
        />
        <label for="react">React</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="UI"
          v-model="qualifications.val"
        />
        <label for="career">UI</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="ux"
          value="UX"
          v-model="qualifications.val"
        />
        <label for="ux">UX</label>
      </div>
    </div>

    <button-main-light>Add Member</button-main-light>
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
    generateEmail() {
      return `${this.firstName.val}.${this.lastName.val}@company.net`;
    },
    submitForm() {
      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        email: this.generateEmail(),
        qualifications: this.qualifications.val,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>
