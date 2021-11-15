import firebase from "firebase/compat";

export default {
  actions: {
    async login(_, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        console.log("error in login");
        throw e;
      }
    },
    async register({ dispatch }, { email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const userId = await dispatch("getUid");
        await firebase.database().ref(`/users/${userId}/info`).set({
          admin: false,
          email,
        });
      } catch (e) {
        console.log("error in register");
        throw e;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout() {
      await firebase.auth().signOut();
    },
    async admin({ dispatch }) {
      const userId = await dispatch("getUid");
      return await firebase
        .database()
        .ref()
        .child("users")
        .child(userId)
        .child("info")
        .get()
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val().admin;
          }
          return false;
        });
    },
  },
  getters: {
    auth() {
      return firebase.auth().currentUser;
    },
  },
};
