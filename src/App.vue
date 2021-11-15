<template>
  <router-view />
</template>

<script>
import firebase from "firebase/compat";

export default {
  name: "App",

  beforeUnmount() {
    if (firebase.auth().currentUser.uid) {
      firebase.auth().signOut();
    }
  },
};
</script>

<style scoped></style>
