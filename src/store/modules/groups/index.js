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
          tmp: false,
        },
        {
          id: 'g2',
          name: 'Team Dairytale',
          lead: 'm5',
          members: ["m5", "m4"],
          tmp: false,
        },
        {
          id: 'g3',
          name: 'Superheroes',
          lead: 'm4',
          members: ["m4", "m2", "m3"],
          tmp: true,
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};