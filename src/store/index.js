import { createStore } from 'vuex';

import membersModule from './modules/members/index.js';
import groupsModule from './modules/groups/index.js';

const store = createStore({
  modules: {
    members: membersModule,
    groups: groupsModule
  },
  state() {
    return {
      memberId: 'm7',
    };
  },
  getters: {
    memberId(state) {
      return state.memberId;
    },
  }
});

export default store;