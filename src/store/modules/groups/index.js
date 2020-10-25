import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      groups: [
        {
          id: 'g1',
          name: 'Team Vue',
          lead: 'm4',
          members: ["m4", "m3", "m1", "m5", "m6"],
        },
        {
          id: 'g2',
          name: 'Team Dairytale',
          lead: 'm5',
          members: ["m5", "m4"],
        },
        {
          id: 'g3',
          name: 'Superheroes',
          lead: 'm4',
          members: ["m4", "m2", "m3"],
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};