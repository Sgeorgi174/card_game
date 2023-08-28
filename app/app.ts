import '../style/main.css';
import { renderFirstPageComponent } from './components/first-page-components';
import { renderGamePage } from './components/game-page-component';
import { renderLoadingPageComponent } from './components/loading-page-components';
import {
    EASY_PAGE,
    FIRST_PAGE,
    HARD_PAGE,
    MEDIUM_PAGE,
    LOADING_PAGE,
} from './routes';

export let page = FIRST_PAGE;

export let userSettings: userSet = {
    // храним время игры
    time: '0',
    // храним сложность игры
    difficulty: '',
    //храним текущий статус игры choose-difficulty-level/on-the-game-page/playing-the-game/result-congrats/result-dead
    gameStatus: '',
};

interface userSet {
    time: string;
    difficulty: string;
    gameStatus: string;
}

export const setPage = (newPage: string) => {
    page = newPage;
};

export const setNewStatus = (newStatus: string) => {
    userSettings.gameStatus = newStatus;
};

export const setTime = (newTime: string) => {
    userSettings.time = newTime;
};

export const goToPage = (page: string) => {
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
            userSettings.time = '00.00';
            renderApp();
        }

        if (page === MEDIUM_PAGE) {
            userSettings.difficulty = 'medium';
            userSettings.gameStatus = 'on-the-game-page';
            userSettings.time = '00.00';
            renderApp();
        }

        if (page === HARD_PAGE) {
            userSettings.difficulty = 'hard';
            userSettings.gameStatus = 'on-the-game-page';
            userSettings.time = '00.00';
            renderApp();
        }

        if (page === LOADING_PAGE) {
            renderApp();
        }
    }
};

export const renderApp = () => {
    const appEl = document.getElementById('app') as HTMLElement;
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
