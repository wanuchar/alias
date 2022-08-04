import { NavigateTo } from "../index.js";
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Start Game");
    }

    async addHandler() {
        let gameSett = JSON.parse(localStorage.getItem('gameSett'));
        let dict = []
        for (var elem of JSON.parse(localStorage.getItem('Dicts'))) {
            if (elem.name == gameSett.dict) {
                dict = elem.words;
                console.log(dict)
            }
        }

        let timerId = null;
        let deadline = gameSett.timeRound * 1000;
        function countDown () {
            deadline = deadline - 1000;
            if (deadline <= 0) {
                clearInterval(timerId);
                val_guess = 0;
                val_pass = 0;

                gameSett.commands[gameSett.commandIndex].score = gameSett.commands[gameSett.commandIndex].guessed - gameSett.commands[gameSett.commandIndex].passed;

                if (gameSett.commands[gameSett.commandIndex].score >= gameSett.wordCount) {
                    alert("Команда " + gameSett.commands[gameSett.commandIndex].name + " победила!");
                    window.location.href = '/';
                }

                if (gameSett.commandIndex < gameSett.commands.length - 1) {
                    gameSett.commandIndex ++;
                }
                else {
                    gameSett.commandIndex = 0;
                }
                localStorage.setItem('gameSett', JSON.stringify(gameSett));
                NavigateTo('/game');
            }
            let minutes = deadline > 0 ? Math.floor(deadline / 1000 / 60) : 0;
            let seconds = deadline > 0 ? Math.floor(deadline / 1000) % 60 : 0;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            let time = minutes + ':' + seconds;
            document.getElementById('timer-id').value = time;
        }
        
        countDown();
        timerId = setInterval(countDown, 1000);

        document.getElementById('game_main_command_name').value = gameSett.commands[gameSett.commandIndex].name;
        
        let word = document.getElementById('word');
        word.value = dict[Math.floor(Math.random() * dict.length)];

        let pass = document.getElementById('pass');
        let guess = document.getElementById('guess');

        let val_pass = 0;
        pass.addEventListener('click', (e) => {
            e.preventDefault();
            val_pass += 1;
            
            word.value = dict[Math.floor(Math.random() * dict.length)];
            gameSett.commands[gameSett.commandIndex].passed += 1;
            document.getElementById('score-bottom').value = val_pass;
        });

        let val_guess = 0;
        guess.addEventListener('click', (e) => {
            e.preventDefault();
            val_guess += 1;

            word.value = dict[Math.floor(Math.random() * dict.length)];
            gameSett.commands[gameSett.commandIndex].guessed += 1;
            document.getElementById('score-top').value = val_guess;
        });

        document.getElementById('stop').addEventListener('click', (e) => {
            e.preventDefault();
            val_guess = 0;
            val_pass = 0;
            clearInterval(timerId);

            gameSett.commands[gameSett.commandIndex].score = gameSett.commands[gameSett.commandIndex].guessed - gameSett.commands[gameSett.commandIndex].passed;

            if (gameSett.commands[gameSett.commandIndex].score >= gameSett.wordCount) {
                alert("Команда " + gameSett.commands[gameSett.commandIndex].name + " победила!");
                window.location.href = '/';
            }

            if (gameSett.commandIndex < gameSett.commands.length - 1) {
                gameSett.commandIndex ++;
            }
            else {
                gameSett.commandIndex = 0;
            }
            localStorage.setItem('gameSett', JSON.stringify(gameSett));
        });
    }

    async getHttml() {
        return `
            <header class="game-header">
                <div class="wrapper">
                    <div class="game-main-header-wrapper">            
                        <output id="game_main_command_name" class="game-main-header-text">
                            ИМЯ КОМАНДЫ
                        </output>
                    </div>
                </div>
            </header>

            <main class="game-main-scene">
                <section class="game-main-scene-section">
                    <div class="game-main-scene-intro">
                        
                        <div class="game-main-scene-wrapper">
                            <div class="current-score-on-scene-top">
                                <output class="score-on-scene" id="score-top">
                                    0
                                </output>
                                <h2 class="score-on-scene-text">
                                    Отгадано
                                </h2>
                            </div>

                            <div class="mange-game">
                                <img src="static/img/svg/bigger.svg" alt="smaller-pic" id="pass" class="smaller">
                                <output class="main-game-scene-ref" id="word">СЛОВО</output>
                                <img src="static/img/svg/bigger.svg" alt="bigger-pic" id="guess" class="bigger">
                            </div>

                            <div class="current-score-on-scene-bottom">
                                <h2 class="score-on-scene-text">
                                    Пропущено
                                </h2>
                                <output class="score-on-scene" id="score-bottom">
                                    0
                                </output>
                            </div>
                            <div class="pause-and-timer">
                                <a href="/game" class="pause" id="stop" data-link>Стоп</a>
                                <output id="timer-id" class="timer">00:45</output>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        `;
    }
}