<template>
  <section
    id="header"
    class="flex justify-end space-x-4 py-2 px-4 border-solid border-b border-gray-500"
  >
    <base-button link to="/frontend/team-cards" :mode="'teal-dark'">
      Frontend
    </base-button>
    <base-button link to="/backend" :mode="'teal-dark'">
      Master Data
    </base-button>
    <base-button :mode="'teal-dark'"> Options </base-button>
    <base-button :mode="'teal-dark'"> Save </base-button>
  </section>
</template>