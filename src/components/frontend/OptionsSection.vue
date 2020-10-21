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
      <base-button :mode="'teal-light'"> Group </base-button>
      <base-button> Contact </base-button>
    </div>
    <!--Groups-->
    <div
      class="flex justify-center space-x-4 py-3 px-4 mb-10 bg-gray-300 rounded-2xl"
      v-if="mode === 'groups'"
    >
      <base-button :mode="'teal-light'" link to="/frontend/team-add">
        Add
      </base-button>
      <base-button :mode="'teal-light'"> Edit </base-button>
      <base-button :mode="'teal-light'"> Contact </base-button>
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
  computed: {},
};
</script>