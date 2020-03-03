import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFM9Q1e_6LBr2gbiCmHkhpU8JdDsE636M",
    authDomain: "quizapp-6454c.firebaseapp.com",
    databaseURL: "https://quizapp-6454c.firebaseio.com",
    projectId: "quizapp-6454c",
    storageBucket: "quizapp-6454c.appspot.com",
    messagingSenderId: "79182458111",
    appId: "1:79182458111:web:98cbea6ef03551703930ca",
    measurementId: "G-7RYTWV1VX4"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db }