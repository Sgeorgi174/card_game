import { userSettings } from '../app.js';

export const renderInterface = (htmlElement) => {
    htmlElement.innerHTML = `
    <div class="interface-timer">00.00</div>
    <button class="control-button" id="control-button">${
        userSettings.gameStatus === 'playing-the-game'
            ? 'Начать заново'
            : 'Начать'
    }</div>
    `;
};
