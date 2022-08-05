import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Game");
    }

    async addHandler() {
        let gameSett = JSON.parse(localStorage.getItem("gameSett"));

        document.getElementById('win_score').value = gameSett.wordCount;
        let commandArray = gameSett.commands;
        for(var i = 0; i < commandArray.length; i++) {
            let tableLine = `<tr class="command-name-line">
                                <td class="command-name-cell">
                                    <output id="command-name-` + i +`" class="command-name-text">` +
                                        commandArray[i].name
                                    + `</output>
                                </td>
                                <td class="command-name-cell">
                                    <output id="command-score-` + i + `" class="command-name-score">` +
                                        commandArray[i].score
                                    + `</output>
                                </td>
                            </tr>`;
            document.getElementById('table_id').insertAdjacentHTML('beforeend', tableLine);
        }

        document.getElementById('current_command_name').value = commandArray[gameSett.commandIndex].name;
        
    }

    async getHttml() {
        return `
            <header class="game-header">
                <div class="wrapper">
                    <div class="rules-header-wrapper">
                        <a href="/start_game_2" class="main__menu-back__button" data-link>
                            <img src="static/img/svg/arrow.svg" alt="arrow" class="arrow__pic">
                        </a>
                        <h1 class="game-header-text">
                            Рейтинг команд
                        </h1>
                        <div class="win-score-wrapper">
                            <img src="static/img/svg/crown.svg" alt="crown-pic" class="win-score-pic">
                            <output id="win_score" class="win-score-text">
                                60
                            </output>
                        </div>
                        
                    </div>
                </div>
            </header>

            <main class="game-main">
                <section class="game-section">        
                    <div class="game_wrapper">
                        
                        <table id="table_id" class="command-name-table">
                            
                        </table>
                        
                        <a href="/main_game" class="main-game-scene-ref" data-link>Поехали</a>
                        
                        <output id="current_command_name" class="current-command-name">
                            ИМЯ КОМАНДЫ
                        </output>
                    </div>
                </section>
            </main>
        `;
    }
}