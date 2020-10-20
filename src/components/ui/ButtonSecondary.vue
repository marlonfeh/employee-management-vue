<template>
  <button
    v-if="!link"
    class="px-3 py-1 rounded-full text-white bg-teal-700 hover:bg-teal-800"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :to="to"
    class="px-3 py-1 rounded-full text-white bg-teal-700 hover:bg-teal-800"
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