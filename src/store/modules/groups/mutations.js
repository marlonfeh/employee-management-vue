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
    console.log("yes")
    /*
    const Groups = state.groups;

    Groups.forEach(arrayItem => {
      arrayItem.selected = false;
    });
    */


    const filteredGroups = state.groups.filter((el) => {
      return el.tmp === false
    });

    state.groups = filteredGroups

    console.log(state.groups)
  }
};