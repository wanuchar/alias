class Dict {
    constructor() {
        this.name = '';
        this.words = [];
    }
}

export async function createDicts() {
    let dicts = [];

    let fast_game = new Dict();
    let fast_list = ["Кекс", "Луг", "Тень", "Кактус", "Свадьба", "Рост", "Год", "Кот", "Океан", "Мама", "Снег", "Человек"];
    fast_game.name = "fast_game";
    fast_game.words = fast_list;
    dicts.push(fast_game);

    let optimus = new Dict();
    let optimus_list = ["Коллекция", "Венок", "Валерьянка", "Каприз", "Дубликат", "Закономерность", "Пантера", "Обаяние", "Муляж", "Обаняние", "Мольба"];
    optimus.name = 'optimus';
    optimus.words = optimus_list;
    dicts.push(optimus);

    let brainstorm = new Dict();
    let brainstorm_list = ["Логовище", "Субординация", "Шиворот", "Житие", "Опознание", "Консульство", "Блесна", "Узы", "Пучина", "Интеграция", "Антресоль", "Солод", "Аннулировать", "Лот", "Многообразие", "Гурьба", "Гриф", "Миледи", "Скипетр"];
    brainstorm.name = 'brainstorm';
    brainstorm.words = brainstorm_list;
    dicts.push(brainstorm);

    let phrase = new Dict();
    let phrase_list = ["Тернистый путь", "Шаткое положение", "Центр вселенной", "Деревянная лодка", "Партнерская программа", "Народное возмущение", "Технологические новинки", "Узкие рамки", "Канализационный насос", "Годовалый малыш", "Гандбольная федерация"];
    phrase.name = 'phrase';
    phrase.words = phrase_list;
    dicts.push(phrase);

    let random = new Dict();
    let random_list = fast_list.concat(optimus_list, brainstorm_list, phrase_list);
    random.name = 'random';
    random.words = random_list;
    dicts.push(random);

    localStorage.setItem("Dicts", JSON.stringify(dicts))
}