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
                        <a href="/" class="main__menu-back__button">
                            <img src="static/img/svg/arrow.svg" alt="arrow" class="arrow__pic">
                        </a>
                        <h1 class="start_game_1-header">
                            Команды
                        </h1>
                    </div>
                </div>
            </header>

            <main class="start_game_1-main">
                <section class="start_game_1-section">
                    <div class="start_game_1-wrapper">
                        <div class="start_game_1-intro">
                            <form action="start_game_1-form-action" class="start_game_1-form">
                                <input type="text" class="command_name" placeholder="Введите имя команды">
                                <input type="text" class="command_name" placeholder="Введите имя команды">
                                <button class="add_command"><img src="static/img/svg/plus.svg" alt="plus-pic" class="add_command-pic"></button>
                            </form>
                            <a href="/start_game_2" class="next_start_game">Далее</a>    
                        </div>    
                    </div>
                </section>
            </main>
        `;
    }
}