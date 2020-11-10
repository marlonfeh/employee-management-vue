<template>
  <p>{{ id }}</p>
  <merge-group-form></merge-group-form>
</template>

<script>
import MergeGroupForm from "../../../components/frontend/groups/MergeGroupForm.vue";

export default {
  components: {
    MergeGroupForm,
  },
  props: ["id"],
};
</script>