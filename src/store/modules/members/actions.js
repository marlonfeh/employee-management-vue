export default {
  addMember(context, data) {
    const memberData = {
      id: data.id,
      //id: context.rootGetters.memberId,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender,
      age: data.age,
      avatarImage: data.avatarImage,
      nationality: data.nationality,
      location: data.location,
      email: data.email,
      qualifications: data.qualifications
    };
    context.commit('addMember', memberData);
  },
  toggleSelected(context, data){
    context.commit('toggleSelected', data)
  },
  resetSelected(context){
    context.commit('resetSelected')
  }
};