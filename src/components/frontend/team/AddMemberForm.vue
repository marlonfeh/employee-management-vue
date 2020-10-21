<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="firstname">Firstname</label>
      <input
        class="bg-gray-300"
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
      />
    </div>
    <div>
      <label for="firstname">Lastname</label>
      <input
        class="bg-gray-300"
        type="text"
        id="firstname"
        v-model.trim="lastName.val"
      />
    </div>
    <div class="">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="qualifications.val"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="qualifications.val"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="vue"
          v-model="qualifications.val"
        />
        <label for="career">Vue</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="react"
          v-model="qualifications.val"
        />
        <label for="career">React</label>
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
    generateEmail() {},
    submitForm() {
      //this.generateEmail();

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        email: "test@company.net",
        qualifications: this.qualifications.val,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>
