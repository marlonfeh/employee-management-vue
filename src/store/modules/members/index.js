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
          avatarImage: 'maleOne.jpg',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          email: 'maximilian.schwarzmüller@company.net',
          qualifications: ['Fullstack'],
          gender: "Male",
          age: 42,
          nationality: "UK",
          location: "London",
        },
        {
          id: 'm2',
          avatarImage: 'femaleTwo.jpg',
          firstName: 'Julie',
          lastName: 'Jones',
          email: 'julie.jones@company.net',
          qualifications: ['Frontend', 'Career'],
          gender: "Female",
          age: 45,
          nationality: "France",
          location: "Paris",
        },
        {
          id: 'm3',
          avatarImage: 'maleOne.jpg',
          firstName: 'Marlon',
          lastName: 'Fe',
          email: 'marlon.fe@company.net',
          qualifications: ['Frontend', 'Backend', 'Vue'],
          gender: "Male",
          age: 25,
          nationality: "Germany",
          location: "Hamburg",
        },
        {
          id: 'm4',
          avatarImage: 'femaleOne.jpg',
          firstName: 'Franzi',
          lastName: 'Maßmann',
          email: 'franzi.maßmann@company.net',
          qualifications: ['Frontend', 'UI', 'UX'],
          gender: "Female",
          age: 24,
          nationality: "Germany",
          location: "Passau",
        },
        {
          id: 'm5',
          avatarImage: 'maleOne.jpg',
          firstName: 'Stefan',
          lastName: 'Menke',
          email: 'stefan.menke@company.net',
          qualifications: ['Frontend', 'Backend', 'Fullstack'],
          gender: "Male",
          age: 30,
          nationality: "Germany",
          location: "Bielefeld",
        },
        {
          id: 'm6',
          avatarImage: 'maleOne.jpg',
          firstName: 'Hans',
          lastName: 'Müller',
          email: 'hans.müller@company.net',
          qualifications: ['Frontend', 'React'],
          gender: "Male",
          age: 60,
          nationality: "Germany",
          location: "Munich",
        },
        
      ]
    };
  },
  mutations,
  actions,
  getters
};