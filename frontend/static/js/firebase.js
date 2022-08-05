import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js"
import {getDatabase, set, ref, get, child, onValue} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js"

const firebaseConfig = {
  apiKey: "AIzaSyAM7tRN_KuhGMvVTHlK7GV1j7eEYdHUbAg",
  authDomain: "allias-c125c.firebaseapp.com",
  databaseURL: "https://allias-c125c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "allias-c125c",
  storageBucket: "allias-c125c.appspot.com",
  messagingSenderId: "95339813241",
  appId: "1:95339813241:web:53b65230dd8b57d705f7a8"
};

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const database = getDatabase()