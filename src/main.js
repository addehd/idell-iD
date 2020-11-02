import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';
const firebaseConfig = {
  apiKey: "AIzaSyCTjh_NSqLDrHhvx-a6LVHgroGMJD1jAQU",
  authDomain: "idell-id.firebaseapp.com",
  databaseURL: "https://idell-id.firebaseio.com",
  projectId: "idell-id",
  storageBucket: "idell-id.appspot.com",
  messagingSenderId: "1075302460803",
  appId: "1:1075302460803:web:043e5703208cc155ba5ab6",
  measurementId: "G-ZDPMJP753X"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

export const db = firebase.firestore()
export const auth = firebase.auth()