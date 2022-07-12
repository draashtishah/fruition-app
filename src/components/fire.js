import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBtXCDzLNSwC7FkXA5X8ZyqowxTpijTY7o",
    authDomain: "fruitions-event-planners.firebaseapp.com",
    projectId: "fruitions-event-planners",
    storageBucket: "fruitions-event-planners.appspot.com",
    messagingSenderId: "552368314672",
    appId: "1:552368314672:web:b131cbc9c3d6314baed0f5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };