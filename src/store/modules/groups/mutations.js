export default {
  createGroup(state, payload) {
    state.groups.push(payload);
  },
  saveGroup(state, payload) {
    let groupItem = state.groups.find(group => group.id === payload.id);
    groupItem.name = payload.name;
    groupItem.lead = payload.lead;
    groupItem.tmp = false;
  },
  deleteTMPGroups(state){
    const filteredGroups = state.groups.filter((el) => {
      return el.tmp === false
    });

    state.groups = filteredGroups;
  }
};