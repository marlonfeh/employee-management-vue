import { createRouter, createWebHistory } from 'vue-router';

import FrontendView from './pages/frontend/FrontendView.vue';
import TeamCards from './pages/frontend/team/TeamCards.vue';
import TeamList from './pages/frontend/team/TeamList.vue';
import AddMember from './pages/frontend/team/TeamAdd.vue';
import GroupsList from './pages/frontend/groups/GroupsList.vue';
import PlaceholderBackend from './pages/backend/PlaceholderBackend.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', redirect: '/frontend/team-cards' },
    { path: '/', redirect: '/frontend/team-cards' },
    { path: '/frontend', component: FrontendView, children: [
      { path: 'team-cards', component: TeamCards }, 
      { path: 'team-list', component: TeamList },
      { path: 'team-add', component: AddMember },
      { path: 'groups-list', component: GroupsList },
      { path: '', component: TeamCards },
      ]
    },
    {  },
    { path: '/backend', component: PlaceholderBackend },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});



export default router;