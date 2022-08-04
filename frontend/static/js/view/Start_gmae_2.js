import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Start Game");
    }

    async addHandler() {
        let gameSett = JSON.parse(localStorage.getItem("gameSett"));

        let words_input = document.getElementById('words_input');
        let words_output = document.getElementById('num_of_words');
        words_input.addEventListener('input', (e) => {
            e.preventDefault();
            words_output.value = words_input.value;
            gameSett.wordCount = parseInt(words_input.value);
        });

        let time_input = document.getElementById('time_input');
        let time_output = document.getElementById('time_of_round');
        time_input.addEventListener('input', (e) => {
            e.preventDefault();
            time_output.value = time_input.value;
            gameSett.timeRound = parseInt(time_input.value);
        });

        let buttons_div = document.getElementById('choose_level_id');
        let btns = buttons_div.getElementsByTagName('input');
        for(var i=0; i < btns.length; i++) {
            btns[i].addEventListener('click', function() {
                var current = document.getElementsByClassName('active');
                var newName = current[0].className.replace(" active", "");
                current[0].className = newName;
                this.className += " active";
                gameSett.dict = this.id;
            });
        }

        document.getElementById('next_game_id').addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.setItem("gameSett", JSON.stringify(gameSett));
        });
    }

    async getHttml() {
        return `
            <header class="game-header">
                <div class="wrapper">
                    <div class="rules-header-wrapper">
                        <a href="/start_game_1" class="main__menu-back__button" data-link>
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
                                <div class="words">
                                    <div class="choose_num_words_wrapper">
                                        <h2 class="choose_num_words-text">
                                            Количество слов
                                        </h2>
                                        <h2 class="choose_num_words-subtext">
                                            для достижения победы
                                        </h2>
                                    </div>
                                    <output id="num_of_words" class="number_of_words">60</output>
                                </div>
                                <input type="range" id="words_input" class="choose_number_words" min="10" max="100" step="10">
                                <div class="time">
                                    <div class="choose_time_wrapper">
                                        <h2 class="choose_num_words-text">
                                        Время раунда
                                        </h2>
                                        <h2 class="choose_num_words-subtext">
                                            продолжительность в секундах
                                        </h2>
                                    </div>
                                    <output id="time_of_round" class="time_of_round">60</output>
                                </div>
                                <input type="range" id="time_input" class="choose_sec" min="10" max="100" step="10">
                            </div>
                            <div class="choose_level" id="choose_level_id">
                                <div class="choose_level-wrapper">
                                    <input type="button" id="fast_game" class="level_1 active">
                                    <p class="choose_level-subtext">
                                        Быстрая игра
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" id="optimus" class="level_2">
                                    <p class="choose_level-subtext">
                                        Оптимус
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" id="brainstorm" class="level_3">
                                    <p class="choose_level-subtext">
                                        Мозговой штурм
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" id="phrase" class="level_4">
                                    <p class="choose_level-subtext">
                                        Словосочетания
                                    </p>
                                </div>
                                <div class="choose_level-wrapper">
                                    <input type="button" id="random" class="level_5">
                                    <p class="choose_level-subtext">
                                        Рулетка
                                    </p>
                                </div>
                                
                            </div>
                        </form>
                        <a href="/game" id="next_game_id" class="next__game" data-link>Далее</a>
                    </div>
                </section>
            </main>
        `;
    }
}