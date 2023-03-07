//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAYqk752vSfIug2L2jsbv4rB90_R5A2Fpw",
    authDomain: "comp1800-d17fe.firebaseapp.com",
    projectId: "comp1800-d17fe",
    storageBucket: "comp1800-d17fe.appspot.com",
    messagingSenderId: "968740684965",
    appId: "1:968740684965:web:c54cce947699e1cd36b94c"
  
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
