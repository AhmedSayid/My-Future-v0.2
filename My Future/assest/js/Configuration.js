import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup,GithubAuthProvider, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDITMWpktkrC8VDqvi8yP47F5309LycSQg",
  authDomain: "monospace-a3435.firebaseapp.com",
  projectId: "monospace-a3435",
  storageBucket: "monospace-a3435.appspot.com",
  messagingSenderId: "539486483268",
  appId: "1:539486483268:web:0bb803cd88fff46212dd11",
  measurementId: "G-83PF65M3WV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
///
const provider_google = new GoogleAuthProvider(app);
const provider_github = new GithubAuthProvider(app);


// provider
provider_github.setCustomParameters({
    'allow_signup': 'true'
});
document.getElementById('signin_with_github_provider').onclick = function(){
    signInWithPopup(auth,provider_github).then((e)=>{
        location.href="../provider/provider.html"
    })
}

document.getElementById('signin_with_google_provider').onclick = function(){
    signInWithPopup(auth,provider_google).then((e)=>{
        location.href="../provider/provider.html"
    })
}
//////////
document.getElementById('signin_with_github_buyer').onclick = function(){
    signInWithPopup(auth,provider_github).then((e)=>{
        location.href="../buy/buyr.html"
    })
}

document.getElementById('signin_with_google_buyer').onclick = function(){
    signInWithPopup(auth,provider_google).then((e)=>{
        location.href="../buy/buyr.html"
    })
}

