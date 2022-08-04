import AbstractView from "./AbstractView.js";
import { gameSettings, command } from "../GameSettings.js";
import { NavigateTo } from "../index.js";

function testUnique(A)
{   
    var n = A.length;
    for (var i = 0; i < n-1; i++)
     { for (var j = i+1; j < n; j++)
        { if (A[ i ] === A[j]) return false; }
     }
    return true;
}

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Start Game");
    }

    async addHandler() {
        document.getElementById('add_comm_but').addEventListener("click", (e) => {
            var newCommandField = '<input type="text" class="command_name" placeholder="Введите имя команды" required>';
            
            document.getElementById('start_game_1-form-id').insertAdjacentHTML('beforeend', newCommandField);
        });

        document.getElementById('next_start_game-id').addEventListener("click", (e)=> {
            let commandsArray = Array.from(document.getElementsByClassName('command_name'));
            let checked = commandsArray.map((elem) => elem.validity.valid).every(elem => elem === true);
            if(checked) {
                let commandsNames = commandsArray.map((elem) => elem.value)
                if(testUnique(commandsNames)) {
                    var gameSett = new gameSettings();
                    for (const elem of commandsNames) {
                        let new_command = new command(elem);
                        gameSett.commands.push(new_command);
                    }
                    localStorage.setItem("gameSett", JSON.stringify(gameSett));
                }
                else {
                    alert('Имена комманд должны быть уникальными!');
                    document.getElementById('next_start_game-id').href = '/start_game_1';
                }
            }
            else 
            {
                alert('Все поля должны быть заполнены!');
                document.getElementById('next_start_game-id').href = '/start_game_1';
            }

        })
    }

    async getHttml() {
        return `
            <header class="game-header">
                <div class="wrapper">
                    <div class="rules-header-wrapper">
                        <a href="/" class="main__menu-back__button" data-link>
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
                            <form id="start_game_1-form-id" class="start_game_1-form">
                                <input type="text" class="command_name" placeholder="Введите имя команды" required>
                                <input type="text" class="command_name" placeholder="Введите имя команды" required> 
                            </form>
                            <button id="add_comm_but" class="add_command"><img src="static/img/svg/plus.svg" alt="plus-pic" class="add_command-pic"></button>
                            <a href="/start_game_2" id="next_start_game-id" class="next_start_game" data-link>Далее</a>    
                        </div>    
                    </div>
                </section>
            </main>
        `;
    }
}