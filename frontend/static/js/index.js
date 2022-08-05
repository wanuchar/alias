import MainPage from "./view/MainPage.js";
import Rules from "./view/Rules.js";
import Contact from "./view/Contact.js";
import Start_game_1 from "./view/Start_game_1.js";
import Start_gmae_2 from "./view/Start_gmae_2.js";
import Game from "./view/Game.js";
import Main_Game from "./view/Main_Game.js";
import Sign_in from "./view/Sign_in.js";
import Sign_up from "./view/Sign_up.js";
import { createDicts } from "./Dict.js";
import { Logout } from "./view/LogOut.js";
import AbstractView from "./view/AbstractView.js";

export const NavigateTo = url => {
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
        },
        {
            path: "/sign_in",
            view: Sign_in
        },
        {
            path: "/sign_up",
            view: Sign_up
        },
        {
            path: "/log_out",
            view: Logout
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

    if(match.route.path !== '/' && match.route.path !== '/sign_in' && match.route.path !== '/sign_up' && !localStorage.getItem('User')) {
        alert("Необходимо зарегистрироваться!");
        return;
    }

    const view = new match.route.view();
    document.querySelector('#app').innerHTML = await view.getHttml();
    

    if (match.route.path === '/' && !localStorage.getItem("User")) {
        document.querySelector('#sign_menu_id').insertAdjacentHTML('beforeend',
       `<div class="sign_item">
            <a href="/sign_in" class="header__link" data-link>Sign in</a>
        </div>
        <div class="sign_item">
            <a href="/sign_up" class="header__link" data-link>Sign up</a>
        </div>`);
    }

    if (match.route.path === '/' && localStorage.getItem('User')) {
        document.querySelector('#sign_menu_id').insertAdjacentHTML('beforeend',
       `<div class="sign_item">
            <a href="/log_out" class="header__link" id="" data-link>Log out</a>
        </div>`);
    }
    
    await view.addHandler();

    console.log("localStorage", localStorage);
};

await createDicts();

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