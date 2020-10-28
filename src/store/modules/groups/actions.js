export default {
  
  createGroup(context, data){
    const groupData = {
      id: data.id,
      name: data.name,
      lead: data.lead,
      members: data.members
    };

    context.commit('createGroup', groupData);
  }
  
};