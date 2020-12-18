<template >
  <section class="container mx-auto flex justify-center">
    <!--Teams-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'teams'"
    >
      <base-button link to="/frontend/team-add"> Add </base-button>
      <base-button click @click-handler="createGroup"> Group </base-button>
      <base-button click @click-handler="resetSelectedMembers"
        >Reset</base-button
      >
    </div>
    <!--Groups List-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'groups'"
    >
      <base-button click @click-handler="mergeGroups"> Merge </base-button>
      <base-button click @click-handler="resetSelectedGroups">
        Reset
      </base-button>
      <!--<base-button :mode="'teal-light'"> Contact </base-button>-->
    </div>

    <!--Member Detail-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'member-detail'"
    >
      <base-button v-if="!edit" click @click-handler="clickEdit">
        Edit
      </base-button>
      <base-button v-else click @click-handler="clickSave"> Save </base-button>
    </div>

    <!--Group Detail-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'group-detail'"
    >
      <base-button v-if="!edit" click @click-handler="clickEdit">
        Edit
      </base-button>
      <base-button v-else click @click-handler="clickSave"> Save </base-button>
    </div>
  </section>
</template>


<script>
export default {
  props: ["mode", "edit"],
  emits: ["click-edit", "click-save"],
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
    resetSelectedMembers() {
      this.$store.dispatch("members/resetSelected");
    },
    resetSelectedGroups() {
      this.$store.dispatch("groups/resetSelected");
    },
    createGroup() {
      const selectedMember = this.$store.getters["members/members"].filter(
        (el) => {
          return el.selected === true;
        }
      );

      //const selectedMemberID = selectedMember.map((el) => el.id);

      const selectedMemberData = selectedMember.map((el) => {
        return { id: el.id, fte: 0 };
      });

      const groupData = {
        id: this.generateID(),
        name: "placeholder",
        lead: selectedMemberData[0].id,
        members: selectedMemberData,
      };

      this.$store.dispatch("groups/createGroup", groupData);

      this.resetSelectedMembers();

      this.$router.replace("/frontend/group-add/" + groupData.id);
    },
    mergeGroups() {
      let selectedGroupMembers = [];

      const selectedGroups = this.$store.getters["groups/groups"].filter(
        (el) => {
          return el.selected === true;
        }
      );

      selectedGroups.forEach((el) => {
        selectedGroupMembers = selectedGroupMembers.concat(el.members);
      });

      const groupData = {
        id: this.generateID(),
        name: selectedGroups[0].name,
        lead: selectedGroups[0].lead,
        members: selectedGroupMembers,
        groupData: selectedGroups,
      };

      //console.log(groupData);

      this.$store.dispatch("groups/mergeGroups", groupData);

      this.resetSelectedGroups();

      this.$router.replace("/frontend/group-merge/" + groupData.id);
    },
    emitEvent() {
      this.$emit("emit-event");
    },
    clickEdit() {
      this.$emit("click-edit");
    },
    clickSave() {
      this.$emit("click-save");
    },
  },
};
</script>