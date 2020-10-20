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
          lead: 'Franzi Maßmann',
          members: ['Franzi Maßmann', 'Marlon Fe'],
        },
        {
          id: 'g2',
          name: 'Team Dairytale',
          lead: 'Stefan Menke',
          members: ['Stefan Menke', 'Franzi Maßmann'],
        },
        {
          id: 'g3',
          name: 'Superheroes',
          lead: 'Franzi Maßmann',
          members: ['Franzi Maßmann', 'Julie Jones'],
        },
      ]
    };
  },
  mutations,
  actions,
  getters
};