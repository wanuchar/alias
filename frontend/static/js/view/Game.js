import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Game");
    }

    async getHttml() {
        return `
            <header class="game-header">
                <div class="wrapper">
                    <div class="rules-header-wrapper">
                        <a href="/start_game_2" class="main__menu-back__button">
                            <img src="static/img/svg/arrow.svg" alt="arrow" class="arrow__pic">
                        </a>
                        <h1 class="game-header-text">
                            Рейтинг команд
                        </h1>
                        <div class="win-score-wrapper">
                            <img src="static/img/svg/crown.svg" alt="crown-pic" class="win-score-pic">
                            <p class="win-score-text">
                                60
                            </p>
                        </div>
                        
                    </div>
                </div>
            </header>

            <main class="game-main">
                <section class="game-section">        
                    <div class="game_wrapper">
                        
                        <table class="command-name-table">
                            <tr class="command-name-line">
                                <td class="command-name-cell">
                                    <p class="command-name-text">
                                        Команда 1
                                    </p>
                                </td>
                                <td class="command-name-cell">
                                    <p class="command-name-score">
                                        0
                                    </p>
                                </td>
                            </tr>
                            <tr class="command-name-line">
                                <td class="command-name-cell">
                                    <p class="command-name-text">
                                        Команда 2
                                    </p>
                                </td>
                                <td class="command-name-cell">
                                    <p class="command-name-score">
                                        0
                                    </p>
                                </td>
                            </tr>
                        </table>
                        
                        <a href="/main_game" class="main-game-scene-ref">Поехали</a>
                        
                        <h2 class="current-command-name">
                            ИМЯ КОМАНДЫ
                        </h2>
                    </div>
                </section>
            </main>
        `;
    }
}