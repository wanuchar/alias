import AbstractView from "./AbstractView.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
import { auth } from "../firebase.js";
import { User } from "../user.js";
import { setUser } from "../fdb.js";
import { NavigateTo } from "../index.js";

export default class extends AbstractView {

    constructor() {
        super();
        this.setTitle("Sign up");
    }

    async addHandler() {
        document.getElementById('sign_up').addEventListener("click", (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const pass = document.getElementById("pass").value;
            const conf_pass = document.getElementById("conf_pass").value;

            if(conf_pass !== pass) {
                alert("Confirm password is not equal password!");
                return;
            }

            createUserWithEmailAndPassword(auth, email, pass).then(() => {
                const user = auth.currentUser;
                const localUser = new User();
                localUser.email = email;
                localUser.id = user.uid;

                localStorage.setItem("User", JSON.stringify(localUser));

                setUser(localUser).catch((error) => {
                    console.log("Sign Up:", error.message);
                });
            });
        });
    }

    async getHttml() {
        return `
            <header class="header">
                <div class="wrapper">
                    <div class="header__wrapper">
                        <div class="header__logo">
                            <a href="/" class="header__logo-link" data-link>
                                <img src="static/img/svg/Logo.svg" alt="Allias" class="header__logo-pic">
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main class="main">
                <section class="intro">
                    <div class="sign-wrapper">
                        <div class="sign_in-intro">
                            <input type="email" id="email" class="username_pass" name="email" placeholder="Введите email" required>
                            <input type="password" id="pass" class="username_pass" placeholder="Введите пароль" required>
                            <input type="password" id="conf_pass" class="username_pass" placeholder="Подтвердите пароль" required>
                            <button id="sign_up" type="submit" class="sign_up_butt">SIGN UP</button>
                        </div>   
                    </div>
                </section>
            </main>
        `;
    }
}