export class gameSettings {
    constructor() {
        this.commands = [];
        this.wordCount = 60;
        this.timeRound = 60;
        this.dict = 'fast_game';
        this.endGame = false;
        this.commandIndex = 0; //index of current command
    }
}

export class command {
    constructor(name) {
        this.name = name;
        this.guessed = 0;
        this.passed = 0;
        this.guessedWords = [];
        this.passedWords = [];
        this.score = 0;
    }
}