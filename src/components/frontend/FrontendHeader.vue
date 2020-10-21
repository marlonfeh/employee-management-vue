<template>
  <section
    id="frontendViews"
    class="flex justify-end space-x-4 py-2 px-4 border-solid border-b border-gray-500"
  >
    <base-button :mode="'teal-light'" link to="/frontend/team-cards"
      >Overview - Cards</base-button
    >
    <base-button :mode="'teal-light'" link to="/frontend/team-list"
      >Overview - List</base-button
    >
    <base-button :mode="'teal-light'" link to="/frontend/groups-list"
      >Overview - Groups</base-button
    >
    <base-button :mode="'teal-light'">Messages</base-button>
  </section>
</template>