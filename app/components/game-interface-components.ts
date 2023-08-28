import { goToPage, page, setPage } from '../app';
import { delay } from '../modules/delay';
import { startTimer, stopTimer } from '../modules/timer';
import { FIRST_PAGE, LOADING_PAGE } from '../routes';

interface userSet {
    time: string;
    difficulty: string;
    gameStatus: string;
}

export const renderInterface = (
    htmlElement: HTMLElement,
    userSettings: userSet,
) => {
    htmlElement.innerHTML = `
    <div class="interface-timer">00.00</div>
    <div class="result ${
        userSettings.gameStatus === 'result-congrats' ||
        userSettings.gameStatus === 'result-dead'
            ? 'result_open'
            : 'hidden'
    }">
            <div class="result-wrapper ${
                userSettings.gameStatus === 'result-congrats' ||
                userSettings.gameStatus === 'result-dead'
                    ? 'result-wrapper_open'
                    : ''
            }">
                <div class="result-img">
                    <img src="./img/${
                        userSettings.gameStatus === 'result-dead'
                            ? 'dead'
                            : 'celebration'
                    }.png" alt="" />
                </div>
                <div class="result-title">Вы ${
                    userSettings.gameStatus === 'result-dead'
                        ? 'Проиграли'
                        : 'Выйграли'
                }!</div>
                <div class="result-text">Затраченное время:</div>
                <div class="result-time">01.20</div>
                <button id="restart-button" class="result-button">Играть снова</button>
            </div>
    </div>
    <button class="control-button" id="control-button">${
        userSettings.gameStatus === 'playing-the-game'
            ? 'Начать заново'
            : 'Начать'
    }</div>
    `;
    const timerElement = htmlElement.querySelector(
        '.interface-timer',
    ) as HTMLElement;

    const resultTime = htmlElement.querySelector('.result-time') as HTMLElement;

    if (userSettings.gameStatus === 'playing-the-game') {
        startTimer(timerElement);
    }

    if (
        userSettings.gameStatus === 'result-congrats' ||
        userSettings.gameStatus === 'result-dead'
    ) {
        resultTime.innerHTML = userSettings.time;
        stopTimer();
    }

    const restartBtnInResult = htmlElement.querySelector(
        '#restart-button',
    ) as HTMLElement;

    restartBtnInResult.addEventListener('click', () => {
        setPage(LOADING_PAGE);
        goToPage(page);
        stopTimer();
        delay(1000).then(() => {
            setPage(FIRST_PAGE);
            goToPage(page);
        });
    });
};
