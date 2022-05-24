import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact");
    }

    async getHttml() {
        return `
            <header class="rules-header">
                <div class="wrapper">
                    <div class="rules-header-wrapper">
                        <a href="/" class="main__menu-back__button">
                            <img src="static/img/svg/arrow.svg" alt="arrow" class="arrow__pic">
                        </a>
                        <img src="static/img/svg/Logo.svg" alt="logo-pic" class="logo-pic">
                    </div>
                </div>
            </header>
            
            <main class="contacts-main">
                <section class="contacts-section">
                    <div class="contacts-wrapper">
                        <div class="contacts-list">
                            <li class="contacts-item">
                                <img src="static/img/svg/github.svg" alt="github-pic" class="contacts-pic">
                                <a href="https://github.com/wanuchar" class="contacts-link">https://github.com/wanuchar</a>
                            </li>
                            <li class="contacts-item">
                                <img src="static/img/svg/telegram.svg" alt="telegram-pic" class="contacts-pic">
                                <a href="https://t.me/wwwanu4" class="contacts-link">@wwwanu4</a>
                            </li>
                            <li class="contacts-item">
                                <img src="static/img/svg/linkedin.svg" alt="linkedin-pic" class="contacts-pic">
                                <a href="https://www.linkedin.com/in/yanmikhniuk/" class="contacts-link">https://www.linkedin.com/in/yanmikhniuk/</a>
                            </li>
                        </div>
                        <p class="made-by">
                            Made by<br>
                            Yan Mikhniuk
                        </p>
                    </div>
                </section>
            </main>
        `;
    }
}