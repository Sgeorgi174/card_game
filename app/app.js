import '../style/main.css';
import { renderFirstPageComponent } from './components/first-page-components.js';
import { renderGamePage } from './components/game-page-component.js';
import { renderLoadingPageComponent } from './components/loading-page-components.js';
import {
    EASY_PAGE,
    FIRST_PAGE,
    HARD_PAGE,
    MEDIUM_PAGE,
    LOADING_PAGE,
} from './routes.js';

export let page = FIRST_PAGE;

export let userSettings = {
    // храним набранные очки(будут вычисляться через время и возможно коэффициент сложности)
    score: 0,
    // храним время игры
    time: 0,
    // храним сложность игры
    difficulty: null,
    //храним текущий статус игры choose-difficulty-level/on-the-game-page/playing-the-game/result
    gameStatus: null,
};

export const setPage = (newPage) => {
    page = newPage;
};

export const setNewStatus = (newStatus) => {
    userSettings.gameStatus = newStatus;
};

export const goToPage = (page) => {
    if (
        [EASY_PAGE, FIRST_PAGE, HARD_PAGE, MEDIUM_PAGE, LOADING_PAGE].includes(
            page,
        )
    ) {
        if (page === FIRST_PAGE) {
            userSettings.gameStatus = 'choose-difficulty-level';
            renderApp();
        }

        if (page === EASY_PAGE) {
            userSettings.difficulty = 'easy';
            userSettings.gameStatus = 'on-the-game-page';
            console.log(userSettings);
            renderApp();
        }

        if (page === MEDIUM_PAGE) {
            userSettings.difficulty = 'medium';
            userSettings.gameStatus = 'on-the-game-page';
            console.log(userSettings);
            renderApp();
        }

        if (page === HARD_PAGE) {
            userSettings.difficulty = 'hard';
            userSettings.gameStatus = 'on-the-game-page';
            console.log(userSettings);
            renderApp();
        }

        if (page === LOADING_PAGE) {
            renderApp();
        }
    }
};

export const renderApp = () => {
    const appEl = document.getElementById('app');
    if (page === EASY_PAGE || page === MEDIUM_PAGE || page === HARD_PAGE) {
        return renderGamePage(appEl);
    }

    if (page === FIRST_PAGE) {
        return renderFirstPageComponent(appEl);
    }

    if (page === LOADING_PAGE) {
        return renderLoadingPageComponent(appEl);
    }
};

goToPage(page);
