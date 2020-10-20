import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      members: [
        {
          id: 'm1',
          avatarImage: 'memberOne.jpg',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          email: 'maximilian.schwarzmüller@company.net',
          qualifications: ['Fullstack'],
        },
        {
          id: 'm2',
          avatarImage: 'memberTwo.jpg',
          firstName: 'Julie',
          lastName: 'Jones',
          email: 'julie.jones@company.net',
          qualifications: ['Frontend', 'Career'],
        },
        {
          id: 'm3',
          avatarImage: 'memberThree.jpg',
          firstName: 'Marlon',
          lastName: 'Fe',
          email: 'marlon.fe@company.net',
          qualifications: ['Frontend', 'Backend', 'Vue'],
        },
        {
          id: 'm4',
          avatarImage: 'memberOne.jpg',
          firstName: 'Franzi',
          lastName: 'Maßmann',
          email: 'franzi.maßmann@company.net',
          qualifications: ['Frontend', 'UI', 'UX'],
        },
        {
          id: 'm5',
          avatarImage: 'memberOne.jpg',
          firstName: 'Stefan',
          lastName: 'Menke',
          email: 'stefan.menke@company.net',
          qualifications: ['Frontend', 'Backend', 'Fullstack'],
        },
        {
          id: 'm6',
          avatarImage: 'memberOne.jpg',
          firstName: 'Hans',
          lastName: 'Müller',
          email: 'hans.müller@company.net',
          qualifications: ['Frontend', 'React'],
        },
        
      ]
    };
  },
  mutations,
  actions,
  getters
};