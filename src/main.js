import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

import "@/assets/css/bootstrap.min.css";

firebase.initializeApp({
  apiKey: "AIzaSyDVlA3lW0_8AtEthsCcZF_fhCdCQhG07cE",
  authDomain: "charity-c6359.firebaseapp.com",
  databaseURL: "https://charity-c6359-default-rtdb.firebaseio.com",
  projectId: "charity-c6359",
  storageBucket: "charity-c6359.appspot.com",
  messagingSenderId: "423186644341",
  appId: "1:423186644341:web:d7f4011b495089e0cba73c",
  measurementId: "G-L4512LRYJX"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).mount("#app");
  }
});
