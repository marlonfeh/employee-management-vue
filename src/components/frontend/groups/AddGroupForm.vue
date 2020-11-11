<template>
  <form
    @submit.prevent="submitForm"
    class="flex flex-col items-center"
    id="addGroupForm"
  >
    <div class="w-full flex space-x-10">
      <div class="w-1/2">
        <label
          class="w-full block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="name"
          >Group Name</label
        >
        <input
          class="w-full px-4 py-2 mb-4 bg-gray-200 border border-gray-200 rounded text-base text-gray-700 focus:outline-none focus:border-gray-500"
          type="text"
          id="name"
          placeholder="A-Team"
          v-model.trim="name.val"
        />
      </div>
      <div class="w-1/2">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="lead"
        >
          Group Lead
        </label>
        <div class="relative">
          <select
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none"
            id="lead"
            v-model="lead.val"
          >
            <option disabled>Select an Option</option>
            <option
              v-for="member in groupMember"
              :key="member.id"
              :value="member.id"
            >
              {{ member.firstName }} {{ member.lastName }}
            </option>
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
    <div class="w-full">
      <p
        class="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-4"
        for="name"
      >
        Assign FTE Values
      </p>
      <div
        class="grid grid-cols-12 items-center mb-2"
        v-for="(member, index) in groupMember"
        :key="index"
      >
        <p class="col-span-3 tracking-wide text-gray-700 text-sm font-bold">
          {{ member.firstName }} {{ member.lastName }}
        </p>
        <input
          class="col-span-2 px-4 py-2 mr-4 bg-gray-200 border border-gray-200 rounded text-base text-gray-700 focus:outline-none focus:border-gray-500"
          type="number"
          min="0"
          :max="FTEAvailable(member.id)"
          step=".05"
          :id="member.id"
          v-model.number="FTEData.val[FTEDataIndex(member.id)].fte"
        />
        <p class="col-span-4">Available FTE: {{ getFTEMax(member.id) }}</p>
      </div>
    </div>
  </form>
  <div class="mt-4 flex justify-center">
    <p class="font-light text-sm">
      Note: Assigning a value of 0 FTE will drop the member off the group.
    </p>
  </div>
  <div class="flex justify-center space-x-6 mt-8">
    <button
      class="my-auto px-3 py-1 rounded-full text-white bg-teal-500 hover:bg-teal-600"
      form="addGroupForm"
    >
      Save Group
    </button>
    <button
      class="my-auto px-3 py-1 rounded-full text-gray-700 border border-gray-500"
      @click="resetForm"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  props: ["groupMember", "assignedFTE"],
  emits: ["save-data"],
  data() {
    return {
      name: {
        val: "",
        isValid: true,
        default: "New Team",
      },
      lead: {
        val: "",
        isValid: true,
      },
      FTEData: null,
      /*
      FTEData: {
        val: [
          { id: "m5", fte: 0 },
          { id: "m6", fte: 0 },
        ],
        isValid: true,
      },
      */
      formIsValid: true,
    };
  },
  computed: {},
  methods: {
    resetForm() {
      this.name.val = "";
      this.lead.val = "";
    },
    submitForm() {
      const formData = {
        name: this.name.val,
        lead: this.lead.val,
        members: this.FTEData.val,
      };

      console.log(formData);

      this.$emit("save-data", formData);
    },
    FTEAvailable(memberID) {
      return this.groupMember.find((el) => {
        return el.id === memberID;
      }).FTEAvailable;
    },
    getFTEMax(memberID) {
      return (
        Math.round(
          (this.groupMember.find((el) => {
            return el.id === memberID;
          }).FTEAvailable -
            this.FTEData.val.find((el) => {
              return el.id === memberID;
            }).fte) *
            100
        ) / 100
      );
    },
    FTEDataIndex(memberID) {
      //Get Indey by ID
      return this.FTEData.val.findIndex((element) => {
        if (element.id === memberID) {
          return true;
        }
      });
    },
  },
  created() {
    this.FTEData = this.assignedFTE;
  },
};
</script>