<template>
  <section
    id="cardSection"
    class="container mx-auto py-10 grid grid-cols-3 gap-x-24 gap-y-16 justify-items-center"
  >
    <card-item
      v-for="member in Members"
      :key="member.id"
      :id="member.id"
      :avatar-image="member.avatarImage"
      :first-name="member.firstName"
      :last-name="member.lastName"
      :email="member.email"
      :qualifications="member.qualifications"
      @show-log="showLog"
    ></card-item>
  </section>
  <ul v-for="member in Members" :key="member.id">
    <li>{{ member.id }}: {{ member.selected }}</li>
  </ul>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
  components: {
    CardItem,
  },
  computed: {
    Members() {
      return this.$store.getters["members/members"];
    },
  },
  methods: {
    showLog(e) {
      console.log(e);
    },
  },
};
</script>






