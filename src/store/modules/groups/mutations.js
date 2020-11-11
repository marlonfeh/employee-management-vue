export default {
  createGroup(state, payload) {
    state.groups.push(payload);
  },
  saveGroup(state, payload) {
    let groupItem = state.groups.find(group => group.id === payload.id);
    groupItem.name = payload.name;
    groupItem.lead = payload.lead;
    groupItem.members = payload.members;
    groupItem.tmp = false;
  },
  deleteTMPGroups(state){
    const filteredGroups = state.groups.filter((el) => {
      return el.tmp === false
    });

    state.groups = filteredGroups;
  },
  changeMemberFTE(state, data){
    data.groupData.forEach(el => {
      let memberData = state.groups.find(group => group.id === el.id).members.find(member => member.id === data.id)

      memberData.fte = el.fte
    });
  },
  toggleSelected(state, payload){
    let item = state.groups.find(group => group.id === payload);
    item.selected = !item.selected;
  },
  resetSelected(state){
    const Groups = state.groups;

    Groups.forEach(group => {
      group.selected = false;
    });
  },
  mergeGroups(state, payload){
    console.log(payload)
    state.groups.push(payload);
    console.log(state.groups)
  },
  deleteGroupByID(state, payload){
    const filteredGroups = state.groups.filter((el) => {
      return el.id !== payload
    });

    state.groups = filteredGroups;
 
  },
};