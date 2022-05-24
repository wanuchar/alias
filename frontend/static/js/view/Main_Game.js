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
                    <div class="game-main-header-wrapper">            
                        <h1 class="game-main-header-text">
                            ИМЯ КОМАНДЫ
                        </h1>
                    </div>
                </div>
            </header>

            <main class="game-main-scene">
                <section class="game-main-scene-section">
                    <div class="game-main-scene-intro">
                        
                        <div class="game-main-scene-wrapper">
                            <div class="current-score-on-scene-top">
                                <h2 class="score-on-scene" id="score-top">
                                    0
                                </h2>
                                <h2 class="score-on-scene-text">
                                    Отгадано
                                </h2>
                            </div>

                            <div class="mange-game">
                                <img src="static/img/svg/bigger.svg" alt="smaller-pic" class="smaller">
                                <p class="main-game-scene-ref" id="word">СЛОВО</p>
                                <img src="static/img/svg/bigger.svg" alt="bigger-pic" class="bigger">
                            </div>

                            <div class="current-score-on-scene-bottom">
                                <h2 class="score-on-scene-text">
                                    Пропущено
                                </h2>
                                <h2 class="score-on-scene" id="score-bottom">
                                    0
                                </h2>
                            </div>
                            <div class="pause-and-timer">
                                <a href="/game" class="pause">Стоп</a>
                                <p class="timer">00:45</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `;
    }
}