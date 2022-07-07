import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDITMWpktkrC8VDqvi8yP47F5309LycSQg",
    authDomain: "monospace-a3435.firebaseapp.com",
    projectId: "monospace-a3435",
    storageBucket: "monospace-a3435.appspot.com",
    messagingSenderId: "539486483268",
    appId: "1:539486483268:web:0bb803cd88fff46212dd11",
    measurementId: "G-83PF65M3WV"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

onAuthStateChanged(auth,function(e){
    if(!e){location.href='../index.html'}
})

