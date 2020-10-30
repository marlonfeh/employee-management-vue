<template>
  <section
    id="cardSection"
    class="container mx-auto py-10 grid grid-cols-3 gap-x-24 gap-y-16 justify-items-center"
  >
    <card-item
      v-for="member in groupMembers"
      :key="member.id"
      :id="member.id"
      :avatar-image="member.avatarImage"
      :first-name="member.firstName"
      :last-name="member.lastName"
      :email="member.email"
      :qualifications="member.qualifications"
    ></card-item>
  </section>
</template>

<script>
import CardItem from "../team/CardItem.vue";

export default {
  props: ["groupMembers"],
  components: {
    CardItem,
  },
  data() {
    return {};
  },
  created() {},
};
</script>