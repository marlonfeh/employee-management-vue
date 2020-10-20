<template>
  <frontend-header></frontend-header>
  <router-view></router-view>
</template>


<script>
import FrontendHeader from "../../components/frontend/FrontendHeader.vue";

export default {
  components: {
    FrontendHeader,
  },
};
</script>