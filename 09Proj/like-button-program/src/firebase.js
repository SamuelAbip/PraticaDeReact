import firebase from "firebase/app";
import "firebase/database";

  var firebaseConfig = {
    apiKey: "AIzaSyAO14qBfWN-JuHZyEFyj7kk04h_NOScj4A",
    authDomain: "likebuttonproject.firebaseapp.com",
    databaseURL: "https://likebuttonproject.firebaseio.com",
    projectId: "likebuttonproject",
    storageBucket: "likebuttonproject.appspot.com",
    messagingSenderId: "975182392127",
    appId: "1:975182392127:web:abd1da6790c6623d0ac18a"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;