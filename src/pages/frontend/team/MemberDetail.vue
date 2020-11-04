<template>
  <section class="container mx-auto py-10 text-gray-700">
    <div class="w-3/4 mb-8 mx-auto">
      <h2 class="text-xl font-medium underline uppercase">Profile</h2>
    </div>

    <div class="w-3/4 mx-auto flex shadow-2xl">
      <div
        class="w-1/2 flex flex-col justify-center items-center text-white bg-gray-800 rounded-l-2xl"
      >
        <img
          :src="require(`@/assets/members/${avatarImage}`)"
          alt="avatar"
          class="h-32 w-32 rounded-full"
        />
        <h2 class="my-4 text-xl font-medium">{{ fullName }}</h2>
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

          <h4 class="mr-6 font-semibold tracking-wide">Years in Company:</h4>
          <p>{{ companyYears }}</p>

          <h4 class="mr-6 font-semibold tracking-wide">Wage:</h4>
          <p>{{ hourlyWage }}€ / Hour</p>

          <h4 class="mr-6 font-semibold tracking-wide">FTE assigned:</h4>
          <p>{{ assignedFTE() }}</p>

          <h4 class="mr-6 font-semibold tracking-wide">FTE available:</h4>
          <p>{{ availableFTE() }}</p>
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
          <li
            class="py-2 bg-teal-500 text-center text-white rounded-2xl"
            v-for="group in assignedGroups"
            :key="group.id"
          >
            {{ group.name }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Subsection -->
    <div v-if="assignedGroupsLength > 0">
      <div class="w-3/4 my-10 mx-auto">
        <h2 class="text-xl font-medium underline uppercase">Group Data</h2>
      </div>

      <!--Show Group Data-->

      <div
        v-if="!edit"
        class="w-3/4 mx-auto mb-6 shadow-2xl rounded-2xl border border-gray-600"
      >
        <div class="my-4 mx-4 grid grid-cols-3">
          <p class="font-semibold tracking-wide uppercase">Group Name</p>
          <p class="font-semibold tracking-wide uppercase">FTE Value</p>
          <p class="font-semibold tracking-wide uppercase">Calculated Wage</p>
        </div>
        <div
          v-for="group in assignedGroups"
          :key="group.id"
          class="my-2 mx-4 py-4 grid grid-cols-3 border-t border-gray-600"
        >
          <p class="font-medium">{{ group.name }}</p>
          <p>{{ findMemberFTE(group.id) }}</p>
          <p>{{ calcWage(group.id) }}€ / Week</p>
        </div>
        <div class="my-2 mx-4 py-4 grid grid-cols-3 border-t border-gray-600">
          <p></p>
          <p class="font-medium">{{ assignedFTE() }}</p>
          <p class="font-medium">{{ calcWageSum() }}€ / Week</p>
        </div>
      </div>

      <!--Edit Group Data-->

      <div
        v-else
        class="w-3/4 mx-auto mb-6 shadow-2xl rounded-2xl border border-gray-600"
      >
        <div class="my-4 mx-4 grid grid-cols-3">
          <p class="font-semibold tracking-wide uppercase">Group Name</p>
          <p class="font-semibold tracking-wide uppercase">FTE Value</p>
          <p class="font-semibold tracking-wide uppercase">Calculated Wage</p>
        </div>
        <div
          v-for="(group, index) in assignedGroups"
          :key="index"
          class="mt-2 mx-4 py-4 grid grid-cols-3 border-t border-gray-600"
        >
          <p class="font-medium">{{ group.name }}</p>
          <input
            class="w-24 px-4 py-1 bg-gray-200 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-gray-500"
            type="number"
            min="0.05"
            :max="maxFTE(group.id)"
            step=".05"
            :id="group.id"
            v-model.number="selectedMemberWages[index].fte"
          />
          <p>{{ calcWage(group.id) }}€ / Week</p>
        </div>
        <div class="my-2 mx-4 py-4 grid grid-cols-3 border-t border-gray-600">
          <p></p>
          <p class="font-medium">{{ assignedFTE() }}</p>
          <p class="font-medium">{{ calcWageSum() }}€ / Week</p>
        </div>
      </div>

      <options-section
        :edit="edit"
        :mode="'member-detail'"
        @click-edit="toggleEditMode"
        @click-save="saveData"
      ></options-section>
    </div>
  </section>
</template>

<script>
import OptionsSection from "../../../components/frontend/OptionsSection.vue";

export default {
  components: {
    OptionsSection,
  },
  props: ["id"],
  data() {
    return {
      selectedMember: null,
      selectedMemberWages: [],
      assignedGroups: null,
      edit: false,
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
    hourlyWage() {
      return this.selectedMember.hourlyWage;
    },
    companyYears() {
      return this.selectedMember.yearsInCompany;
    },
    assignedGroupsLength() {
      return this.assignedGroups.length;
    },
    getFTEValue() {
      return this.$store.getters["fteValue"];
    },
  },
  methods: {
    assignedFTE() {
      return (
        Math.round(
          this.selectedMemberWages.reduce((a, b) => a + b.fte, 0) * 100
        ) / 100
      );
    },
    availableFTE() {
      const assignedFTE = this.assignedFTE();
      return (
        Math.round((this.selectedMember.FTETotal - assignedFTE) * 100) / 100
      );
    },
    maxFTE(groupId) {
      return this.availableFTE() + this.findMemberFTE(groupId);
    },
    findMemberFTE(groupId) {
      return this.selectedMemberWages.find((el) => {
        return el.id === groupId;
      }).fte;
    },

    calcWage(id) {
      const fte = this.findMemberFTE(id);
      return this.hourlyWage * fte * this.getFTEValue;
    },
    calcWageSum() {
      const assignedFTE = this.assignedFTE();
      return assignedFTE * this.hourlyWage * this.getFTEValue;
    },
    toggleEditMode() {
      this.edit = !this.edit;
    },
    saveData() {
      const data = {
        id: this.selectedMember.id,
        groupData: this.selectedMemberWages,
      };

      this.$store.dispatch("groups/changeMemberFTE", data);

      this.toggleEditMode();
    },
  },
  created() {
    this.selectedMember = this.$store.getters["members/members"].find(
      (member) => member.id === this.id
    );
    this.assignedGroups = this.$store.getters["groups/groups"].filter((el) => {
      return el.members.find((member) => member.id === this.id);
    });

    this.assignedGroups.forEach((el) => {
      this.selectedMemberWages.push({
        id: el.id,
        fte: el.members.find((el) => {
          return el.id === this.selectedMember.id;
        }).fte,
      });
    });
  },
};
</script>