
import firebase from "firebase/app";
import "firebase/firestore";



var firebaseConfig = {
    apiKey: "AIzaSyD7lBW0gTYR2TiYQETv6f3msbXAdq7lpxg",
    authDomain: "project-89f7a.firebaseapp.com",
    projectId: "project-89f7a",
    storageBucket: "project-89f7a.appspot.com",
    messagingSenderId: "605006436283",
    appId: "1:605006436283:web:c0e355834f4d850d0d569e"
  };
if( firebase.apps.length === 0 ){
    firebase.initializeApp( firebaseConfig );
}
const db = firebase.firestore();
export default{
    firebase, db,
}