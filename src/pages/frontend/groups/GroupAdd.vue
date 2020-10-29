<template>
  <section
    class="container mx-auto flex flex-col items-center justify-center text-gray-700"
  >
    <div class="my-4 p-4 border border-gray-500 rounded-2xl">
      <h2 class="py-10 uppercase text-center font-medium">
        Enter details of new Group
      </h2>

      <add-group-form
        :groupMember="groupMemberData"
        @save-data="saveData"
      ></add-group-form>
    </div>
  </section>
  <p>Group ID: {{ id }}</p>
  <p>{{ group }}</p>
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
          return i === e.id;
        });
      });
    },
  },
  methods: {
    saveData(formData) {
      const data = {
        id: this.id,
        name: formData.name,
        lead: formData.lead,
      };

      this.$store.dispatch("groups/saveGroup", data);
      this.$router.replace("/frontend/group-add/success");
    },
  },
  created() {
    this.group = this.$store.getters["groups/groups"].find(
      (group) => group.id === this.id
    );
  },
};
</script>