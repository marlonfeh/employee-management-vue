<template>
  <section class="container mx-auto mt-10 mb-4 shadow-2xl">
    <div class="py-4 px-2 flex bg-gray-800 text-white rounded-2xl">
      <div class="w-1/2 flex justify-center items-center border-r">
        <h2 class="font-semibold text-xl">{{ group.name }}</h2>
      </div>
      <div class="ml-8 space-y-6">
        <p>
          <span class="font-semibold">Leader:</span> {{ groupLead.firstName }}
          {{ groupLead.lastName }}
        </p>
        <p>
          <span class="font-semibold">Number of Members:</span>
          {{ memberNumber }}
        </p>
        <p>
          <span class="font-semibold">Aggregated FTE:</span>
          {{ aggregatedFTE }}
        </p>
        <p>
          <span class="font-semibold">Aggregated Wage per Hour:</span>
          {{ aggregatedWage }}
        </p>
      </div>
    </div>
  </section>
  <card-section-groups :groupMembers="groupMembers"></card-section-groups>
  <options-section
    :edit="edit"
    :mode="'group-detail'"
    @click-edit="toggleEditMode"
    @click-save="saveData"
  ></options-section>
</template>

<script>
import CardSectionGroups from "../../../components/frontend/groups/CardSectionGroups.vue";
import OptionsSection from "../../../components/frontend/OptionsSection.vue";
export default {
  data() {
    return {
      group: null,
      groupMembers: null,
    };
  },
  components: {
    CardSectionGroups,
    OptionsSection,
  },
  props: ["id"],
  computed: {
    groupLead() {
      return this.$store.getters["members/members"].find(
        (member) => member.id === this.group.lead
      );
    },
    memberNumber() {
      return this.group.members.length;
    },
    aggregatedFTE() {
      return this.group.members.reduce((acc, curr) => acc + curr.fte, 0);
    },

    aggregatedWage() {
      return this.groupMembers.reduce((acc, curr) => acc + curr.hourlyWage, 0);
    },
  },
  methods: {
    toggleEditMode() {
      this.edit = !this.edit;
    },
    saveData() {
      /*
      const data = {
        id: this.selectedMember.id,
        groupData: this.selectedMemberWages,
      };

      this.$store.dispatch("groups/changeMemberFTE", data);

      this.toggleEditMode();
      */
    },
  },
  created() {
    this.group = this.$store.getters["groups/groups"].find(
      (group) => group.id === this.id
    );

    this.groupMembers = this.$store.getters["members/members"].filter((el) => {
      return this.group.members.some((f) => {
        return f.id === el.id;
      });
    });
  },
};
</script>