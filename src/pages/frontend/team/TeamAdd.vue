<template>
  <section
    class="container mx-auto flex flex-col items-center justify-center text-gray-700"
  >
    <div class="my-4 p-4 border border-gray-500 rounded-2xl">
      <h2 class="py-10 uppercase text-center font-medium">
        Enter details of a new member
      </h2>
      <add-member-form @save-data="saveData"></add-member-form>
    </div>
  </section>
</template>

<script>
import AddMemberForm from "../../../components/frontend/team/AddMemberForm.vue";

export default {
  components: { AddMemberForm },
  methods: {
    saveData(data) {
      this.$store.dispatch("members/addMember", data);
      this.$router.replace("/frontend/team-add/success");
    },
  },
};
</script>