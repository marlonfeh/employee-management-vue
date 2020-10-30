<template >
  <section class="container mx-auto flex justify-center">
    <!--Teams-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'teams'"
    >
      <base-button :mode="'teal-light'" link to="/frontend/team-add">
        Add
      </base-button>
      <base-button click @click-handler="groupMembers"> Group </base-button>
      <base-button :mode="'teal-light'" click @click-handler="resetSelected"
        >Reset</base-button
      >
    </div>
    <!--Groups-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'groups'"
    >
      <base-button :mode="'teal-light'"> Edit </base-button>
      <base-button :mode="'teal-light'"> Merge </base-button>
      <!--<base-button :mode="'teal-light'"> Contact </base-button>-->
    </div>

    <!--Member Detail-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'member-detail'"
    >
      <base-button :mode="'teal-light'"> Edit </base-button>
    </div>
  </section>
</template>


<script>
export default {
  props: ["mode"],
  data() {
    return {
      add: false,
      group: false,
      contact: false,
    };
  },
  methods: {
    generateID() {
      return Math.random().toString(36).substr(2, 9);
    },
    resetSelected() {
      this.$store.dispatch("members/resetSelected");
    },
    groupMembers() {
      const selectedMember = this.$store.getters["members/members"].filter(
        (el) => {
          return el.selected === true;
        }
      );

      const selectedMemberID = selectedMember.map((el) => el.id);

      const groupData = {
        id: this.generateID(),
        name: "placeholder",
        lead: selectedMemberID[0],
        members: selectedMemberID,
      };

      console.log(groupData);

      this.$store.dispatch("groups/createGroup", groupData);

      this.resetSelected();

      this.$router.replace("/frontend/group-add/" + groupData.id);
    },
    test() {
      console.log("test");
    },
  },
};
</script>