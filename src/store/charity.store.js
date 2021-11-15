import firebase from "firebase/compat";

export default {
  actions: {
    async addTicket({ dispatch }, formData) {
      const userId = await dispatch("getUid");
      console.log(userId);
      try {
        await firebase
          .database()
          .ref(`/tickets/${userId}`)
          .set({ info: { ...formData, uid: userId } });
      } catch (e) {
        console.log(e);
      }
    },

    async getTicket({ dispatch }) {
      const userId = await dispatch("getUid");

      console.log(userId);
      if (!userId) {
        return;
      }
      try {
        return await firebase
          .database()
          .ref()
          .child("tickets")
          .child(userId)
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log("tyt");
              console.log(snapshot.val());
              return true;
            }
          });
      } catch (e) {
        console.log(e);
      }
    },

    async getTickets() {
      console.log("TYT: tickets");
      try {
        return await firebase
          .database()
          .ref()
          .child("tickets")
          .get()
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log("tyt");
              return Object.values(snapshot.val());
            }
            return false;
          });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
