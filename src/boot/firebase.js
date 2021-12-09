import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAy7TPvMB9gQI2Q-xwUlJjofNxwXF1uQNA",
  authDomain: "qwitter-20bed.firebaseapp.com",
  projectId: "qwitter-20bed",
  storageBucket: "qwitter-20bed.appspot.com",
  messagingSenderId: "151170522780",
  appId: "1:151170522780:web:1dc075f658f537543b5759"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
