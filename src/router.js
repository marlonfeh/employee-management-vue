import { createRouter, createWebHistory } from 'vue-router';

import FrontendView from './pages/frontend/FrontendView.vue';
import TeamCards from './pages/frontend/team/TeamCards.vue';
import TeamList from './pages/frontend/team/TeamList.vue';
import TeamAdd from './pages/frontend/team/TeamAdd.vue';
import MemberDetail from './pages/frontend/team/MemberDetail.vue';
import TeamAddSuccess from './pages/frontend/team/TeamAddSuccess.vue';

import GroupsList from './pages/frontend/groups/GroupsList.vue';
import GroupDetail from './pages/frontend/groups/GroupDetail.vue';
import GroupAdd from './pages/frontend/groups/GroupAdd.vue';
import GroupAddSuccess from './pages/frontend/groups/GroupAddSuccess.vue';
import GroupMerge from './pages/frontend/groups/GroupMerge.vue';
import GroupMergeSuccess from './pages/frontend/groups/GroupMergeSuccess.vue';

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
      { path: 'team-add', component: TeamAdd },
      { path: 'team-add/success', component: TeamAddSuccess},
      { path: 'team-cards/:id', component: MemberDetail, props: true},
      
      { path: 'groups-list', component: GroupsList },
      { path: 'group-detail/:id', component: GroupDetail, props: true},
      { path: 'group-add/:id', component: GroupAdd, props: true},
      { path: 'group-add/success', component: GroupAddSuccess},
      { path: 'group-merge/:id', component: GroupMerge, props: true},
      { path: 'group-merge/success', component: GroupMergeSuccess},
      
      { path: '', component: TeamCards },
      
      ]
    },
    { path: '/backend', component: PlaceholderBackend },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});



export default router;