<template>
  <div
    class="px-6 py-2 flex justify-between border-solid border border-gray-500 rounded-lg shadow-lg text-center"
  >
    <div class="flex items-center">
      <div class="pr-10 font-semibold border-r border-gray-900">
        {{ groupName }}
      </div>

      <ul class="pl-10 flex space-x-8">
        <li
          class="text-blue-600"
          v-for="groupMember in groupMembers"
          :key="groupMember"
        >
          {{ groupMember }}
        </li>
      </ul>
    </div>
    <base-button link :mode="'teal-light'" :to="groupDetailsLink"
      >Details</base-button
    >
  </div>
</template>

<script>
export default {
  props: ["id", "groupName", "groupMembers"],
  computed: {
    groupDetailsLink() {
      return "group-detail/" + this.id; // /coaches/c1
    },
  },
};
</script>