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
    <button-secondary>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="h-4 w-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </button-secondary>
  </div>
</template>

<script>
export default {
  props: ["id", "groupName", "groupMembers"],
};
</script>