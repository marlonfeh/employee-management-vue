export default {
  createGroup(context, data){
    const groupData = {
      id: data.id,
      name: "placeholder",
      lead: data.lead,
      members: data.members,
      tmp: true
    };

    context.commit('createGroup', groupData);
  },
  saveGroup(context, data){
    const groupData = {
      id: data.id,
      name: data.name,
      lead: data.lead,
    };

    context.commit('saveGroup', groupData);
  },
  deleteTMPGroups(context){
    context.commit('deleteTMPGroups')
  },
  changeMemberFTE(context, data){
    context.commit('changeMemberFTE', data)

    
  }
};