  import firebase from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/database';
  import 'firebase/storage';
  
  
  var config = {
    apiKey: "AIzaSyBjfqN6wBjL6MsZRFvaFrbfP38m7GElqOY",
    authDomain: "reactchatapp-e7d16.firebaseapp.com",
    databaseURL: "https://reactchatapp-e7d16.firebaseio.com",
    projectId: "reactchatapp-e7d16",
    storageBucket: "reactchatapp-e7d16.appspot.com",
    messagingSenderId: "1093897350101"
  };
  firebase.initializeApp(config);
  
  export default firebase;