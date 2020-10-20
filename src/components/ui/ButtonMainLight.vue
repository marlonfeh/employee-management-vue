<template>
  <button
    v-if="!link"
    class="px-3 py-1 rounded-full text-white bg-teal-500 hover:bg-teal-600"
  >
    <slot></slot>
  </button>
  <router-link
    v-else
    :to="to"
    class="px-3 py-1 rounded-full text-white bg-teal-500 hover:bg-teal-600"
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