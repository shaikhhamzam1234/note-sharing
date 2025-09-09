// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdXQEvMVnaHlXiCUsyqDXhnfCd_XJE1zQ",
  authDomain: "noteshare-7da31.firebaseapp.com",
  projectId: "noteshare-7da31",
  storageBucket: "noteshare-7da31.firebasestorage.app",
  messagingSenderId: "858758304612",
  appId: "1:858758304612:web:564840d1db59af9a88e071"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
