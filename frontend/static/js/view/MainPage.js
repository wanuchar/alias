import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Allias");
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
            
                        <nav class="header__nav">
                            <ul class="header__list">
                                <li class="header__item">
                                    <a href="/" class="header__link" data-link>Главная</a>
                                </li>
                                <li class="header__item">
                                    <a href="/rules" class="header__link" data-link>Правила</a>
                                </li>
                                <li class="header__item">
                                    <a href="/contact" class="header__link" data-link>Контакты</a>
                                </li>
                            </ul>
                            <div id="sign_menu_id" class="sign-menu">
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main class="main">
                <section class="intro">
                    <div class="wrapper">
                    <div class="main__content__wrapper">
                            <div class="intro__wrapper">
                                <h1 class="intro__title">
                                    Игра для веселой компании
                                </h1>
                                <p class="intro__subtitle">
                                    “Alias” или “Скажи иначе” нужно объяснить другими словами разгадываемое слово.
                                </p>
                                <a href="/start_game_1" id="start_button" class="start__button-ref" data-link>Начать игру</a>
                            </div>
                            <img src="static/img/svg/cards.svg" alt="cards-pic" class="cards__pic">
                    </div>
                    </div>
                </section>
            </main>
        `;
    }
}