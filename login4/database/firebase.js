// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAIP66hpFlY4id3URhssBF-O9AdDaKth64",
    authDomain: "login-70229.firebaseapp.com",
    projectId: "login-70229",
    storageBucket: "login-70229.appspot.com",
    messagingSenderId: "124754197753",
    appId: "1:124754197753:web:6e87babe2c1fdf87bf7628",
    measurementId: "G-WM8DVB4P6J"
  };
if( firebase.apps.length === 0 ){
    firebase.initializeApp( firebaseConfig );
}
const db = firebase.firestore();
export default{
    firebase, db,
}