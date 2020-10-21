<template>
  <!--Teal Light-->
  <button
    v-if="!link && mode === 'teal-light'"
    class="my-auto px-3 py-1 rounded-full text-white bg-teal-500 hover:bg-teal-600"
  >
    <slot></slot>
  </button>
  <router-link
    v-else-if="link && mode === 'teal-light'"
    :to="to"
    class="my-auto px-3 py-1 rounded-full text-white bg-teal-500 hover:bg-teal-600"
  >
    <slot></slot>
  </router-link>
  <!--Teal Dark-->
  <button
    v-if="!link && mode === 'teal-dark'"
    class="my-auto px-3 py-1 rounded-full text-white bg-teal-700 hover:bg-teal-800"
  >
    <slot></slot>
  </button>
  <router-link
    v-else-if="link && mode === 'teal-dark'"
    :to="to"
    class="my-auto px-3 py-1 rounded-full text-white bg-teal-700 hover:bg-teal-800"
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
    mode: {
      type: String,
      required: true,
      default: "teal-light",
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>