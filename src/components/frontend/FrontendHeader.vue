<template>
  <section
    id="frontendViews"
    class="flex justify-end space-x-4 py-2 px-4 border-solid border-b border-gray-500"
  >
    <base-button :mode="'teal-light'" link to="/frontend/team-cards"
      >Team - Cards</base-button
    >
    <base-button :mode="'teal-light'" link to="/frontend/team-list"
      >Team - List</base-button
    >
    <base-button :mode="'teal-light'" link to="/frontend/groups-list"
      >Groups - List</base-button
    >
  </section>
</template>