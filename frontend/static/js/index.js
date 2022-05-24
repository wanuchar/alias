import MainPage from "./view/MainPage.js";
import Rules from "./view/Rules.js";
import Contact from "./view/Contact.js";
import Start_game_1 from "./view/Start_game_1.js";
import Start_gmae_2 from "./view/Start_gmae_2.js";
import Game from "./view/Game.js";
import Main_Game from "./view/Main_Game.js";

const NavigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        {
            path: "/",
            view: MainPage
        },
        {
            path: "/rules",
            view: Rules
        },
        {
            path: "/contact",
            view: Contact
        },
        {
            path: "/start_game_1",
            view: Start_game_1
        },
        {
            path: "/start_game_2",
            view: Start_gmae_2
        },
        {
            path: "/game",
            view: Game
        },
        {
            path: "/main_game",
            view: Main_Game
        }
    ];

    //Test routes for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHttml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            NavigateTo(e.target.href);
        }
    });

    router();
});