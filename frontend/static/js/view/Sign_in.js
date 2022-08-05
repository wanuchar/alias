import AbstractView from "./AbstractView.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-auth.js";
import { getUser } from "../fdb.js";
import { auth } from "../firebase.js";
import { NavigateTo } from "../index.js";


export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Sign in");
    }

    async addHandler() {
        document.getElementById('sign_in').addEventListener("click", (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('pass').value;

            signInWithEmailAndPassword(auth, email, password)
            .then(async () => {
                await getUser();
            })
            .catch((error) => {
                console.log("Sign in error:", error.message);
                alert("You are not logged in");
            });
        })
    }

    async getHttml() {
        return `
            <header class="header">
                <div class="wrapper">
                    <div class="header__wrapper">
                        <div class="header__logo">
                            <a href="/" class="header__logo-link">
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
                            <form action="sign_in" class="sign_in-form">
                                <input type="email" id="email" class="username_pass" placeholder="Введите email">
                                <input type="password" id="pass" class="username_pass" placeholder="Введите пароль">
                                <button id="sign_in" class="sign_in_butt">SIGN IN</button>
                            </form>
                        </div>   
                    </div>
                </section>
            </main>
        `;
    }
}