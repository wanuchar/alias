import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Start Game");
    }

    async getHttml() {
        return `
            <header class="game-header">
                <div class="wrapper">
                    <div class="rules-header-wrapper">
                        <a href="/start_game_1" class="main__menu-back__button">
                            <img src="static/img/svg/arrow.svg" alt="arrow" class="arrow__pic">
                        </a>
                        <h1 class="start_game_2-header">
                            Настройки
                        </h1>
                    </div>
                </div>
            </header>

            <main class="start_game_2-main">
                <section class="start_game_2-section">
                    <div class="start_game_2-wrapper">
                        <form action="start_game_2-action" class="start_game_2-form">
                            <div class="choose_num_time">
                                <h2 class="choose_num_words-text">
                                    Количество слов
                                </h2>
                                <h2 class="choose_num_words-subtext">
                                    для достижения победы
                                </h2>
                                <input type="range" class="choose_number_words" min="10" max="100" step="10">
                                <h2 class="choose_num_words-text">
                                    Время раунда
                                </h2>
                                <h2 class="choose_num_words-subtext">
                                    продолжительность в секундах
                                </h2>
                                <input type="range" class="choose_sec" min="10" max="100" step="10">
                            </div>
                            <div class="choose_level">
                                <div class="choose_level-wrapper">
                                    <input type="button" class="level_1">
                                    <p class="choose_level-subtext">
                                        Быстрая игра
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" class="level_2">
                                    <p class="choose_level-subtext">
                                        Оптимус
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" class="level_3">
                                    <p class="choose_level-subtext">
                                        Мозговой штурм
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" class="level_4">
                                    <p class="choose_level-subtext">
                                        Словосочетания
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" class="level_5">
                                    <p class="choose_level-subtext">
                                        Рулетка
                                    </p>
                                </div>
                                
                            </div>
                        </form>
                        <a href="/game" class="next__game">Далее</a>
                    </div>
                </section>
            </main>
        `;
    }
}