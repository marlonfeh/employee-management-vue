<template>
  <section class="container mx-auto my-10 flex flex-col space-y-6">
    <div>
      <img
        class="w-3/5 mx-auto"
        :src="require(`@/assets/illustrations/success.svg`)"
        alt=""
      />
    </div>
    <div class="w-4/5 py-6 mx-auto rounded-2xl bg-gray-800">
      <h2
        v-if="mode === 'team'"
        class="text-white text-center text-3xl font-medium"
      >
        <span class="text-green-400">Success</span> - New team member created!
      </h2>
      <h2
        v-if="mode === 'group-create'"
        class="text-white text-center text-3xl font-medium"
      >
        <span class="text-green-400">Success</span> - New Group Created!
      </h2>
      <h2
        v-if="mode === 'group-merge'"
        class="text-white text-center text-3xl font-medium"
      >
        <span class="text-green-400">Success</span> - Groups Merged!
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  props: ["mode"],
};
</script>