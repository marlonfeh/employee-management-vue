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
      avatarImage: 'memberTwo.jpg'
    };
  },
  getters: {
    memberId(state) {
      return state.memberId;
    },
    avatarImage(state){
      return state.avatarImage;
    }
  }
});

export default store;