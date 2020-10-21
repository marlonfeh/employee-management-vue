export default {
  addMember(context, data) {
    const memberData = {
      id: context.rootGetters.memberId,
      avatarImage: context.rootGetters.avatarImage,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      qualifications: data.qualifications
    };

    context.commit('addMember', memberData);
  }
};