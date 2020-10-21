<template>
  <button
    v-if="!link"
    class="my-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :to="to"
    class="my-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>