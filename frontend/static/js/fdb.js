import {
    set,
    ref,
    get,
    child,
    onValue,
  } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-database.js";
  import { User } from "./User.js";
  import { auth, database } from "./firebase.js";

  export async function getUser() {
    const user = auth.currentUser;
    const userRef = ref(database, `users/${user.uid}`);
    const localUser = new User();
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
  
      localUser.email = data.email;
      localUser.id = user.uid;
      localStorage.setItem("User", JSON.stringify(localUser));
    });
  }
  
  export async function setUser(user) {
    const us = auth.currentUser;
    let userRef = ref(database, `users/${us.uid}`);
    set(userRef, {
      email: user.email,
    }).catch((error) => {
      console.log("Sign Up:", error.message);
    });
  }