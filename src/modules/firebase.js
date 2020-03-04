import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAivB-YCULUjKqQYFlEfddqTlYFcvFB9Oo",
    authDomain: "quiz-app-g5.firebaseapp.com",
    databaseURL: "https://quiz-app-g5.firebaseio.com",
    projectId: "quiz-app-g5",
    storageBucket: "quiz-app-g5.appspot.com",
    messagingSenderId: "168469968645",
    appId: "1:168469968645:web:fd5b47dceef5a27653e96c",
    measurementId: "G-2L2ZXWCD34"

};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }