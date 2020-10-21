<template >
  <section v-if="mode === 'teams'">
    <div
      class="max-w-xs mx-auto flex justify-center space-x-4 py-4 mb-10 bg-gray-300 rounded-3xl"
    >
      <button-main-light link to="/frontend/team-add"> Add </button-main-light>
      <button-main-light> Group </button-main-light>
      <button-main-light> Contact </button-main-light>
    </div>
  </section>
  <section v-if="mode === 'groups'">
    <div
      class="max-w-xs mx-auto flex justify-center space-x-4 py-4 mb-10 bg-gray-300 rounded-3xl"
    >
      <button-main-light link to="/frontend/team-add"> Add </button-main-light>
      <button-main-light> Contact </button-main-light>
    </div>
  </section>
</template>


<script>
export default {
  props: ["mode"],
  computed: {},
};
</script>