// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArEhoFcvqphAl7g5LiWnG1Q1rwGVm9pRU",
    authDomain: "foodfire-92d33.firebaseapp.com",
    projectId: "foodfire-92d33",
    storageBucket: "foodfire-92d33.appspot.com",
    messagingSenderId: "266411823627",
    appId: "1:266411823627:web:587131aff2e6b869edad0e",
    measurementId: "G-43N1N8Y8NJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
console.log(auth)
