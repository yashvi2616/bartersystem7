import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD1Rv3jepgj89jX2nViUIMe9Uu7buPDAus",
    authDomain: "barter-app-2587e.firebaseapp.com",
    projectId: "barter-app-2587e",
    storageBucket: "barter-app-2587e.appspot.com",
    messagingSenderId: "571623166609",
    appId: "1:571623166609:web:96f7e4fa78b3f2614ba530"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();
