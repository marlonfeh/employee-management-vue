export default {
  addMember(state, payload) {
    state.members.push(payload);
  },
  toggleSelected(state, payload){
    let item = state.members.find(member => member.id === payload);
    item.selected = !item.selected;
  },
};