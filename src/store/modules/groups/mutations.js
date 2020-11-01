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
  },
  changeMemberFTE(state, data){
    //const groups = state.groups


    data.groupData.forEach(el => {
      //let groupItem = state.groups.find(group => group.id === el.id)

      let memberData = state.groups.find(group => group.id === el.id).members.find(member => member.id === data.id)

      memberData.fte = el.fte
    });
  }
};