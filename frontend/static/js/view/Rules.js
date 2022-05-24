import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Rules");
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

            <main class="rulese-main">
                <section class="rules-section">
                    <div class="wrapper">
                        <div class="rules-wrapper">
                            <p class="rules-subtitels">
                                Увлекательная командная игра для веселой компании
                            </p>
                            <div class="rules-list">
                                <li class="rules__item">
                                    <img src="static/img/svg/check.svg" alt="check-pic" class="rules-pic">
                                    <p class="rules-pic-text">Задача каждого игрока – объяснить как можно больше слов товарищам по команде за ограниченное время.</p>
                                </li>
                                <li class="rules__item">
                                    <img src="static/img/svg/cross.svg" alt="cross-pic" class="rules-pic">
                                    <p class="rules-pic-text">Во время объяснения нельзя использовать однокоренные слова, озвучивать перевод с иностранных языков.</p>
                                </li>
                                <li class="rules__item">
                                    <img src="static/img/svg/footprint.svg" alt="footprint-pic" class="rules-pic">
                                    <p class="rules-pic-text">Отгаданное слово приносит команде одно очко, а за пропущенное слово команда штрафуется (в зависимости от настроек ).</p>
                                </li>
                                <li class="rules__item">
                                    <img src="static/img/svg/crown.svg" alt="crown-pic" class="rules-pic">
                                    <p class="rules-pic-text">Победителем становится команда, у которой количество очков достигло заранее установленного значения.</p>
                                </li>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `;
    }
}