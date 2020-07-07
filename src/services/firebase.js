// TODO: Replace the following with your app's Firebase project configuration
import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyCPk9AmQaP0EopIrCj32ulTvvOVq0eZ-vE",
        authDomain: "chatnow-5932c.firebaseapp.com",
        databaseURL: "https://chatnow-5932c.firebaseio.com",
        projectId: "chatnow-5932c",
        storageBucket: "chatnow-5932c.appspot.com",
        messagingSenderId: "130086446569",
        appId: "1:130086446569:web:62bcd0516e246c6186d778",
        measurementId: "G-9E6ST7QFJ6",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth;