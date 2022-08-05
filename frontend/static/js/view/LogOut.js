import { NavigateTo } from "../index.js";
import AbstractView from "./AbstractView.js";

export class Logout extends AbstractView {
    constructor() {
        super();
    }

    async addHandler() {
        localStorage.clear();
        NavigateTo('/');
    }
}