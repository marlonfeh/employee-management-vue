<template>
  <section class="container w-1/2 mx-auto text-gray-700">
    <div class="my-4 p-4 border border-gray-500 rounded-2xl">
      <h2 class="py-10 uppercase text-center font-medium">
        Enter details of new Group
      </h2>

      <add-group-form
        :groupMember="groupMemberData"
        :assignedFTE="assignedFTE"
        @save-data="saveData"
      ></add-group-form>
    </div>
  </section>
</template>

<script>
import AddGroupForm from "../../../components/frontend/groups/AddGroupForm.vue";

export default {
  components: {
    AddGroupForm,
  },
  props: ["id"],
  data() {
    return {
      group: null,
    };
  },
  computed: {
    groupMemberData() {
      return this.$store.getters["members/members"].filter((e) => {
        return this.group.members.some((i) => {
          return i.id === e.id;
        });
      });
    },
    assignedFTE() {
      return { val: this.group.members, isValid: true };
    },
  },
  methods: {
    saveData(formData) {
      const data = {
        id: this.id,
        name: formData.name,
        lead: formData.lead,
        members: formData.members,
      };

      this.$store.dispatch(
        "members/updateFTEAvailabilityPositive",
        formData.members
      );
      this.$store.dispatch("groups/saveGroup", data);
      this.$router.replace("/frontend/group-merge/success");
    },
  },
  created() {
    this.group = this.$store.getters["groups/groups"].find(
      (group) => group.id === this.id
    );
  },
};
</script>